import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getArtistList,
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlayListDetail
} from '../service/recommend'

export const fetchRecommendDataAction = createAsyncThunk(
  'fetchData',
  (_, { dispatch }) => {
    getBanners().then((res) => {
      dispatch(changeBannersAction(res.banners))
    })
    getHotRecommend(8).then((res) => {
      dispatch(changeHotRecommendAction(res.result))
    })
    getNewAlbum().then((res) => {
      dispatch(changeNewAlbumAction(res.albums))
    })
    getArtistList().then((res) => {
      dispatch(changeArtistAction(res.artists))
    })
  }
)

const rankingId = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk(
  'rankingData',
  (_, { dispatch }) => {
    const promise: Promise<any>[] = []
    for (const id of rankingId) {
      promise.push(getPlayListDetail(id))
    }
    Promise.all(promise).then((res) => {
      const playlists = res.map((item) => item.playlist)
      dispatch(changeRankingsAction(playlists))
    })
  }
)

interface IRecommendState {
  banners: any[]
  hots: any[]
  newAlbum: any[]
  rankings: any[]
  artist: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hots: [],
  newAlbum: [],
  rankings: [],
  artist: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hots = payload
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbum = payload
    },
    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    },
    changeArtistAction(state, { payload }) {
      state.artist = payload
    }
  }
  // extraReducers(builder) {
  //   builder
  //     .addCase(fetchBannerDataAction.pending, () => {
  //       console.log('pending')
  //     })
  //     .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //       state.banners = payload
  //     })
  //     .addCase(fetchBannerDataAction.rejected, () => {
  //       console.log('reject')
  //     })
  // }
})
export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeRankingsAction,
  changeArtistAction
} = recommendSlice.actions
export default recommendSlice.reducer
