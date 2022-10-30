import React, { useEffect, useState } from 'react'
import requests from '../../constants/request'
import { movie } from '../../constants/typings'


const Backdrop = () =>  {
    const [data, setData] = useState<movie | null>(null)
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
            {isLoading ? 
                <h1>LOADING</h1> 
                : (data? 
                    <img src={data.background_image} alt="" />
                    : <h1>NODATA</h1>)}
        </div>
    )
}

export default Backdrop