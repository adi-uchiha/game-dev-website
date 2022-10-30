import axios from 'axios';
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Backdrop from '../components/home/Backdrop';
import games from '../constants/games';
import requests from '../constants/request';


const Home: NextPage = (backdropGame) => {

// console.log(backdropGame)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Header />
      <Head>
        <title>Game Dev PVG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Backdrop backdropGame={backdropGame.backdropGame}/>
      

     <Footer />
    </div>
  )
}

export default Home

export const getStaticProps = async () => { 
  var fetchUrls: string[] = []
  games.map((gameId)=> 
  fetchUrls.push('https://api.rawg.io/api/games/' + gameId + '?key=c583d6c4e2034b78b6a269b83bfee968')
  )
  // console.log(fetchUrls)
  // var gameUrl = 'https://api.rawg.io/api/games/' + 865 + '?key=c583d6c4e2034b78b6a269b83bfee968'
  
  const backdropGames = await Promise.all(
    fetchUrls.map(async url => {
      const res = await fetch(url);
      return res.json()
    })
  )

  var randomBackdrop = backdropGames[Math.floor(Math.random()*backdropGames.length)]



  return {
    props: {
      backdropGame: randomBackdrop,

    },
  }
}