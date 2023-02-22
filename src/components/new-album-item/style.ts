import styled from 'styled-components'

export const NewAlbumItemWrapper = styled.div`
  .album-image {
    position: relative;
    width: 118px;
    height: 100px;
    overflow: hidden;
    margin-top: 15px;

    img {
      width: 100px;
      height: 100px;
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 -570px;
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 12px;
    width: 100px;
    .name {
      color: #000;
      ${(props) => props.theme.mixin.textNoWrap}
    }

    .artist {
      color: #666;
    }
  }
`
