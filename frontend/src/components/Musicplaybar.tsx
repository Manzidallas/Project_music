import { NextIcon, PauseIcon, PlayIcon, PreviousIcon, Queue01Icon, ShuffleIcon, VolumeHighIcon } from 'hugeicons-react'
import React, { useState } from 'react'

const play = true
// const [isplaying, setIsplaying] = useState(false)

const isplaying = false

// setIsplaying(!isplaying)

const Musicplaybar = () => {
  return (
    <div className='bg-black py-4 flex items-center justify-between'>
      <div className='flex gap-2 items-center'>
        <img 
          src="https://i.scdn.co/image/ab67616d0000b2731ea0c62b2339cbf493a999ad" 
          alt="Picture of the music being played" 
          className='w-15 h-15 rounded-xl'
          />
        <div>
          <h1 className='text-xl font-semibold'>Not Like Us</h1>
          <p className='text-sm font-lighter'>Kendrick Lamar</p>
        </div>
      </div>

      <div className='flex gap-3 items-center'>
        <div className='flex gap-3 items-center'>
          <PreviousIcon/>
          {/* <button onClick={()=>setIsplaying(!isplaying)}> */}
            {isplaying ? (
              <PlayIcon 
                className=''
                size={42}
              />  
            ) :
            (
              <PauseIcon 
                className=''
                size={42}
              />  
              
            )

            }
          {/* </button> */}
          <NextIcon/>
        </div>

        <div className='flex gap-2'>
          <div>
            <input type="range" />
          </div>
          <p>03:12</p>
        </div>
      </div>

      <div className='flex items-center gap-3'>
        <ShuffleIcon/>
        <Queue01Icon/>
        <VolumeHighIcon/>
      </div>
    </div>
  )
}

export default Musicplaybar
