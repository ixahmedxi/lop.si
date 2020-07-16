/* @jsx jsx */

import { Introduction } from '@components/Home/Introduction/Introduction.component'
import { NavBar } from '@shared/NavBar'
import Container from 'react-bootstrap/Container'
import { jsx } from 'theme-ui'

const Index: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Introduction />
    </Container>
  )
}

export default Index
