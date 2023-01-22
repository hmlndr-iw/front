import { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '~/ui'
import { useCurrentRoute } from './hooks'

export default function StarProfileNavigation() {
  const isCurrentRoute = useCurrentRoute()
  const { id } = useParams()

  const linkStyle = useCallback(
    (_route: string) => {
      console.log(isCurrentRoute(_route), _route)
      return `${
        isCurrentRoute(_route) ? '!text-[#000]' : '!text-[#888]'
      } text-xs sm:text-base`
    },
    [isCurrentRoute]
  )

  return (
    <div>
      <div className="flex justify-center sm:justify-start py-4">
        <Button className={linkStyle(`/stars/${id}`)} href={`/stars/${id}`}>
          About
        </Button>
        <Button
          className={linkStyle(`/stars/${id}/gallery`)}
          href={`/stars/${id}/gallery`}
        >
          Gallery
        </Button>
        <Button
          className={linkStyle(`/stars/${id}/sponsors`)}
          href={`/stars/${id}/sponsors`}
        >
          Sponsors
        </Button>
      </div>
      <hr />
    </div>
  )
}
