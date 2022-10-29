import axios from 'axios';
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'


const Home: NextPage = (result) => {

// console.log(result)
console.log("wtf")

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Header />
      <Head>
        <title>Game Dev PVG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <img src="https://images.igdb.com/igdb/image/upload/t_1080p/ar6gh.jpg" alt="" />
      </main>

     <Footer />
    </div>
  )
}

export default Home

export async function getServerSideProps() {

  var data = ''
  
  const res = await axios({
    url: "https://api.igdb.com/v4/games",
    method: 'POST',
    headers: {
        // 'Accept': 'application/json',
        // 'Client-ID': 'k7sugbi2a293oh0k9n2qcnn87zh50o',
        // 'Authorization': 'Bearer o4yohw615qr1vg2v39jfy50gxnseys',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Credentials':'*',
        // "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        // "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length"
    },
    data: "fields *;"
  })
    .then(response => {
        console.log(response.data);
        data = response.data
        console.log()
    })
    .catch(err => {
        console.error(err);
        console.log("wtf")
    });

console.log("wtf")


  return {
    props: {
      result: data
    }
  }
}