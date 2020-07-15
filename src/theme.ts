import { darken, lighten } from 'polished'
import { Theme } from 'theme-ui'

const makeTheme = <T extends Theme>(t: T): T => t

export const theme = makeTheme({
  useColorSchemeMediaQuery: true,
  colors: {
    primary: '#657eea',
    secondary: '#37b3ac',
    text: '#111',
    background: '#fff',
    muted: darken(0.1, '#fff'),
    modes: {
      dark: {
        primary: '#657eea',
        secondary: '#37b3ac',
        text: '#fff',
        background: '#111',
        muted: lighten(0.1, '#111')
      },
      light: {
        primary: '#657eea',
        secondary: '#37b3ac',
        text: '#111',
        background: '#fff',
        muted: darken(0.1, '#fff')
      }
    }
  },
  fonts: {
    body: 'Inter, Arial, "Helvetica Neue", sans-serif'
  },
  fontWeights: {
    body: 400,
    heading: 700
  },
  styles: {
    root: {
      fontFamily: 'body',
      color: 'text',
      bg: 'background',
      transition: 'background-color 0.2s ease-out'
    }
  },
  fontSizes: [12, 16, 24, 32, 40, 48, 56, 64],
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
  sizes: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
  lineHeights: [1.5, 1.8, 2, 2.5, 3],
  breakpoints: ['576px', '768px', '992px', '1200px']
})

export type ThemeType = typeof theme
