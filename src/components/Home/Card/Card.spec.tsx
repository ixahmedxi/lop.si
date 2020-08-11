import { HomeProvider } from '@contexts/Home'
import { render } from 'test-utils'
import { Card } from './Card.component'

describe('Card component', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <HomeProvider>
        <Card />
      </HomeProvider>
    )

    expect(container).toMatchSnapshot()
  })
})
