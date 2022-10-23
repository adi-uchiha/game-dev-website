import React from 'react'
import Script from 'next/script'
import Tilt from 'react-tilt'
import AuthCard from '../../../components/AuthCard'
import IconBackground from '../../../components/IconBackground'

const Login = () => {
  return (
    <div>
            <Script src="https://kit.fontawesome.com/90915ad547.js" crossOrigin="anonymous"></Script>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
            <Tilt
            className="card lg:h-[40vh] lg:w-[40vw] md:h-[40vh] md:w-[60vw] h-[40vh] w-[90vw] flex Tilt bg-slate-500/10 rounded-xl backdrop-blur"
            options={{ max: 25 }} >
                <div className="Tilt-inner">
                    <AuthCard/>
                </div>
            </Tilt>
            </div>
            <IconBackground />
        </div>
  )
}

export default Login