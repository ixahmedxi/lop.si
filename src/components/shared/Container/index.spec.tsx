import { render } from 'test-utils'
import { Container } from '.'

describe('Container component', () => {
  it('matches snapshot', () => {
    const { container } = render(<Container>Hello World</Container>)
    expect(container).toMatchSnapshot()
  })
})
