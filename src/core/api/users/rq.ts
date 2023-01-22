import { getApi } from '../axios'

export const signup = async (user: any) => {
  const response = await getApi().post('/user/signup', user)
  return response.data
}

export const login = async (user: any) => {
  const response = await getApi().post('/user/login', user)
  return response.data
}

export const getMe = async () => {
  const response = await getApi().get('/user/me')
  return response.data
}

export const updateMe = async (user: any) => {
  const formData = new FormData()
  for (const key in user) {
    formData.append(key, user[key])
  }

  const response = await getApi('multipart/form-data').put(
    '/user/update',
    formData
  )
  return response.data
}

export const getAllUsers = async () => {
  const response = await getApi().get('/user')
  return response.data
}

export const getUser = async (id: string) => {
  const response = await getApi().get(`/user/${id}`)
  return response.data
}
