import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Header />
      <Head>
        <title>Game Dev PVG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        
      </main>

     <Footer />
    </div>
  )
}

export default Home
