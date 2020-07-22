import { Theme } from 'theme-ui'

const makeTheme = <T extends Theme>(t: T): T => t

const darkGray = '#2B2D32'
const lightGray = '#EEEEEE'

const primary = '#8093f2'

export const theme = makeTheme({
  useColorSchemeMediaQuery: true,
  colors: {
    primary,
    text: lightGray,
    background: darkGray,
    modes: {
      dark: {
        primary,
        text: lightGray,
        background: darkGray
      },
      light: {
        primary,
        text: darkGray,
        background: lightGray
      }
    }
  },
  fonts: {
    body: 'Inter, Arial, "Helvetica Neue", sans-serif',
    heading: 'Pacifico, Arial, "Helvetica Neue", sans-serif'
  },
  fontWeights: {
    body: 400,
    heading: 700
  },
  styles: {
    root: {
      fontFamily: 'body',
      color: 'text',
      bg: 'background'
    },
    spinner: {
      color: 'white'
    }
  },
  fontSizes: [12, 16, 24, 32, 40, 48, 56, 64],
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
  sizes: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
  lineHeights: [1.5, 1.8, 2, 2.5, 3],
  breakpoints: ['576px', '768px', '992px', '1200px']
})

export const modes = Object.keys(theme.colors.modes)

export type ThemeType = typeof theme
