import { render } from 'test-utils'
import { NavBar, toggleMode } from '.'

describe('NavBar Component', () => {
  it('matches snapshot', () => {
    const { container } = render(<NavBar />)
    expect(container).toMatchSnapshot()
  })

  it('toggles theme', () => {
    const modes = ['dark', 'light']
    const mode = modes[0]
    const nextMode = toggleMode(mode, modes)

    expect(nextMode).toBe(modes[1])
  })
})
