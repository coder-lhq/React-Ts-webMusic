import React, { memo, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import type { ReactNode, FC } from 'react'

import NavBar from './c-cpns/nav-bar'
interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div className="discover">
      <NavBar></NavBar>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
