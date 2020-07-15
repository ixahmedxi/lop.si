/* @jsx jsx */

import { modes, ThemeType } from '@theme'
import { darken, lighten } from '@theme-ui/color'
import { FiGithub, FiMoon, FiSun } from 'react-icons/fi'
import { jsx, SxStyleProp, useColorMode } from 'theme-ui'

const Wrapper: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  py: 5
}

const NavItems: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  listStyle: 'none',
  m: 0,
  p: 0
}

const Logo: SxStyleProp = {
  fontFamily: 'heading',
  fontSize: 3
}

const listItemBaseStyles: SxStyleProp = {
  width: 50,
  height: 50,
  borderRadius: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ml: 4,
  cursor: 'pointer',
  transition: 'none'
}

const Button: SxStyleProp = {
  border: 'none',
  color: 'text',
  bg: 'transparent',
  cursor: 'pointer',
  fontSize: 1,
  outline: 'none',
  p: 3
}

export const NavBar: React.FC = () => {
  const [mode, setMode] = useColorMode()

  const toggleMode = (): void => {
    const index = modes.indexOf(mode)
    const next = modes[(index + 1) % modes.length]
    setMode(next)
  }

  const genListItemStyles = (): SxStyleProp => {
    const darkAmount = mode === 'dark' ? 0.05 : 0.15
    const lightAmount = mode === 'dark' ? 0.02 : 0.4

    const darkColour = (theme: ThemeType): string =>
      darken(theme.colors.background, darkAmount)() as string
    const lightColour = (theme: ThemeType): string =>
      lighten(theme.colors.background, lightAmount)() as string

    return {
      ...listItemBaseStyles,
      background: (theme) => `linear-gradient(145deg, ${lightColour(theme)}, ${darkColour(theme)})`,
      boxShadow: (theme) =>
        `-7px -7px 13px ${lightColour(theme)}, 7px 7px 13px ${darkColour(theme)}`
    }
  }

  return (
    <nav sx={Wrapper}>
      <h1 sx={Logo}>lop.si</h1>
      <ul sx={NavItems}>
        <li sx={genListItemStyles()}>
          <button sx={Button} onClick={() => toggleMode()}>
            {mode === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </li>
        <li sx={genListItemStyles()}>
          <a
            href="https://github.com/ixahmedxi/lop.si"
            target="_blank"
            rel="noopener noreferrer"
            sx={Button}
          >
            <FiGithub />
          </a>
        </li>
      </ul>
    </nav>
  )
}
