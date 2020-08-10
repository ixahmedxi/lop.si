/* @jsx jsx */
import { Container } from '@shared/Container'
import { cfu } from '@utils/cloudFunctionsUrl'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Flex, jsx, Spinner } from 'theme-ui'

const RedirectComponent: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (typeof id === 'string') {
      axios
        .get(cfu('findUrlById', `?id=${id}`))
        .then(({ data }) => {
          window.location.href = data.url
        })
        .catch(() => router.push('/404'))
    }
  })

  return (
    <Container styles={{ display: 'grid', placeItems: 'start center', height: '100%', pt: 12 }}>
      <div>
        <Flex sx={{ justifyContent: 'center', pb: 3 }}>
          <Spinner variant="spinner" />
        </Flex>
        <h1 sx={{ fontSize: [2, 2, 3], color: 'primary' }}>Redirecting to url...</h1>
      </div>
    </Container>
  )
}

export default RedirectComponent
