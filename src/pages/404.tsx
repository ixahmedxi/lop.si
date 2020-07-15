import { NextSeo } from 'next-seo'
import { Box, Flex, SxStyleProp, Text } from 'theme-ui'

const Wrapper: SxStyleProp = {
  height: '100vh',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center'
}

const Emoji: SxStyleProp = { fontSize: [5, 6, 7], textAlign: 'center' }

const Title: SxStyleProp = { color: 'primary', fontSize: [2, 3, 4], textAlign: 'center' }

const Desc: SxStyleProp = { textAlign: 'center', fontSize: [0, 1, 2], paddingTop: 2 }

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
            An Error of 404 Occured
          </Text>
        </Box>
      </Flex>
    </>
  )
}

export default NotFound
