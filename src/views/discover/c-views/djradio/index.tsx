import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}
// 主播电台
const Djradio: FC<IProps> = () => {
  return <div>Djradio</div>
}

export default memo(Djradio)
