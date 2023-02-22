import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Dowmload: FC<IProps> = () => {
  return <div>Dowmload</div>
}

export default memo(Dowmload)
