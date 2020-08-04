/* eslint-disable unicorn/filename-case */
import TermsAndConditions from '@pages/terms-and-conditions'
import { render } from 'test-utils'

describe('Terms and conditions page', () => {
  it('matches snapshot', () => {
    const { container } = render(<TermsAndConditions />)
    expect(container).toMatchSnapshot()
  })
})
/* eslint-enable unicorn/filename-case */
