import React from 'react'

const Header = () => {
  return (
    <div className='w-[100vw] justify-start bg-opacity-40
      h-[8vh] z-20
     bg-gray-600 fixed backdrop-blur-md text-white'>
      <div className='flex '>
        <div className='mr-[10%]'>Logo</div>
        <div className='flex space-x-10 justify-start'>
          <div className='flex-col'>Home</div>
          <div className='flex-col'>Events</div>
          <div className='flex-col'>Blog</div>
          <div className='flex-col'>Contact</div>
        </div>

        <div className='flex justify-end ml-auto'>
          <div>USEr</div>
        </div>
      </div>
    </div>
  )
}

export default Header