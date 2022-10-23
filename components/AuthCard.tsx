import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import CurtainButton from './CurtainButton'
import GradientButton from './GradientButton'

interface Props {
  type: 'register' | 'login'
}



const AuthCard = ({type}: Props) => {
  const [eyeSlash, setEyeSlash] = useState(true)
  const router = useRouter();

  const handleRedirect = () => {
    if (type === 'register'){
      router.push('/auth/login')
    } else {
      router.push('/auth/register')
    }
  }

  const eyeClickHandler = () =>{
    setEyeSlash(!eyeSlash)
  }
  
  return (
    <div className='flex flex-row'>
      <div className='lg:space-y-12 md:space-y-16 flex flex-col ml-[4rem] lg:mt-[4rem] md:mt-[6rem] w-full' >
        <div className='flex flex-col lg:space-y-2 md:space-y-6 '>
          <input
            className='bg-transparent outline-none outline text-white focus:border-b-[1px]'
            type="email"
            name='email'
            placeholder='Email' />
        </div>

        <div className='flex flex-col lg:space-y-2 md:space-y-6'>
          <div className='flex flex-row'>
          <input
            className='bg-transparent outline-none outline text-white focus:border-b-[1px]'
            type={eyeSlash ? 'password' : 'text'}
            name='password'
            placeholder='Passsword' />
            {eyeSlash ? 
            <i onClick={eyeClickHandler} className="w-5 text-gray-500 text-sm cursor-pointer relative top-1 fa-regular fa-eye-slash"></i> :
            <i onClick={eyeClickHandler} className="w-5 text-gray-500 text-sm cursor-pointer relative top-1 fa-regular fa-eye"></i>}
            
            </div>
            {type==='register' ? null : <span className='relative bottom-6 lg:bottom-1 text-gray-500 cursor-pointer text-xs'>forgot password?</span>}
          
        </div>
      </div>
      <div className='flex flex-col m-[15%] mt-[20%] text-center space-y-2'>

      <GradientButton text={type==='register' ? 'Register' : 'Login'}/>
      <span 
      onClick={handleRedirect}
      className='text-gray-500 text-sm underline cursor-pointer'>{type==='register'? 'Login?' : 'Register?'}</span>
      </div>
    </div>
  )
}

export default AuthCard