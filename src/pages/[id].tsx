import { findUrlById } from '@utils/cloudFunctions'
import { NextPage } from 'next'

const RedirectComponent: NextPage = () => {
  return null
}

RedirectComponent.getInitialProps = async ({ res, query }) => {
  const { id } = query
  if (typeof id === 'string' && typeof res !== 'undefined') {
    try {
      const { url } = (await findUrlById(id)).data
      res.writeHead(301, { Location: url })
      res.end()
    } catch {
      res.writeHead(301, { Location: '/404' })
      res.end()
    }
  }
  return {}
}

export default RedirectComponent
