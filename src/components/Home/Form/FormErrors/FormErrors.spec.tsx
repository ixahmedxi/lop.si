import { render } from 'test-utils'
import { FormErrors } from './FormErrors.component'

describe('FormErrors component', () => {
  it('matches snapshot', () => {
    const { container } = render(<FormErrors errors="form error" />)
    expect(container).toMatchSnapshot()
  })

  it('renders null when errors are null', () => {
    const { container } = render(<FormErrors errors={null} />)
    expect(container).toBeEmptyDOMElement()
  })

  it('renders the error string when passed', () => {
    const { getByText } = render(<FormErrors errors="form error" />)
    getByText('form error')
  })
})
