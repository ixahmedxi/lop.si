import { render } from 'test-utils'
import { Container } from '.'

describe('Container component', () => {
  it('matches snapshot', () => {
    const { container } = render(<Container />)
    expect(container).toMatchSnapshot()
  })
})
