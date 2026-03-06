import React from 'react'


const NavBar = () => {

  return (
    <div className='max-w-[1640px] w-full mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex items-center justify-between py-4'>
        <h1 className='text-2xl font-bold text-gray-200'>ALBERT NDUKWE</h1>
        <div className='hidden md:flex space-x-4'>
          <a href="#" className='font-bold text-gray-400 hover:text-gray-600'>Home</a>
          <a href="#" className='font-bold text-gray-400 hover:text-gray-600'>About</a>
          <a href="#" className='font-bold text-gray-400 hover:text-gray-600'>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
