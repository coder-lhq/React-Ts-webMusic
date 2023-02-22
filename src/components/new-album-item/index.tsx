import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

import { NewAlbumItemWrapper } from './style'

interface IProps {
  children?: ReactNode
  itemData: any
}

const NewAlbumItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <NewAlbumItemWrapper>
      <div className="album-image">
        <img src={itemData.picUrl} alt="" />
        <a className="cover sprite_cover">{itemData.name}</a>
      </div>
      <div className="album-info">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </NewAlbumItemWrapper>
  )
}

export default memo(NewAlbumItem)
