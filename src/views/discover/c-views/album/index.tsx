import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}
// 新碟上架
const Album: FC<IProps> = () => {
  return <div>Album</div>
}

export default memo(Album)
