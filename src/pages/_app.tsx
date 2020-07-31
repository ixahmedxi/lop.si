/* @jsx jsx */
import { Footer } from '@shared/Footer'
import { GlobalStyles } from '@shared/GlobalStyles'
import { NavBar } from '@shared/NavBar'
import { init } from '@utils/firebase'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { jsx, ThemeProvider } from 'theme-ui'
import { theme } from '../theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    init()
  })
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DefaultSeo
        title="lop.si - A simple neumorphic url shortener"
        description="lop.si is a url shortener to transform long and unmanageable urls into short and pretty alternatives"
        openGraph={{
          url: 'https://lop.si',
          title: 'lop.si - A simple neumorphic url shortener',
          description:
            'lop.si is a url shortener to transform long and unmanageable urls into short and pretty alternatives',
          site_name: 'lop.si',
          images: [
            {
              url: '/assets/image-1.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image'
            }
          ]
        }}
        twitter={{
          cardType: 'summary'
        }}
      />

      <Container
        sx={{
          display: 'grid',
          gridTemplateRows: ['75px 1fr 30px', '75px 1fr 30px', '75px 1fr 30px', '100px 1fr 50px'],
          minHeight: '100vh'
        }}
      >
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App
