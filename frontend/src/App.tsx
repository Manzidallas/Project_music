import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import TopBar from './components/TopBar'

function App() {

  return (
    <>
      {/* Sidebar */}
      <div className='py-5 text-gray-300 h-[100vh] border border-black gap-2 flex bg-zinc-900'>
        <Navbar/>
        
        <div className='bg-black w-[80%] rounded-4xl px-6 py-8'>
          <div>
            <TopBar/>
            <div className="bg-black text-white min-h-screen pt-10">
            {/* Main Banner */}
            <div className="relative bg-green-600 rounded-2xl h-60 p-4 flex items-center ">
              {/* <div className="absolute right-0 top-0 transform translate-x-10 -translate-y-10 w-40 h-40 bg-red-500 rounded-full"></div> */}
                <div className="absolute right-5 bottom-0 overflow-hidden h-80">
                  <img
                    src="https://s3-alpha.figma.com/hub/file/3245423817/2a6607b4-75c6-4a9f-8ded-fcd75be50101-cover.png"
                    alt="Billie Eilish"
                    className="w-[500px] rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">PARTYNEXTDOOR & DRAKE</h2>
                  <p className="text-3xl font-bold">GIMME A HUG</p>
                  <button className="mt-4 px-4 py-2 bg-white text-black rounded-full font-semibold">
                    Listen now
                  </button>
                </div>
              {/* </div> */}
              </div>
            <div className="mt-6">

              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Playlists for you</h2>
                <button className="text-gray-400 hover:text-white">View all</button>
              </div>

              <div className="flex gap-4 mt-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Playlist Name Cover"
                  className="absolute bottom-2 right-2 w-14 h-14 rounded-full"
                />

                {[
                  { title: "Dejavu", tracks: "30", image: "./dejavucover.png", color: "bg-yellow-500" },
                  { title: "Playlist of the day", tracks: "28", image: "./BTS-Background-PNG.png", color: "bg-blue-600" },
                  { title: "Something new", tracks: "37", image: "./cover.png", color: "bg-purple-600" },
                  { title: "Afrobeat Sounds", tracks: "17", image: "./afrocover.png", color: "bg-green-600" },
                  { title: "Mega Hits", tracks: "10", image: "./covermega.png", color: "bg-red-600" },
                ].map((playlist, index) => (
                  <div key={index}
                    className={`px-4 ${playlist.color} rounded-xl relative w-60 h-60 overflow-hidden`} 
                  >
                    <img 
                      src={playlist.image} 
                      alt={playlist.title}  
                      className='w-full absolute left-0 bottom-0 right-0'
                    />
                    <div className='absolute bottom-0 mb-5'>
                      <p className="text-lg font-bold">{playlist.title}</p>
                      <p className="text-sm text-gray-200">{playlist.tracks} tracks</p>
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
