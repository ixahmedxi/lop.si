import { NextPage } from 'next'
import { Card } from './Card/Card.component'
import { Form } from './Form/Form.component'
import { HomeProvider } from './Home.context'
import { Introduction } from './Introduction/Introduction.component'

const Home: NextPage = () => {
  return (
    <HomeProvider>
      <Introduction />
      <Form />
      <Card />
    </HomeProvider>
  )
}

export default Home
