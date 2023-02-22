import styled from 'styled-components'

export const HotAnchorWrapper = styled.div`
  padding: 20px;
  .anchors {
    margin-top: 20px;

    .item {
      display: flex;
      margin-bottom: 10px;
      width: 210px;
      img {
        width: 40px;
        height: 40px;
        cursor: pointer;
      }

      .info {
        width: 160px;
        margin-left: 8px;
        .name {
          color: #000;
          font-weight: 700;
          margin-top: 3px;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }

        .position {
          color: #666;
          ${(props) => props.theme.mixin.textNoWrap}
        }
      }
    }
  }
`
