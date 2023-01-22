import { useState } from 'react'
import { Button } from '~/ui'
import { useDoesFollow, useFollow, useUnfollow } from './api/follow'

export default function FollowBox(props: Props) {
  const follow = useFollow()
  const doesFollow = useDoesFollow()
  const unfollow = useUnfollow()

  function handleFollow() {
    follow.mutate()
  }

  function handleUnfollow() {
    unfollow.mutate()
  }

  if (doesFollow.isLoading) return null
  console.log('doesFollow', doesFollow)

  if (doesFollow.data)
    return (
      <Button
        variant="tertiary"
        className={`border-none w-[unset] ${props.className}`}
        onClick={handleUnfollow}
        loading={unfollow.isLoading}
      >
        Following
      </Button>
    )

  return (
    <Button
      loading={follow.isLoading}
      variant="tertiary"
      onClick={handleFollow}
      className={props.className}
    >
      Follow
    </Button>
  )
}

interface Props {
  does?: boolean
  className?: string
}
