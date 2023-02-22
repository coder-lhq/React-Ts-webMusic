import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

import { AreaHeaderV1Wrapper } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  title?: string
  keywords?: string[]
  more?: string
  moreLink?: string
}

const AreaHeaerV1: FC<IProps> = (props) => {
  const {
    title = '默认标题',
    keywords = [],
    more = '更多',
    moreLink = '/'
  } = props
  return (
    <AreaHeaderV1Wrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="text">{item}</span>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <Link className="more" to={moreLink}>
          {more}
        </Link>
        <i className="sprite_02 icon"></i>
      </div>
    </AreaHeaderV1Wrapper>
  )
}

export default memo(AreaHeaerV1)
