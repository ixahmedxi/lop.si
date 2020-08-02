/* @jsx jsx */
import { Footer } from '@shared/Footer'
import { GlobalStyles } from '@shared/GlobalStyles'
import { NavBar } from '@shared/NavBar'
import { init } from '@utils/firebase'
import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { jsx, ThemeProvider } from 'theme-ui'
import { theme } from '../theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [appHeight, setAppheight] = useState('100vh')
  useEffect(() => {
    init()

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => setAppheight(String(window.innerHeight) + 'px'))
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container
        sx={{
          display: 'grid',
          gridTemplateRows: [
            '60px auto 75px',
            '60px auto 75px',
            '60px auto 75px',
            '100px auto 100px'
          ],
          height: appHeight
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
