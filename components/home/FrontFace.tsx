import React, { useEffect, useState } from 'react'
import gameIds from '../../constants/gameIds'
import { IGame } from '../../constants/typings'

interface props{
    random: number
}

const FrontFace = ({random}: props) => {
  const [data, setData] = useState<IGame | null >(null)
    // useEffect(() => {
    //   const fetchUrl = 'https://api.rawg.io/api/games/'+ gameIds[random] + '?key=24830fa09591422cb72de71bda55fe29'
    // fetch(fetchUrl, {mode: 'cors'})
    // .then(res=>res.json())
    // .then(result=>setData(result))
    // .catch(err=>console.log(err))
    
    //   return () => {
        
    //   }
    // }, [random])
    
  
  return (
    <div>
        {data ?
        <p>{data.slug}</p>:
        <p>LOADING</p>
      }

    </div>
  )
}

export default FrontFace