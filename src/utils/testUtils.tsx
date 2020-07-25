import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { theme } from '@theme'
import React from 'react'
import { ThemeProvider } from 'theme-ui'

const AllTheProviders: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'
// override render method
export { customRender as render }
