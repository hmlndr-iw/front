import { useParams } from 'react-router-dom'
import { getApi } from '../axios'

export const follow = (id: string) => async () => {
  const response = await getApi().post(`/follow/${id}`)
  return response.data
}

export const doesfollow = (id: string) => async () => {
  const response = await getApi().get(`/follow/doesfollow/${id}`)
  return response.data
}

export const unfollow = (id: string) => async () => {
  const response = await getApi().delete(`/follow/${id}`)
  return response.data
}

export const getFollowers = async () => {
  const response = await getApi().get('/follow/myfollowers')
  return response.data
}
