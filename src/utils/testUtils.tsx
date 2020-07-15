import { store } from '@store'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { theme } from '@theme'
import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'theme-ui'

const AllTheProviders: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  )
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'
// override render method
export { customRender as render }
