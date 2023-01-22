import { getApi } from '../axios'

export const sponsor = (id: string) => async () => {
  const response = await getApi().post('/sponsor/' + id)
  return response.data
}

export const doesSponsor = (id: string) => async () => {
  const response = await getApi().get('/sponsor/doesponsor/' + id)
  return response.data
}

export const getSponsors = (id: string) => async () => {
  const response = await getApi().get('/sponsor/' + id)
  return response.data
}

export const countSponsors = (id: string) => async () => {
  if (!id) return 0
  const response = await getApi().get('/sponsor/count/' + id)
  return response.data
}

export const getMySponsors = async () => {
  const response = await getApi().get('/sponsor/')
  return response.data
}

export const countMySponsors = async () => {
  const response = await getApi().get('/sponsor/me/count')
  return response.data
}

export const getSponsorings = (id: string) => async () => {
  const response = await getApi().get('/sponsor/sponsoring/star/' + id)
  return response.data
}

export const getMySponsorings = async () => {
  const response = await getApi().get('/sponsor/sponsoring/me')
  return response.data
}

export const countSponsorings = (id: string) => async () => {
  const response = await getApi().get('/sponsor/sponsoring/count/' + id)
  return response.data
}
