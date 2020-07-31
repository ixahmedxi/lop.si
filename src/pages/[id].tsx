/* @jsx jsx */
import { findOneById } from '@utils/firebase'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { FiFrown } from 'react-icons/fi'
import { Flex, jsx, Spinner } from 'theme-ui'

const RedirectComponent: React.FC = () => {
  const [status, setStatus] = useState('redirecting')
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    const redirectToUrl = async (): Promise<void> => {
      if (typeof id === 'string' && id.length >= 4) {
        const records = await findOneById(id)
        if (typeof records !== 'undefined') {
          records.forEach((record: { data: () => { url: string } }) => {
            const { url } = record.data()
            window.location.href = url
          })
        } else {
          setStatus('error')
        }
      }
    }
    // eslint-disable-next-line no-void
    void redirectToUrl()
  })

  return (
    <Container sx={{ display: 'grid', placeItems: 'start center', height: '100%', pt: 12 }}>
      <div>
        <Flex sx={{ justifyContent: 'center', pb: 3 }}>
          {status === 'redirecting' && <Spinner variant="spinner" />}
          {status === 'error' && <FiFrown size="56px" color="#e84a5f" />}
        </Flex>
        <h1 sx={{ fontSize: 3, color: status === 'error' ? '#e84a5f' : 'primary' }}>
          {status === 'error'
            ? 'An Error occured, make sure the url is correct'
            : 'Redirecting to url...'}
        </h1>
      </div>
    </Container>
  )
}

export default RedirectComponent
