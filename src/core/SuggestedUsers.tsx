import { useGetAllUsers } from './api/users'
import UserCard from './UserCard'

export default function SuggestedUsers() {

  const data: any = [{
    id: '1',
    fullname: '50 x Cement Bags',
    profilePicture: 'https://www.chercheinfo.com/uploads/0-abc82604a1.jpg',
    title: '980.00 TND @ 10000 Articles'
  }, {
    id: '2',
    fullname: 'Wall paint 1000m2',
    profilePicture: 'https://www.chercheinfo.com/uploads/0-abc82604a1.jpg',
    title: '1867.10 TND @ 10000 Articles'
  }]

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="font-semibold text-xl">Received Invoices</h1>
      <div className="grid gap-6">
        {data?.map(
          (user: {
            id: string
            fullname: string
            profilePicture?: string
            title?: string
          }) => (
            <UserCard
              id={user.id}
              key={user.id}
              fullname={user.fullname}
              image={user.profilePicture}
              title={user.title}
            />
          )
        )}
      </div>
    </div>
  )
}
