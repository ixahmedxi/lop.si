import { render } from 'test-utils'
import Home from './Home'

describe('Home Component', () => {
  it('renders introduction component', () => {
    const { getByTestId } = render(<Home />)
    getByTestId('introduction')
  })

  it('renders form component', () => {
    const { getByTestId } = render(<Home />)
    getByTestId('form')
  })

  it('renders card component', () => {
    const { getByTestId } = render(<Home />)
    getByTestId('card')
  })
})
