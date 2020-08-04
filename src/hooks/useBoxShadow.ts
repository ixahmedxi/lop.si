import { ThemeType } from '@theme'
import { darken, lighten } from '@theme-ui/color'
import { useEffect, useState } from 'react'
import { SxStyleProp, useColorMode } from 'theme-ui'

export const useNeuBoxShadow = (offset: number, spread: number): SxStyleProp => {
  const [mode] = useColorMode()
  const [transition, setTransition] = useState('none')

  const darkAmount = mode === 'dark' ? 0.05 : 0.15
  const lightAmount = mode === 'dark' ? 0.025 : 0.4

  const darkColour = (theme: ThemeType): string =>
    darken(theme.colors.background, darkAmount)() as string
  const lightColour = (theme: ThemeType): string =>
    lighten(theme.colors.background, lightAmount)() as string

  // disable transition effect from occuring on page load
  useEffect(() => {
    if (mode !== 'default') {
      setTransition('box-shadow 0.2s ease-out, background-color 0.2s ease-out')
    }
  }, [setTransition, mode])

  return {
    transition,
    boxShadow: (theme) =>
      mode !== 'default'
        ? `-${String(offset) + 'px'} -${String(offset) + 'px'} ${
            String(spread) + 'px'
          } ${lightColour(theme)}, ${String(offset) + 'px'} ${String(offset) + 'px'} ${
            String(spread) + 'px'
          } ${darkColour(theme)}`
        : 'none'
  }
}
