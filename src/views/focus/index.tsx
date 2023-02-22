import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Foucs: FC<IProps> = () => {
  return <div>Foucs</div>
}

export default memo(Foucs)
