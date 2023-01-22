import * as api from './rq'
import { useQuery, useMutation } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

export const useSponsor = () => {
  const { id } = useParams()

  const mutation = useMutation(api.sponsor(id || ''), {
    onSuccess: () => {
      // push('/sponsor')
    },
  })
  return mutation
}

export const useDoesSponsor = () => {
  const { id } = useParams()
  return useQuery(['doesponsor', id], api.doesSponsor(id || ''))
}

export const useGetSponsors = (role: string) => {
  const { id } = useParams()
  if (role !== 'user')
    return useQuery(['sponsorings', id], api.getSponsorings(id || ''))
  return useQuery(['sponsors', id], api.getSponsors(id || ''))
}

export const useGetMySponsors = (role: string) => {
  if (role !== 'user') return useQuery('my-sponsorings', api.getMySponsorings)
  return useQuery('my-sponsors', api.getMySponsors)
}

export const useCountMySponsors = () => {
  return useQuery('count-my-sponsors', api.countMySponsors)
}

export const useCountSponsors = (role: string) => {
  const { id } = useParams()
  if (role !== 'user')
    return useQuery(['count-sponsorings', id], api.countSponsorings(id || ''))
  return useQuery(['count-sponsors', id], api.countSponsors(id || ''))
}
