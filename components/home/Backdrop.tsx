import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import games from '../../constants/games'
import { ImageUrls } from '../../constants/imageUrls'
import requests from '../../constants/request'
import { IGame } from '../../constants/typings'



const Backdrop = () =>  {
    
    const randomUrl = ImageUrls[Math.floor(Math.random()*ImageUrls.length)]

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