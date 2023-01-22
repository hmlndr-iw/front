import * as api from './rq'

import { useQuery, useMutation } from 'react-query'

import { useModal } from '~/ui/Modal'
import { useParams } from 'react-router-dom'

export const useFollow = () => {
  const { id } = useParams()
  const doesfollow = useDoesFollow()
  const mutation = useMutation(api.follow(id || ''), {
    onSuccess: () => {
      doesfollow.refetch()
    },
  })
  return mutation
}

export const useDoesFollow = () => {
  const { id } = useParams()
  return useQuery(['doesfollow', id], api.doesfollow(id || ''))
}

export const useUnfollow = () => {
  const { id } = useParams()
  const doesfollow = useDoesFollow()
  const mutation = useMutation(api.unfollow(id || ''), {
    onSuccess: () => {
      doesfollow.refetch()
    },
  })
  return mutation
}

export const useGetFollowers = () => {
  return useQuery('followers', api.getFollowers)
}
