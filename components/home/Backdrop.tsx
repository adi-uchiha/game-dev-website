import React from 'react'
import { ImageUrls } from '../../constants/imageUrls'

interface props{
    randomId : number
}

const Backdrop = ({randomId} : props) =>  {
    
    const randomUrl = ImageUrls[randomId]

    return (
        <div>
            {randomUrl ? 
            <img src={randomUrl} alt=""/>:
            <h1>Loading</h1>
            }
        </div>

    )
}

export default Backdrop