import { ThemeType } from '@theme'
import { darken, lighten } from '@theme-ui/color'
import { SxStyleProp, useColorMode } from 'theme-ui'

export const useNeuBoxShadow = (offset: number, spread: number): SxStyleProp => {
  const [mode] = useColorMode()

  const darkAmount = mode === 'dark' ? 0.05 : 0.15
  const lightAmount = mode === 'dark' ? 0.02 : 0.4

  const darkColour = (theme: ThemeType): string =>
    darken(theme.colors.background, darkAmount)() as string
  const lightColour = (theme: ThemeType): string =>
    lighten(theme.colors.background, lightAmount)() as string

  return {
    boxShadow: (theme) =>
      `-${String(offset) + 'px'} -${String(offset) + 'px'} ${String(spread) + 'px'} ${lightColour(
        theme
      )}, ${String(offset) + 'px'} ${String(offset) + 'px'} ${String(spread) + 'px'} ${darkColour(
        theme
      )}`
  }
}
