import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import games from '../../constants/games'
import useSWR from 'swr'
import requests from '../../constants/request'

interface Props {
    game : any
    url : any
}

const fetcher = (url : any) => fetch(url).then(res => res.json())

const Backdrop = () =>  {
    const [data, setData] = useState<any>(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch(requests.fetchBackdropGame)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
  
    return (
        <div>
            {isLoading ? <h1>LOADING</h1> : (data? 
            <img src={data.background_image} alt="" />
            : <h1>NODATA</h1>)}
        </div>
    )
}

export default Backdrop