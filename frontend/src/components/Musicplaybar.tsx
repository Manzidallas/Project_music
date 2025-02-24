import WavesurferPlayer from '@wavesurfer/react'
import { NextIcon, PauseIcon, PlayIcon, PreviousIcon, Queue01Icon, ShuffleIcon, VolumeHighIcon } from 'hugeicons-react'
import  { useState } from 'react'

const Musicplaybar = () => {
  
  const [volume, setVolume] = useState(false)
  const [showvolume, setShowVolume] = useState(false)
  const [isplaying, setIsplaying] = useState(false)
  const [time, setTime] = useState('')
  const [wavesurfer, setWavesurfer] = useState(null)

  const onReady = (ws) => {
    setWavesurfer(ws)
    setIsplaying(false)
  }

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause()
    setTime(wavesurfer.getCurrentTime())
  }

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
          <button onClick={()=>onPlayPause()}>
            {
              !isplaying ? (
                <PlayIcon 
                  className=''
                  size={42}
                  fill='#000'
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
          </button> 
          <NextIcon/>
        </div>

        <div className='flex gap-10 items-center'>
          <div className='w-80'>
            <WavesurferPlayer
              height={60}
              url='./music/Kendrick Lamar - Not Like Us.mp3'
              onReady={onReady}
              progressColor={'yellow'}
              barGap={4}
              barRadius={10}
              barWidth={3}
              cursorColor='#000'
              cursorWidth={0}
              onPlay={()=>{setIsplaying(true)}}
              onPause={()=>{setIsplaying(false)}}
            />
          </div>
          <div className='flex'>
            <p>{Math.floor(time / 60)}</p>:
            <p>{('0' + Math.floor(time % 60)).slice(-2)}</p>
          </div>
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
