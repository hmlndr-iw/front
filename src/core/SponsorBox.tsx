import { Button } from '~/ui'
import { useDoesSponsor, useSponsor } from './api/sponsor'

export default function SponsorBox(props: Props) {
  const sponsor = useSponsor()
  const doesSponsor = useDoesSponsor()

  function handleSponsor() {
    sponsor.mutate()
  }

  if (doesSponsor.isLoading) return null

  if (doesSponsor.data === true)
    return (
      <Button
        className={`sm:pr-0 w-[unset] ${props.className}`}
        // onClick={handleUnsponsor}
        // onClick={handleSponsor}
        // loading={loading}
      >
        Sponsoring
      </Button>
    )

  return (
    <Button
      loading={sponsor.isLoading}
      variant="primary"
      onClick={handleSponsor}
      className={props.className}
    >
      Sponsor
    </Button>
  )
}

interface Props {
  does?: boolean
  className?: string
}
