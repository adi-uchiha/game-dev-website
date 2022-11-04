import axios from 'axios';
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Backdrop from '../components/home/Backdrop';
import games from '../constants/gameIds';
import requests from '../constants/request';
import HomeWrap from "../components/home/HomeWrap";

interface props {
  arrBackdropGameImage: any
}

const Home = () => {


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Header />
      <Head>
        <title>Game Dev PVG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <HomeWrap />
      

     <Footer />
    </div>
  )
}

export default Home


// export const getServerSideProps = async () => { 
//   var fetchUrls: string[] = []
//   var arrBackdropGameImage: string[] = []
//   games.map((gameId)=> 
//   fetchUrls.push('https://api.rawg.io/api/games/' + gameId + '?key=39a9df233d1c429b8755dbdad8ffb271')
//   )

//   const backdropGames:any = await Promise.all(
//     fetchUrls.map(async url => {
//       try{
//         var results = await fetch(url)
//         .then(res=>res.json())
//         // console.log(results)
//         return results
//       }catch(err){
//         console.log(err)
//       }
//     })
//   )

//   if(backdropGames[0].error){
//     arrBackdropGameImage = backdropGames
//   }else{
//     console.log("no error")
//     backdropGames.map((game: IGame) => {
//     arrBackdropGameImage.push(game.background_image)
//     })
//   }

//   return {
//     props: {
//       arrBackdropGameImage: arrBackdropGameImage
//     },
//   }
// }
