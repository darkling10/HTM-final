import React from 'react'
import {PrimaryButton} from './Buttons';

function SearchInput() {
  return (
    <div className='w-full  flex justify-between   rounded-md bg-white'>
       <div className="py-4 px-10 flex justify-start w-full">
       <i class='bx bx-search text-xl align-middle px-2 '></i> 
        <div className="flex">
            <div className="role">
                
            </div>
        </div>
        <input type="text" className='w-full focus:ring-0 ' />
       </div>
       
        <PrimaryButton> Search </PrimaryButton>
       </div>
  )
}

export default SearchInput