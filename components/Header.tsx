import React from 'react'

const Header = () => {
  return (
    <div className='w-[100%]'>
      <header className='flex'>
        <nav>
          <ul className='flex space-x-12 justify-start'>
            <div className='flex-col'>Home</div>
            <div className='flex-col'>Events</div>
            <div className='flex-col'>Blog</div>
            <div className='flex-col'>Contact</div>
            <div className='justify-end'>User</div>
          </ul>
          
        </nav>
      </header>
    </div>
  )
}

export default Header