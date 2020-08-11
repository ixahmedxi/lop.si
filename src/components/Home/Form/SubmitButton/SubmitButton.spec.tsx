import { render } from 'test-utils'
import { SubmitButton } from './SubmitButton.component'

describe('Submit Button', () => {
  it('matches snapshot', () => {
    const { container } = render(<SubmitButton isLoading={false} />)
    expect(container).toMatchSnapshot()
  })

  it('renders spinner when isLoading is true', () => {
    const { queryByTestId, getByTestId } = render(<SubmitButton isLoading={true} />)
    getByTestId('spinner')
    expect(queryByTestId('arrow-right')).toBeNull()
  })

  it('renders arrow when isLoading is false', () => {
    const { queryByTestId, getByTestId } = render(<SubmitButton isLoading={false} />)
    getByTestId('arrow-right')
    expect(queryByTestId('spinner')).toBeNull()
  })
})
