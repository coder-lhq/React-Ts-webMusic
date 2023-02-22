import React, { memo, useRef, useState } from 'react'
import type { ReactNode, FC, ElementRef } from 'react'
import { Carousel } from 'antd'
import classNames from 'classnames'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  /** 定义内部的数据 */
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqualApp
  )

  /**事件处理函数 */
  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }

  /**获取背景图片 */
  let bgimageUrl = banners[currentIndex]?.imageUrl
  if (bgimageUrl) {
    bgimageUrl = `${bgimageUrl}?imageView&blur=40x20`
  }
  return (
    <BannerWrapper
      style={{ background: `url(${bgimageUrl}) center center / 6000px` }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            effect="fade"
            dots={false}
            ref={bannerRef}
            afterChange={handleAfterChange}
          >
            {banners.map((item) => {
              return (
                <div className="banenr-item" key={item.encodeId}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.titleColor}
                  />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames('item', {
                      active: index === currentIndex
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight>
          <span className="tip">PC 安卓 iPhone WP iPad Mac 六大客户端</span>
        </BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
