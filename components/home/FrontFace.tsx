import React, { useState } from 'react'
import gameIds from '../../constants/gameIds'

interface props{
    randomId: number
}

const FrontFace = ({randomId}: props) => {
  const [data, setData] = useState(null)
    const fetchUrl = 'https://api.rawg.io/api/games/'+ gameIds[randomId] + '?key=39a9df233d1c429b8755dbdad8ffb271'
    fetch(fetchUrl)
    .then(res=>res.json())
    .then(result=>setData(result))
    .catch(err=>console.log(err))
  return (
    <div>
        <p>{data}</p>
    </div>
  )
}

export default FrontFace