import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

// 歌单
const Songs: FC<IProps> = () => {
  return <div>Songs</div>
}

export default memo(Songs)
