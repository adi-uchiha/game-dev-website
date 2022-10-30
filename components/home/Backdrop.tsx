import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import requests from '../../constants/request'
import { IGame } from '../../constants/typings'

interface Props {
    arrBackdropGameImage : string
}

const Backdrop = ({arrBackdropGameImage} : Props) =>  {
  
    const randomUrl = arrBackdropGameImage[Math.floor(Math.random()*arrBackdropGameImage.length)]
    return (
        <div>
            <Image src={randomUrl} alt="" layout='fill'/>
        </div>
    )
}

export default Backdrop