import { Upload01Icon } from 'hugeicons-react'
import React, { useState } from 'react'


const Createsong = () => {

const [isDragging, setIsDragging] = useState(false);
const [isvisible, Setisivisible] = useState(false)
  return (
    <div className='w-full bg-black/70 backdrop-blur-sm flex justify-center z-200 min-h-screen absolute'>

        <div className='w-[500px] bg-black m-auto p-6 rounded-2xl border-1 border-gray-100/30'>
            <h1 className='text-3xl my-2 font-bold'>New Song</h1>
            <form action="" className='space-y-4'>
                <div>
                    <p className='mb-2'>Song title:</p> 
                    <input type="text" placeholder='Song title'  className='w-full p-5 bg-gray-600/50 rounded-xl'/>
                </div>

                <div>
                    <p className='mb-2'>Artist </p> 
                    <input type="text" placeholder='Artist Name'  className='w-full p-5 bg-gray-600/50 rounded-xl'/>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer"/>
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Featuring</span>
                </label>
                <label
                    htmlFor="song-upload"
                    className={`relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-300 
                    ${isDragging ? 'border-blue-500 bg-blue-500/10' : 'border-gray-400 hover:border-blue-400 hover:bg-blue-400/10'}`}
                    onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={(e) => {
                    e.preventDefault();
                    setIsDragging(false);
                    }}
                >
                    <div className="flex flex-col items-center gap-2">
                    <Upload01Icon
                        size={32}
                        className={`transition-colors duration-300 ${isDragging ? 'text-blue-500' : 'text-gray-400'}`}
                    />
                    <p className="text-lg font-semibold text-gray-200">
                        {isDragging ? 'Drop your song here' : 'Upload a Song'}
                    </p>
                    <p className="text-sm text-gray-400">No file selected</p>
                    </div>
                    <input
                    id="song-upload"
                    type="file"
                    accept="audio/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                </label>
                <button className='w-full bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl'>Upload Song</button>
            </form>
        </div>
    </div>
  )
}

export default Createsong
