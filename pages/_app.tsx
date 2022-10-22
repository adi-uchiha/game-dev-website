import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../pages/auth/register/style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
