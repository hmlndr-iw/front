import { useParams } from 'react-router-dom'
import { getApi } from '../axios'

export const createPost = async (post: any) => {
  const formData = new FormData()
  for (const key in post) {
    formData.append(key, post[key])
  }

  const response = await getApi('multipart/form-data').post('/post', formData)
  return response.data
}

export const getMyPosts = async () => {
  const response = await getApi().get('/post/myposts')
  return response.data
}

export const getPostsByUser = async (id: string) => {
  const response = await getApi().get(`/post/user/${id}`)
  return response.data
}
