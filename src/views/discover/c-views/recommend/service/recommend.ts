import HRequest from '@/service'

export function getBanners() {
  return HRequest.get({
    url: '/banner'
  })
}
export function getHotRecommend(limit = 30) {
  return HRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbum() {
  return HRequest.get({
    url: '/album/newest'
  })
}

export function getPlayListDetail(id: number) {
  return HRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export function getArtistList(limit = 5) {
  return HRequest.get({
    url: '/artist/list',
    params: {
      limit
    }
  })
}
