import React from 'react'

const Header = () => {
  return (
    <div className='w-[100%]'>
      <div className='flex '>
        <div className='mr-[10%]'>Logo</div>
        <div className='flex space-x-10 justify-start'>
          <div className='flex-col'>Home</div>
          <div className='flex-col'>Events</div>
          <div className='flex-col'>Blog</div>
          <div className='flex-col'>Contact</div>
        </div>

        <div className='flex justify-end ml-auto'>
        <i className="fa-solid fa-user h-20 w-20"></i>
        <i className="fa-sharp fa-solid fa-heart"></i>
        </div>
      </div>
    </div>
  )
}

export default Header