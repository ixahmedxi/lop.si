/* eslint-disable unicorn/filename-case */
import PrivacyPolicy from '@pages/privacy-policy'
import { render } from 'test-utils'

describe('Privacy policy page', () => {
  it('matches snapshot', () => {
    const { container } = render(<PrivacyPolicy />)
    expect(container).toMatchSnapshot()
  })
})
/* eslint-enable unicorn/filename-case */
