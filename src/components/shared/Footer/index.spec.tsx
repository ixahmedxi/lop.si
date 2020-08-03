import { render } from 'test-utils'
import { Footer } from '.'

describe('Container component', () => {
  it('matches snapshot', () => {
    const { container } = render(<Footer />)
    expect(container).toMatchSnapshot()
  })
})
