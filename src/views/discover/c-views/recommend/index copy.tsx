import React, { memo, useEffect, useState } from 'react'
import type { ReactNode, FC } from 'react'
import request from '@/service'
interface IProps {
  children?: ReactNode
}

export interface IBanner {
  imageUrl: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  scm: string
  bannerBizType: string
}

// 推荐
const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<IBanner[]>([])
  // 测试网络请求
  useEffect(() => {
    request
      .get({
        url: '/banner'
      })
      .then((res) => {
        setBanners(res.banners)
      })
  }, [])
  return (
    <div>
      {banners.map((item, index) => {
        return <div key={index}>{item.imageUrl}</div>
      })}
    </div>
  )
}

export default memo(Recommend)
