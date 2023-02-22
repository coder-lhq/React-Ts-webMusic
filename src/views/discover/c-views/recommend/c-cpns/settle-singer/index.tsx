import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { SettleSingerWrapper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2'
import { useAppSelector } from '@/store'
import { getImageSize } from '@/utils/format'
interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = () => {
  const { artistList } = useAppSelector((state) => ({
    artistList: state.recommend.artist
  }))
  return (
    <SettleSingerWrapper>
      <AreaHeaderV2
        title="入住歌手"
        moreText="查看全部"
        moreLink="#/discover/artist"
      ></AreaHeaderV2>
      <div className="list">
        {artistList.map((item) => {
          return (
            <a className="item" href="#/discover/artist" key={item.id}>
              <img src={getImageSize(item.picUrl, 62)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="alia">{item.alias.join(' ')}</div>
              </div>
            </a>
          )
        })}
      </div>
      <div className="apply-for">
        <a href="#/">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  )
}

export default memo(SettleSinger)
