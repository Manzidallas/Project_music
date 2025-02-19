// import React from 'react'
import viteLogo from '/vite.svg'
import { Add01Icon, FireIcon, Home01Icon, Logout02Icon, Playlist01Icon, Setting07Icon } from 'hugeicons-react'

const Navbar = () => {
  return (
    <div className='bg-black w-70 h-full rounded-4xl ml-5 p-5 relative'>
          <nav>
            <div className='mb-10 flex gap-3 items-center'>
              <img src={viteLogo} alt="" />
              <h1 className='text-4xl font-bold'>Musify</h1>
            </div>

            <ul>
              <li>
                <div className='flex gap-2 items-center text-white py-3 bg-gray-400/30 rounded-xl backdrop-blur-md px-3 mb-3'>
                  <Home01Icon/>
                  <h1>Home</h1>
                </div>
              </li>
              <li>
                <div className='flex gap-3 items-center py-3 bg-gray-400/30 rounded-xl backdrop-blur-md px-3 mb-3'>
                  <Playlist01Icon />
                  <h1>Playlists</h1>
                </div>
              </li>
              <li>
                <div className='flex gap-3 items-center py-3 bg-gray-400/30 rounded-xl backdrop-blur-md px-3 mb-3'>
                  <FireIcon/>
                  <h1>Popular</h1>
                </div>
              </li>

              <li>
                <button className='w-full font-bold gap-1 cursor-pointer hover:scale-110 transform transition duration-200 ease-in-out flex bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl backdrop-blur-md px-2 py-4 mb-3'>
                  <Add01Icon/>
                  <h1>Create New Song</h1>
                </button>
              </li>

            </ul>
          </nav>

          <div className='absolute bottom-0 block w-full left-0 right-0 mx-auto px-4 mb-3'>
            <button className='p-4 mb-3 bg-gray-400/30 rounded-2xl font-bold cursor-pointer'>
              <div className='hover:rotate-90'>
                <Setting07Icon/>
              </div>
            </button>
            
            <div>
              <button className='px-3 py-4 w-full bg-gray-400/30 rounded-2xl flex'>
                <Logout02Icon/>
                <h1 className='ml-2'>Logout</h1>
              </button>
            </div>

          </div>

        </div>
  )
}

export default Navbar
