/* @jsx jsx */
import { Form } from '@components/Home/Form/Form.component'
import { Introduction } from '@components/Home/Introduction/Introduction.component'
import { jsx } from 'theme-ui'

const Index: React.FC = () => {
  return (
    <div sx={{ pt: 6 }}>
      <Introduction />
      <Form />
    </div>
  )
}

export default Index
