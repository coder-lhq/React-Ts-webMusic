import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

import { TopRankingItemWrapper } from './style'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: any
}

const Home: FC<IProps> = (props) => {
  const { itemData } = props
  const { tracks = [] } = itemData
  return (
    <TopRankingItemWrapper>
      <div className="header">
        <div className="image">
          <img src={getImageSize(itemData.coverImgUrl, 80)} alt="" />
          <a href="" className="sprite_cover"></a>
        </div>
        <div className="info">
          <div className="name">{itemData.name}</div>
          <div>
            <button className="sprite_02 btn play"></button>
            <button className="sprite_02 btn favor"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="item" key={item.id}>
              <div className="index">{index + 1}</div>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="operator">
                  <div className="btn sprite_02 play"></div>
                  <div className="btn sprite_icon2 add"></div>
                  <div className="btn sprite_02 favor"></div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="footer">
        <a href="#/discover/ranking">查看全部&gt;</a>
      </div>
    </TopRankingItemWrapper>
  )
}

export default memo(Home)
