import { GlobalStyles } from '@shared/GlobalStyles'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'theme-ui'
import { store } from '../store'
import { theme } from '../theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DefaultSeo
          title="lop.si - A simple url shortener"
          description="lop.si is a url shortener to transform long and unmanageable urls into short and pretty alternatives"
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
