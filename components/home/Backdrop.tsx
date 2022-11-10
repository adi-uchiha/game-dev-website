import Image from 'next/image'
import React from 'react'
import { ImageUrls } from '../../constants/imageUrls'

interface props {
    random: number
}

const Backdrop = ({ random }: props) => {

    const randomUrl = ImageUrls[random]

    const backdropImage = 
    <div className='backdropImage backdropImage top-[6rem] left-24 w-[100vw] -z-20 
    '>
    <div className='w-full h-[100vh] pl-[8%] pt-[10vh] relative
    top-[8vh] lg:left-[15vw]' >
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
        <div className='overflow-clip' >
            {randomUrl ?
                 backdropImage  :
                <h1>Loading</h1>
            }
        </div>

    )
}

export default Backdrop