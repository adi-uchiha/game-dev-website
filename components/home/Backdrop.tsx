import Image from 'next/image'
import React from 'react'
import { ImageUrls } from '../../constants/imageUrls'

interface props {
    random: number
}

const Backdrop = ({ random }: props) => {

    const randomUrl = ImageUrls[random]

    const backdropImage = 
    <div className='bg-transparent w-[98.7vw] -z-20' >
    <div className='backdropImage w-full h-[100vh] pl-[8%] pt-[8vh]'
    >
        <Image
            className='-z-10'
            src={randomUrl} alt=""
            priority
            width='1900px'
            height='1000px'
            layout="responsive" 
            objectFit="cover"
            />
            </div>
    </div>

    return (
        <div className=''>
            {randomUrl ?
                 backdropImage  :
                <h1>Loading</h1>
            }
        </div>

    )
}

export default Backdrop