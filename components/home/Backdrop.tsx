import Image from 'next/image'
import React from 'react'
import { ImageUrls } from '../../constants/imageUrls'

interface props {
    random: number
}

const Backdrop = ({ random }: props) => {

    const randomUrl = ImageUrls[random]

    const backdropImage = 
    <div className='backdropImage top-[6rem] left-24 
    lg:w-[98.7vw] md:w-[100vw] w-[100vw] -z-20' >
    <div className='w-full h-[100vh] pl-[8%] pt-[10vh] relative 
    lg:top-[4.5vw] md:top-[8vw] top-[12vw] lg:left-[10vw] md:left-[8vw]' >
        <Image
            className='-z-10'
            src={randomUrl} alt=""
            priority
            layout="fill" 
            objectFit="cover"
            />
            </div>
    </div>

    return (
        <div className='' >
            {randomUrl ?
                 backdropImage  :
                <h1>Loading</h1>
            }
        </div>

    )
}

export default Backdrop