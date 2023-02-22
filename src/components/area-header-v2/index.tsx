import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { AreaHeaderv2Wrapper } from './style'

interface IProps {
  children?: ReactNode
  title: string
  moreText?: string
  moreLink?: string
}

const AreaHeaerV2: FC<IProps> = (props) => {
  const { title, moreText = '', moreLink = '' } = props
  return (
    <AreaHeaderv2Wrapper>
      <h3>{title}</h3>
      {moreText && moreLink && <a href={moreLink}>{moreText}&gt;</a>}
    </AreaHeaderv2Wrapper>
  )
}

export default memo(AreaHeaerV2)
