import { render } from 'test-utils'
import { Introduction } from './Introduction.component'

describe('Introduction Component', () => {
  it('matches snapshot', () => {
    const { container } = render(<Introduction />)
    expect(container).toMatchSnapshot()
  })
})
