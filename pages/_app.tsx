import React from 'react'

import type { AppProps } from 'next/app'
import '../src/assets/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
