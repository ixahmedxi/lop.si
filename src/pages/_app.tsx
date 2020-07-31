/* @jsx jsx */
import { Footer } from '@shared/Footer'
import { GlobalStyles } from '@shared/GlobalStyles'
import { NavBar } from '@shared/NavBar'
import { init } from '@utils/firebase'
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
