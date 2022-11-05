import React from 'react'
import gameIds from '../../constants/gameIds'
import { ImageUrls } from '../../constants/imageUrls'
import Backdrop from './Backdrop'
import FrontFace from './FrontFace'

const HomeWrap = () => {
  const random = Math.floor(Math.random()*gameIds.length)
  console.log("random:"+ random)
  console.log('gameId'+ gameIds[random])
  console.log('gameURL'+ ImageUrls[random])
  return (
    <div>
        <Backdrop random={15}/>
        <FrontFace random={15}/>
    </div>
  )
}

export default HomeWrap