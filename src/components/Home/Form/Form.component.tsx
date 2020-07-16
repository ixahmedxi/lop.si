/* @jsx jsx */
import { ThemeType } from '@theme'
import { darken, lighten } from '@theme-ui/color'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { FiArrowRight, FiPaperclip } from 'react-icons/fi'
import { jsx, SxStyleProp, useColorMode } from 'theme-ui'

const baseFormStyles: SxStyleProp = {
  width: '100%',
  borderRadius: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  bg: 'background',
  pl: 6,
  pr: 1
}

const InputWrapper: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  flex: 1
}

const Input: SxStyleProp = {
  flex: 1,
  bg: 'transparent',
  border: 'none',
  fontSize: 1,
  color: 'text',
  pl: 3,
  py: 3,
  outline: 'none',
  '::placeholder': {
    color: 'text',
    opacity: 0.5
  }
}

const Button: SxStyleProp = {
  height: 6,
  width: 6,
  outline: 'none',
  border: 'none',
  fontSize: 1,
  background: 'linear-gradient(145deg, #6e90ff, #5d7ad7)',
  color: 'modes.dark.text',
  borderRadius: 100,
  cursor: 'pointer'
}

export const Form: React.FC = () => {
  const [mode] = useColorMode()

  const genShadow = (offset: number, spread: number): SxStyleProp => {
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

  return (
    <Row>
      <Col sm={{ span: 8, offset: 2 }} sx={{ pt: 5 }}>
        <form sx={{ ...baseFormStyles, ...genShadow(10, 20) }}>
          <div sx={InputWrapper}>
            <FiPaperclip />
            <input sx={Input} type="url" placeholder="Paste your url here..." />
          </div>
          <button sx={{ ...Button, ...genShadow(5, 10) }} type="submit">
            <FiArrowRight />
          </button>
        </form>
      </Col>
    </Row>
  )
}
