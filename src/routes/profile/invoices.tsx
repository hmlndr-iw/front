import ProfileHeader from '~/core/ProfileHeader'
import { Button, Container } from '~/ui'
import ProfileNavigation from '~/core/ProfileNavigation'
import GalleryCard from '~/core/GalleryCard'
import Modal from '~/ui/Modal'
import UploadPostForm from '~/core/UploadPostForm'
import SuggestedUsers from '~/core/SuggestedUsers'
import MyProfileHeader from '~/core/MyProfileHeader'
import Protected from '~/Protected'
import { useGetMyPosts } from '~/core/api/posts'
import {
  Table,
  ScrollArea,
  Paper,
  Switch,
  Badge,
} from '@mantine/core'

function Row(row: DataFormat) {
  return (
    <tr key={row.id}>
      <td>{row.title}</td>
      <td>{row.by}</td>

      <td>{row.description}</td>
      <td>
        <Badge
          variant="gradient"
          gradient={row.status=='complete' ? { from: 'teal', to: 'lime', deg: 105 } : { from: 'red', to: 'pink', deg: 105 }}
        >
          {row.status}
        </Badge>
      </td>
      <td>
        <Button className='px-0'>Print PDF</Button>
      </td>
    </tr>
  )
}


function Content() {
  const data = [
    {
      id: 1,
      title: '12020019',
      description: 'Invoice for the month of January',
      status: 'complete',
      by: '10000 Articles',
    },
    {
      id: 2,
      title: '12020020',
      description: 'Invoice for the month of February',
      status: 'pending',
      by: '10000 Articles',
    }
  ]

  return (
    <div className="py-10">
      <Container className="grid grid-cols-2 gap-10">
        <div className="col-span-4 xl:col-span-3">
          <MyProfileHeader />

          <ProfileNavigation />
          <div className="px-2 sm:px-6 py-6">
            <div>
              <Paper
                radius="md"
                p="xl"
                withBorder
                sx={{
                  background: 'white',
                  '@media (max-width: 755px)': {
                    width: '100%',
                    margin: '0 auto',
                  },
                  marginRight: '40px',
                  marginLeft: '40px',
                  zIndex: 2,
                }}
              >
                <ScrollArea>
                  <Table verticalSpacing="xs">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Issuer</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>{data && data.map(row => <Row {...row} />)}</tbody>
                  </Table>
                </ScrollArea>
              </Paper>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default function Gallery() {
  return (
    <Protected>
      <Content />
    </Protected>
  )
}


interface DataFormat {
  id: number
  name: string
  description: string
  status: string
  by: string
}

interface TableReviewsProps {
  data: DataFormat[]
}