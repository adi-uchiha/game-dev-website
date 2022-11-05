import Image from 'next/image'
import React from 'react'
import { ImageUrls } from '../../constants/imageUrls'

interface props {
    random: number
}

const Backdrop = ({ random }: props) => {

    const randomUrl = ImageUrls[random]

    const backdropImage = 
    <div className='bg-red-500' >
    <div className='backdropImage w-[100vw] h-[100vh] ml-[8%] mt-[5vh] overflow-visible'
    >
        <Image
            className='overflow-scroll h-[100vh]'
            src={randomUrl} alt=""
            priority
            width='1700px'
            height='1000px'
            layout="responsive" objectFit="cover"
            />
            </div>
    </div>

    return (
        <div>
            {randomUrl ?
                 backdropImage  :
                <h1>Loading</h1>
            }
        </div>

    )
}

export default Backdrop