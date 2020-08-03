import { useNeuBoxShadow } from '@hooks/useBoxShadow'
import { modes } from '@theme'
import Link from 'next/link'
import { FiGithub, FiMoon } from 'react-icons/fi'
import { Button, Flex, Link as TLink, SxStyleProp, Text, useColorMode } from 'theme-ui'

export const toggleMode = (mode: string, themeModes: typeof modes): string => {
  const index = themeModes.indexOf(mode)
  return themeModes[(Number(index) + 1) % themeModes.length]
}

export const NavBar: React.FC = () => {
  const [mode, setMode] = useColorMode()

  const styles: SxStyleProp = {
    wrapper: {
      alignItems: 'center',
      justifyContent: 'space-between',
      pt: [3, 5]
    },
    logo: {
      fontFamily: 'heading',
      fontSize: 2
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: [5, 5, 6],
      height: [5, 5, 6],
      borderRadius: 100,
      ml: [2, 2, 2, 4],
      bg: 'transparent',
      color: 'text',
      outline: 'none',
      cursor: 'pointer',
      p: 0,
      ...useNeuBoxShadow(7, 13)
    }
  }

  return (
    <Flex as="nav" sx={styles.wrapper}>
      <Link href="/">
        <Text as="a" sx={styles.logo}>
          lop.si
        </Text>
      </Link>
      <Flex>
        <Button
          aria-label="toggle theme"
          onClick={() => setMode(toggleMode(mode, modes))}
          sx={styles.button}
        >
          <FiMoon />
        </Button>
        <TLink
          href="https://github.com/ixahmedxi/lop.si"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github repo"
          sx={styles.button}
        >
          <FiGithub />
        </TLink>
      </Flex>
    </Flex>
  )
}
