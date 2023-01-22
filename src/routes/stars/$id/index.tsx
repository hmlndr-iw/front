import FollowBox from '~/core/FollowBox'
import ProfileHeader from '~/core/ProfileHeader'
import SponsorBox from '~/core/SponsorBox'
import { Button, Container } from '~/ui'
import StarProfileNavigation from '~/core/StarProfileNavigator'
import SuggestedUsers from '~/core/SuggestedUsers'
import { useGetUser } from '~/core/api/users'
import Protected from '~/Protected'
import { useFollow } from '~/core/api/follow'
import { useGetMe } from '~/core/api/users/context'
import { useCountSponsors } from '~/core/api/sponsor'

function Content() {
  const { data, isLoading } = useGetUser()
  const me = useGetMe()

  const count = useCountSponsors(me.data.role)

  if (isLoading) return null

  if (!data) return <div>User not found</div>

  return (
    <div className="py-10">
      <Container className="grid grid-cols-4 gap-10">
        <div className="col-span-4 xl:col-span-3">
          <ProfileHeader
            profilePicture={data.profilePicture}
            name={data.fullname}
            title={data.title}
            role={data.role}
            sponsorsCount={count.isLoading ? '~' : count.data}
            actions={
              <div className="grid grid-cols-2 sm:flex space-x-2 justify-end">
                {me.data?.role !== 'sponsor' ? (
                  <div>
                    <FollowBox className="!w-full sm:w-[unset]" />
                  </div>
                ) : (
                  <div>
                    <SponsorBox className="!w-full sm:w-[unset]" />
                  </div>
                )}
              </div>
            }
          />
          <StarProfileNavigation />
          <div className="px-2 sm:px-6 py-6">
            {data.bio ? data.bio : 'No bio'}
          </div>
        </div>

        <div className="col-span-4 xl:col-span-1">
          <SuggestedUsers />
        </div>
      </Container>
    </div>
  )
}
export default function Index() {
  return (
    <Protected>
      <Content />
    </Protected>
  )
}
