import { HomeProvider } from '@contexts/Home'
import { render } from 'test-utils'
import { Form } from './Form.component'

describe('Form component', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <HomeProvider>
        <Form />
      </HomeProvider>
    )
    expect(container).toMatchSnapshot()
  })
})
