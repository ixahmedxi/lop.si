/* @jsx jsx */
import { Box, jsx, SxStyleProp, Text } from 'theme-ui'

const Wrapper: SxStyleProp = {
  margin: '0 auto',
  width: ['100%', '100%', '100%', '70%'],
  textAlign: 'center'
}

const Title: SxStyleProp = {
  color: 'primary',
  fontSize: ['20px', '20px', 3],
  fontWeight: 'heading',
  pb: [1, 1, 2]
}

const Description: SxStyleProp = {
  lineHeight: 1,
  fontSize: [0, 0, 1]
}

export const Introduction: React.FC = () => {
  return (
    <Box sx={Wrapper} data-testid="introduction">
      <Text as="h1" sx={Title}>
        Create professional looking urls
      </Text>
      <Text as="p" sx={Description}>
        lop.si helps you transform long and unmanageable urls into short alternatives that look more
        professional wherever used.
      </Text>
    </Box>
  )
}
