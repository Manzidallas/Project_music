import { Search01Icon, UserIcon } from 'hugeicons-react'
// import React from 'react'

const TopBar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex w-[550px] gap-2 items-center bg-gray-300/30 px-3 py-5 rounded-2xl relative'>
        <Search01Icon/>
        <input 
            type="text"
            name="search" 
            id="search" 
            className='absolute px-8 h-full w-full border-none outline-none'
            placeholder='Search by a song title'/>
      </div>
      <div>
        <div className='flex items-center gap-2'>
            <div className='p-4 bg-gray-400/30 rounded-2xl'>
                <UserIcon/>
            </div>
            <div>
                <h1 className='font-bold'>Manzi Dallas</h1>
                <p className='text-[13px] bg-gradient-to-r from-blue-800 to-purple-800 rounded p-[2px]'>Freemium Account</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default TopBar
