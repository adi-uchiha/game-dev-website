import Router, { useRouter } from 'next/router'
import React from 'react'

interface Props {
    text: String,
    link: string
}

const CurtainButton = ({text, link}: Props) => {
   const router = useRouter()
   const handleClick = () => {
    console.log(link)
    router.push(link)
   }
  return (
    <div>
        <a onClick={handleClick} className="w-24 cursor-pointer relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded-lg hover:bg-white group">
<span className="w-48 h-48 rounded rotate-[-40deg] bg-[#0f0] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span className="relative text-center w-full text-black transition-colors duration-300 ease-in-out group-hover:text-black">
    {text}
</span>
</a>
    </div>
  )
}

export default CurtainButton