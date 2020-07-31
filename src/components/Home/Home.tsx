import { NextPage } from 'next'
import { Form } from './Form/Form.component'
import { Introduction } from './Introduction/Introduction.component'

const Home: NextPage = () => {
  return (
    <>
      <Introduction />
      <Form />
    </>
  )
}

export default Home
