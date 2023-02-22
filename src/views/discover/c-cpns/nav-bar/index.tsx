import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { NavLink } from 'react-router-dom'
import NavBarWrapper from './style'
import { discoverMenu } from '@/assets/data/local-data'
interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  return (
    <NavBarWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item, index) => {
          return (
            <div className="item" key={index}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </NavBarWrapper>
  )
}

export default memo(NavBar)
