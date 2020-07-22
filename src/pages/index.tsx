/* @jsx jsx */

import { Card } from '@components/Home/Card/Card.component'
import { Form } from '@components/Home/Form/Form.component'
import { Introduction } from '@components/Home/Introduction/Introduction.component'
import { Footer } from '@shared/Footer'
import { NavBar } from '@shared/NavBar'
import Container from 'react-bootstrap/Container'
import { jsx } from 'theme-ui'

const Index: React.FC = () => {
  return (
    <Container sx={{ display: 'grid', gridTemplateRows: '150px 1fr 50px', minHeight: '100vh' }}>
      <NavBar />
      <div>
        <Introduction />
        <Form />
        <Card url="https://lop.si/nHlf" />
      </div>
      <Footer />
    </Container>
  )
}

export default Index
