import React, { memo, useRef } from 'react'
import type { ReactNode, FC, ElementRef } from 'react'
import { Carousel } from 'antd'

import AreaHeaderV1 from '@/components/area-header-v1'
import NewAlbumItem from '@/components/new-album-item'
import { NewAlbumWrapper } from './style'
import { useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  /** 定义内部数据 */
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const { newAlbum } = useAppSelector((state) => ({
    newAlbum: state.recommend.newAlbum
  }))
  /** 事件处理函数 */
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextCLick() {
    bannerRef.current?.next()
  }
  return (
    <NewAlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button
          className="arrowLeft sprite_02 arrow"
          onClick={handlePrevClick}
        ></button>
        <div className="banner">
          <Carousel ref={bannerRef} speed={1500} dots={false}>
            {[0, 1].map((data) => {
              return (
                <div key={data} className="album-list">
                  {newAlbum.slice(data * 5, (data + 1) * 5).map((item) => {
                    return (
                      <NewAlbumItem
                        key={item.id}
                        itemData={item}
                      ></NewAlbumItem>
                    )
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="arrowRight sprite_02 arrow"
          onClick={handleNextCLick}
        ></button>
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbum)
