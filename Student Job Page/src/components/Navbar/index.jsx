import React from 'react'

function Navbar() {
  return (
    <div className='h-20 flex items-center justify-center w-full bg-black shadow-lg'>
        <div className='text-3xl font-bold text-white transition duration-300 
            hover:text-transparent hover:bg-clip-text 
            hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500'>
            Joboard.
        </div>
    </div>
  )
}

export default Navbar