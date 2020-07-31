import { NextSeo } from 'next-seo'
import { Box, Flex, SxStyleProp, Text } from 'theme-ui'

const Wrapper: SxStyleProp = {
  justifyContent: 'center',
  pt: 12
}

const Emoji: SxStyleProp = { fontSize: [5, 6, 7], textAlign: 'center' }

const Title: SxStyleProp = { color: 'primary', fontSize: [2, 2, 3], textAlign: 'center', pt: 3 }

const Desc: SxStyleProp = { textAlign: 'center', fontSize: [1, 1, 2], paddingTop: 2 }

const NotFound: React.FC = () => {
  return (
    <>
      <NextSeo title="Next Boilerpack - 404 Not Found" />
      <Flex sx={Wrapper}>
        <Box>
          <Text as="h1" sx={Emoji}>
            <span role="img" aria-label="Cry emoji">
              😢
            </span>{' '}
          </Text>
          <Text as="h1" sx={Title}>
            Something isn&#39;t right...
          </Text>
          <Text as="p" sx={Desc}>
            404 Not Found
          </Text>
        </Box>
      </Flex>
    </>
  )
}

export default NotFound
