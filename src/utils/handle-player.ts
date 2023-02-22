import HRequest from '@/service'

export function getPlayerUrl(id: number): any {
  return HRequest.get({
    url: '/song/url',
    params: {
      id
    }
  })
}
