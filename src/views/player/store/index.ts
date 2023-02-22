import { createSlice } from '@reduxjs/toolkit'

interface IPlayerState {
  currentSong: any
}

const initialState: IPlayerState = {
  currentSong: {
    name: '精卫（0.9x立体热播版）',
    id: 2015788828,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 53704718,
        name: '焦小飞',
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: '',
    fee: 0,
    v: 7,
    crbt: null,
    cf: '',
    al: {
      id: 158465612,
      name: '十月',
      picUrl:
        'https://p1.music.126.net/UHBBk8KrtTeCAm85E58jMA==/109951168246336290.jpg',
      tns: [],
      pic_str: '109951168246336290',
      pic: 109951168246336290
    },
    dt: 100992,
    h: {
      br: 320000,
      fid: 0,
      size: 4040685,
      vd: -8980,
      sr: 48000
    },
    m: {
      br: 192000,
      fid: 0,
      size: 2424429,
      vd: -6375,
      sr: 48000
    },
    l: {
      br: 128000,
      fid: 0,
      size: 1616301,
      vd: -4661,
      sr: 48000
    },
    sq: null,
    hr: null,
    a: null,
    cd: '01',
    no: 1,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 0,
    s_id: 0,
    mark: 524288,
    originCoverType: 2,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 7,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 0,
    mv: 0,
    publishTime: 1674057600000
  }
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {}
})

export default playerSlice.reducer
