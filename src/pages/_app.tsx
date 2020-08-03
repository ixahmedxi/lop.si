import { Container } from '@shared/Container'
import { Footer } from '@shared/Footer'
import { NavBar } from '@shared/NavBar'
import { init } from '@utils/firebase'
import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [appHeight, setAppHeight] = useState('100vh')

  useEffect(() => {
    init()
    if (typeof window !== 'undefined') {
      setAppHeight(String(window.innerHeight) + 'px')
      window.addEventListener('resize', () => {
        setAppHeight(String(window.innerHeight) + 'px')
      })
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Container
        styles={{
          display: 'grid',
          gridTemplateRows: [
            '65px auto 75px',
            '65px auto 75px',
            '75px auto 75px',
            '100px auto 100px'
          ],
          minHeight: appHeight
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
