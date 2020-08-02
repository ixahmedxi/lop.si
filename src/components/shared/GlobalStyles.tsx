import { css, Global } from '@emotion/core'
import { normalize } from 'polished'

export const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={css`
        ${normalize()}

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          min-height: 100vh;
          min-height: -webkit-fill-available;
        }

        html {
          height: -webkit-fill-available;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
          padding: 0;
          font-size: 1rem;
          font-weight: 400;
        }
      `}
    />
  )
}
