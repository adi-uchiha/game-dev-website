import Image from 'next/image'
import React, { useState } from 'react'
import games from '../../constants/games'

interface Props {
    game : any
}

const Backdrop = ({game}: Props) =>  {
  console.log(game.backdropGame.background_image)


    
    return (
        <div>
            <Image src={game.backdropGame.background_image} alt="" 
            layout='fill'/>
        </div>
    )
}

export default Backdrop