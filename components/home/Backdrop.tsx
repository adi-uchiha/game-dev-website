import React, { useEffect, useState } from 'react'
import requests from '../../constants/request'
import { IGame } from '../../constants/typings'

interface Props {
    backdropGame : IGame
}

const Backdrop = ({backdropGame} : Props) =>  {
  
    return (
        <div>
            <img src={backdropGame.background_image} alt="" />
        </div>
    )
}

export default Backdrop