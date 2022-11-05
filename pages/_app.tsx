import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/authStyle.css'
import '../styles/backdrop.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
