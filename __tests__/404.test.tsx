import { render } from 'test-utils'
import NotFound from '../src/pages/404'

describe('404 Page', () => {
  it('matches snapshot', () => {
    const { container } = render(<NotFound />)
    expect(container).toMatchSnapshot()
  })
})
