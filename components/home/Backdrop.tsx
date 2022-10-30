import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import requests from '../../constants/request'
import { IGame } from '../../constants/typings'

interface Props {
    arrBackdropGameImage : any
}

const Backdrop = ({arrBackdropGameImage} : Props) =>  {
    console.log(arrBackdropGameImage)  
    const randomUrl = arrBackdropGameImage[Math.floor(Math.random()*arrBackdropGameImage.length)]

    return (
        <div>
            {arrBackdropGameImage[0].error ? 
            <h1>ERROR IN BACKDROP</h1> :
            <Image src={randomUrl} alt="" layout='fill'/>
        }
        </div>

        // <Image src={randomUrl} alt="" layout='fill'/>
    )
}

export default Backdrop