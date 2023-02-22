import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

import TopRankingItem from '../top-ranking-item'
import AreaHeaderV1 from '@/components/area-header-v1'
import { TopRankingWrapper } from './style'
import { useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  const { rankings } = useAppSelector((state) => ({
    rankings: state.recommend.rankings
  }))
  return (
    <TopRankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/Ranking"></AreaHeaderV1>
      <div className="content">
        {rankings.map((item) => {
          return <TopRankingItem key={item.id} itemData={item}></TopRankingItem>
        })}
      </div>
    </TopRankingWrapper>
  )
}

export default memo(TopRanking)
