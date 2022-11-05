import React from 'react'
import { ImageUrls } from '../../constants/imageUrls'

interface props{
    random : number
}

const Backdrop = ({random} : props) =>  {
    
    const randomUrl = ImageUrls[random]

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