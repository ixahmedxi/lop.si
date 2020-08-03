/* @jsx jsx */
import { useFirestore } from '@contexts/Firebase'
import { Container } from '@shared/Container'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Flex, jsx, Spinner } from 'theme-ui'

const RedirectComponent: React.FC = () => {
  const router = useRouter()
  const { findOneById } = useFirestore()
  const { id } = router.query

  useEffect(() => {
    const redirectToUrl = async (): Promise<void> => {
      if (typeof id === 'string' && id.length >= 4) {
        const res = await findOneById(id)
        if (typeof res !== 'undefined') {
          window.location.href = String(res)
        } else {
          await router.push('/404')
        }
      }
    }
    // eslint-disable-next-line no-void
    void redirectToUrl()
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
