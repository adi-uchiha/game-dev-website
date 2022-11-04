import React from 'react'
import { ImageUrls } from '../../constants/imageUrls'

const Backdrop = () =>  {
    
    const randomUrl = ImageUrls[Math.floor(Math.random()*ImageUrls.length)]

    return (
        <div>
            {randomUrl ? 
            <img loading='lazy' src={randomUrl} alt=""/>:
            <h1>Loading</h1>
            }
        </div>

    )
}

export default Backdrop