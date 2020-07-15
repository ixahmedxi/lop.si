import { render } from 'test-utils'
import Index from '../src/pages'

describe('Home Page', () => {
  it('matches snapshot', () => {
    const { container } = render(<Index />)
    expect(container).toMatchSnapshot()
  })
})
