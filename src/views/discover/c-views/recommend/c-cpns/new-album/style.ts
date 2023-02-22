import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
  margin-top: 50px;

  .content {
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .arrow {
      width: 17px;
      height: 17px;
      cursor: pointer;
    }
    .arrowLeft {
      background-position: -260px -75px;

      &:hover {
        background-position: -280px -75px;
      }
    }

    .arrowRight {
      background-position: -300px -75px;

      &:hover {
        background-position: -320px -75px;
      }
    }
    .banner {
      width: 640px;
      height: 150px;
      .album-list {
        display: flex !important;
        justify-content: space-between;
      }
    }
  }
`
