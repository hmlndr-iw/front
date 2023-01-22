import * as api from './rq'

import { useQuery, useMutation } from 'react-query'

import { useModal } from '~/ui/Modal'
import { useParams } from 'react-router-dom'

export const useCreatePost = () => {
  const { close } = useModal()
  const { refetch } = useGetMyPosts()
  const mutation = useMutation(api.createPost, {
    onSuccess: () => {
      refetch()
      close()
    },
  })
  return mutation
}

export const useGetMyPosts = () => {
  return useQuery('myposts', api.getMyPosts)
}

export const useGetPostsByUser = () => {
  const { id } = useParams()
  return useQuery(['posts', id], () => api.getPostsByUser(id || ''))
}
