import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

import { HotRecommendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import SongsMenuItem from '@/components/songs-menu-item'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { hots } = useAppSelector(
    (state) => ({
      hots: state.recommend.hots
    }),
    shallowEqualApp
  )
  return (
    <HotRecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      ></AreaHeaderV1>
      <div className="recommend-list">
        {hots.map((item) => {
          return <SongsMenuItem key={item.id} itemData={item}></SongsMenuItem>
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
