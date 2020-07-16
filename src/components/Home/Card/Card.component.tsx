/* @jsx jsx */
import { ThemeType } from '@theme'
import { darken, lighten } from '@theme-ui/color'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { FiClipboard } from 'react-icons/fi'
import { Box, Flex, jsx, Link, SxStyleProp, Text, useColorMode } from 'theme-ui'

export const Card: React.FC = () => {
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
    <Box sx={{ pt: 12 }}>
      <Row>
        <Col
          sm={{ span: 4, offset: 4 }}
          sx={{ bg: 'background', px: 5, py: 5, borderRadius: 20, ...genShadow(15, 25) }}
        >
          <Text as="h2" sx={{ fontWeight: 'heading', fontSize: 1, color: 'primary' }}>
            Your previously created url
          </Text>
          <Text as="p" sx={{ fontSize: 0, pt: 1, lineHeight: 1, opacity: 0.7 }}>
            Here&#39;s your most recently created url if you need to copy it again:
          </Text>
          <Flex
            sx={{
              pt: 3,
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'primary' }}
            >
              https://lop.si/fNuJ
            </Link>
            <button
              type="button"
              sx={{
                width: 5,
                height: 5,
                borderRadius: 50,
                border: 'none',
                bg: 'background',
                color: 'primary',
                ...genShadow(3, 6)
              }}
            >
              <FiClipboard />
            </button>
          </Flex>
        </Col>
      </Row>
    </Box>
  )
}
