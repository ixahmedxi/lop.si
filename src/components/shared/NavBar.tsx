/* @jsx jsx */

import { useNeuBoxShadow } from '@hooks/useBoxShadow'
import { modes } from '@theme'
import Link from 'next/link'
import { FiGithub, FiMoon, FiSun } from 'react-icons/fi'
import { jsx, SxStyleProp, useColorMode } from 'theme-ui'

const Wrapper: SxStyleProp = {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between'
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
  fontSize: [2, 2, 3],
  color: 'text',
  cursor: 'pointer'
}

const listItemBaseStyles: SxStyleProp = {
  width: [5, 5, 6],
  height: [5, 5, 6],
  borderRadius: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ml: [2, 2, 2, 4],
  cursor: 'pointer',
  overflow: 'hidden'
}

const Button: SxStyleProp = {
  border: 'none',
  color: 'text',
  bg: 'background',
  cursor: 'pointer',
  borderRadius: 100,
  fontSize: [0, 0, 1],
  outline: 'none',
  p: 3
}

export const NavBar: React.FC = () => {
  const listShadow = useNeuBoxShadow(7, 13)
  const [mode, setMode] = useColorMode()

  const toggleMode = (): void => {
    const index = modes.indexOf(mode)
    const next = modes[(Number(index) + 1) % modes.length]
    setMode(next)
  }

  return (
    <nav sx={Wrapper}>
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a sx={Logo}>lop.si</a>
      </Link>
      <ul sx={NavItems}>
        <li sx={{ ...listItemBaseStyles, ...listShadow }}>
          <button sx={Button} onClick={() => toggleMode()} aria-label="toggle the current theme">
            {mode === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </li>
        <li sx={{ ...listItemBaseStyles, ...listShadow }}>
          <a
            href="https://github.com/ixahmedxi/lop.si"
            target="_blank"
            rel="noopener noreferrer"
            sx={Button}
            aria-label="go to github repo"
          >
            <FiGithub />
          </a>
        </li>
      </ul>
    </nav>
  )
}
