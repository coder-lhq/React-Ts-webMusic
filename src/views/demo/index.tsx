import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
  name: string
  age: number
  height?: number
}
const Dowmload: React.FC<IProps> = (props) => {
  return (
    <div>
      <div>dowmload</div>
      <div>{props.name}</div>
      <div>{props.age}</div>
      <div>{props.children}</div>
    </div>
  )
}
// const Dowmload = (props: IProps) => {
//   return (
//     <div>
//       <div>{props.name}</div>
//       <div>{props.age}</div>
//     </div>
//   )
// }

export default memo(Dowmload)
