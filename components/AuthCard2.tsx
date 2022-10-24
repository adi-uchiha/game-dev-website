import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import GradientButton from './GradientButton'

interface Props {
    type: 'register' | 'login'
}



const AuthCard2 = ({ type }: Props) => {
    const [eyeSlash, setEyeSlash] = useState(true)
    const [showEye, setShowEye] = useState(false)
    const [mouseOnEye, setMouseOnEye] = useState(false)
    const ref = useRef<any>();
    const router = useRouter();

    const handleRedirect = () => {
        if (type === 'register') {
            router.push('/auth/login')
        } else {
            router.push('/auth/register')
        }
    }

    const eyeClickHandler = () => {
        console.log("wtf")
        ref.current.focus()
        setEyeSlash(!eyeSlash)
    }

    const pwNotFocusHandler = () => {
        if(mouseOnEye){return} else{setShowEye(false)}
    }

    return (
        <div className='absolute flex md:flex-row flex-col max-w-[100%] overflow-clip p-[1rem]'>
            <div className='space-y-6 mt-8' >
                <input
                    autoComplete='off'
                    className='w-[90%] md:w-[60%] bg-transparent outline-none outline text-white focus:border-b-[1px]'
                    type="email"
                    name='email'
                    placeholder='Email' />
                <input
                    onFocus={()=>setShowEye(true)}
                    onBlur={pwNotFocusHandler}
                    ref={ref}
                    className='w-[80%] md:w-[60%] bg-transparent outline-none outline text-white focus:border-b-[1px]'
                    type={eyeSlash ? 'password' : 'text'}
                    name='password'
                    placeholder='Passsword' />
                {showEye && (eyeSlash ?
                    <i onClick={eyeClickHandler} onMouseOver={()=>setMouseOnEye(true)} onMouseLeave={()=>setMouseOnEye(false)} 
                    className="w-5 text-gray-500 text-sm cursor-pointer relative top-1 fa-regular fa-eye-slash"></i> :
                    <i onClick={eyeClickHandler} onMouseOver={()=>setMouseOnEye(true)} onMouseLeave={()=>setMouseOnEye(false)} 
                    className="w-5 text-gray-500 text-sm cursor-pointer relative top-1 fa-regular fa-eye"></i>)}
                
                {type === 'register' ? null : <span className='relative bottom-6 lg:bottom-1 text-gray-500 cursor-pointer text-xs'>forgot password?</span>}
            </div>

            <div className='flex-row flex md:inline mt-10'>
            <GradientButton text={type === 'register' ? 'Register' : 'Login'} />
            <span
                onClick={handleRedirect}
                className='text-gray-500 text-sm underline cursor-pointer text-center self-center pl-[8%]'>{type === 'register' ? 'Login?' : 'Register?'}</span>
            </div>
        </div>
    )
}

export default AuthCard2