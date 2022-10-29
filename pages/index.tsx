import axios from 'axios';
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Backdrop from '../components/home/Backdrop';
import requests from '../constants/request';


const Home: NextPage = (backdropGame) => {



  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Header />
      <Head>
        <title>Game Dev PVG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Backdrop />
      

     <Footer />
    </div>
  )
}

export default Home

// export const getStaticProps = async () => { 
//   const [
//     backdropGame
//   ] = await Promise.all([
//     fetch(requests.fetchBackdropGame).then((res)=>res.json())
//   ])




//   return {
//     props: {
//       backdropGame: backdropGame
//     },
//     revalidate: 2
//   }
// }