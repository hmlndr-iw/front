import { useDoesFollow } from './api/follow'
import { useGetUser } from './api/users'
import FollowBox from './FollowBox'
import ProfileHeader from './ProfileHeader'
import SponsorBox from './SponsorBox'

export default function OtherProfileHeader() {
  const { data, isLoading } = useGetUser()

  console.log(data.role !== 'sponsor')

  return (
    <ProfileHeader
      profilePicture={data.profilePicture}
      name={data.fullname}
      title={data.title}
      sponsorsCount={54}
      actions={
        <div className="grid grid-cols-2 sm:flex space-x-2 justify-end">
          <div>
            <FollowBox className="!w-full sm:w-[unset]" />
          </div>
          {data.role !== 'sponsor' ? null : (
            <div>
              <SponsorBox does={false} className="!w-full sm:w-[unset]" />
            </div>
          )}
        </div>
      }
    />
  )
}
