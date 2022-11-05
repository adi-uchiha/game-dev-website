import React from 'react'
import gameIds from '../../constants/gameIds'
import Backdrop from './Backdrop'
import FrontFace from './FrontFace'

const HomeWrap = () => {
  const randomId = Math.floor(Math.random()*gameIds.length)
  return (
    <div>
        <Backdrop randomId={randomId}/>
        <FrontFace randomId={randomId}/>
    </div>
  )
}

export default HomeWrap