import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'

import '../src/assets/styles/global.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Archivo-Regular, Helvetica, sans-serif;
  html, body {
    min-height: 100vh;
  }
}
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
