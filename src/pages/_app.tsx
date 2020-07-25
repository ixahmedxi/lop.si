import { GlobalStyles } from '@shared/GlobalStyles'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DefaultSeo
        title="lop.si - A simple url shortener"
        description="lop.si is a url shortener to transform long and unmanageable urls into short and pretty alternatives"
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
