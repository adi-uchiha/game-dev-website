import React from 'react'
import gameIds from '../../constants/gameIds'
import { ImageUrls } from '../../constants/imageUrls'
import Backdrop from './Backdrop'
import FrontFace from './FrontFace'

const HomeWrap = () => {
  const random = Math.floor(Math.random()*gameIds.length)
  return (
    <div>
        <Backdrop random={random}/>
        <FrontFace random={random}/>
    </div>
  )
}

export default HomeWrap