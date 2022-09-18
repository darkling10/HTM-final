import React from 'react'

function Popup({children}) {
  return (
    <div  className='top-0 left-0  z-50 flex justify-center items-center fixed w-full min-h-screen bg-[rgba(0,0,0,0.5)]'>
        {children}
    </div>
  )
}

export default Popup;