import WavesurferPlayer from '@wavesurfer/react'
import { NextIcon, PauseIcon, PlayIcon, PreviousIcon, Queue01Icon, ShuffleIcon, VolumeHighIcon } from 'hugeicons-react'
import React, { useState } from 'react'

const play = true
// const [isplaying, setIsplaying] = useState(false)

// const [volume, setVolume] = useState(false)
// const [showvolume, setShowVolume] = useState(false)



const isplaying = false

// setIsplaying(!isplaying)

const Musicplaybar = () => {
  return (
    <div className='bg-white/50 px-5 backdrop-blur-lg rounded-2xl py-4 flex items-center justify-between'>
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
        <div className='flex gap-3 items-center mr-10'>
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
                fill='#000'
              />  
              
            )

            }
          {/* </button> */}
          <NextIcon/>
        </div>

        <div className='flex gap-10 items-center'>
          <div className='w-80'>
            {/* <input type="range" /> */}
            <WavesurferPlayer
              height={60}
              url='./music/Asake - Organise.mp3'
              autoplay
              progressColor={'yellow'}
              barGap={4}
              barRadius={10}
              barWidth={3}
              // barRadius={100}
            />
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
