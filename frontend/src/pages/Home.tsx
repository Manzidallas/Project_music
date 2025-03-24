import { PlayIcon } from 'hugeicons-react';
import React from 'react'

const Home = () => {
    
  const topartists = [
    {
      name: "Drake",
      image: "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9",
    },
    {
      name: "Asake",
      image: "https://i.scdn.co/image/ab67616100005174a3ae97af098bf3aeeb24d338",
    },
    {
      name: "Future",
      image: "https://i.scdn.co/image/ab6761610000e5eb7565b356bc9d9394eefa2ccb",
    },
    {
      name: "Don Toliver",
      image: "https://i.scdn.co/image/ab6761610000e5eb62d52993e245cb161f89b01c",
    },
    {
      name: "Kenrick Lamar",
      image: "https://i.scdn.co/image/ab6761610000e5eb39ba6dcd4355c03de0b50918",
    },
    {
      name: "Bruno Mars",
      image: "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
    },
    {
      name: "Taylor Swift",
      image: "https://i.scdn.co/image/ab6761610000e5ebe672b5f553298dcdccb0e676",
    },
    {
      name: "Tyla",
      image: "https://i.scdn.co/image/ab6761610000e5eba1fca104a7abe5a7031b887d",
    },
  ];
  return (
    <div className="bg-black text-white min-h-screen pt-10">
              {/* Main Banner */}
              <div className="relative bg-gradient-to-t from-cyan-500 to-blue-700 rounded-2xl h-60 p-4 flex items-center">
                <div className="absolute right-5 bottom-0 overflow-hidden h-80">
                  <img
                    src="https://s3-alpha.figma.com/hub/file/3245423817/2a6607b4-75c6-4a9f-8ded-fcd75be50101-cover.png"
                    alt="Drake"
                    className="w-[500px] rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">
                    PARTYNEXTDOOR & DRAKE
                  </h2>
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
                  <button className="text-gray-400 hover:text-white">
                    View all
                  </button>
                </div>

                <div className="flex gap-4 mt-4 mb-7">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Playlist Name Cover"
                    className="absolute bottom-2 right-2 w-14 h-14 rounded-full"
                  />

                  {[
                    {
                      title: "Dejavu",
                      tracks: "30",
                      image: "./dejavucover.png",
                      color: "bg-yellow-500",
                    },
                    {
                      title: "Playlist of the day",
                      tracks: "28",
                      image: "./BTS-Background-PNG.png",
                      color: "bg-blue-600",
                    },
                    {
                      title: "Something new",
                      tracks: "37",
                      image: "./cover.png",
                      color: "bg-purple-600",
                    },
                    {
                      title: "Afrobeat Sounds",
                      tracks: "17",
                      image: "./afrocover.png",
                      color: "bg-cyan-600",
                    },
                    {
                      title: "Mega Hits",
                      tracks: "10",
                      image: "./covermega.png",
                      color: "bg-red-600",
                    },
                  ].map((playlist, index) => (
                    <div
                      key={index}
                      className={`px-4 ${playlist.color} rounded-xl relative w-60 h-60 overflow-hidden`}
                    >
                      <img
                        src={playlist.image}
                        alt={playlist.title}
                        className="w-full absolute left-0 bottom-0 right-0"
                      />
                      <div className="absolute bottom-0 mb-5">
                        <p className="text-lg font-bold">{playlist.title}</p>
                        <p className="text-sm text-gray-200">
                          {playlist.tracks} tracks
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Trending now</h2>
                  <button className="text-gray-400 hover:text-white">
                    View all
                  </button>
                </div>

                <div className="flex gap-4 mt-4 mb-5">
                  {[
                    {
                      id: 12,
                      title: "Gimme Some Hug$",
                      artists: "Drake & PARTYNEXTDOOR",
                      image:
                        "https://i.scdn.co/image/ab67656300005f1f0cde67312d43a3fb23089cdb",
                      songUrI: "./music/Drake PARTYNEXTDOOR  GIMME A HUG.mp3",
                      color: "border border-gray-100/20",
                    },
                    {
                      id: 332,
                      title: "Not Like Us",
                      artists: "Kendrick Lamar",
                      song_url: '',
                      image:
                        "https://i.scdn.co/image/ab67616d0000b2731ea0c62b2339cbf493a999ad",
                      songUrI: "./music/Kendrick Lamar - Not Like Us.mp3",
                      color: "border border-gray-100/20",
                    },
                    {
                      id: 221,
                      title: "GBP (feat. 21 Savage)",
                      artists: "Central Cee",
                      image:
                        "https://i.scdn.co/image/ab67616d0000b273d531f45a2948d22e5c5ff66f",
                      songUrI: "./music/gbp.mp3",
                      color: "border border-gray-100/20",
                    },
                    {
                      id: 1344,
                      title: "Beauty On fire",
                      artists: "Bruce Melodie",
                      image:
                        "https://i.scdn.co/image/ab67616d0000b273bbe88b9d406048fd7e9f836c",
                      songUrI: "./music/beauty on fire.mp3",
                      color: "border border-gray-100/20",
                    },
                    {
                      id: 422,
                      title: "Kese",
                      artists: "Wizkid",
                      image:
                        "https://i.scdn.co/image/ab67616d00001e025e9b08109120e18c41a7b3e2",
                      songUrI: "./music/kese.mp3",
                      color: "border border-gray-100/20",
                    },
                  ].map((song, index) => (
                    <div
                      key={index}
                      className={`  relative w-60 overflow-hidden`}
                    >
                      <div
                        className={`${song.color} relative rounded-xl w-60 h-60 overflow-hidden mb-2`}
                        onMouseOver={() => setShowplay(index)}
                        onMouseLeave={() => setShowplay(null)}
                        
                      >
                        <img
                          src={song.image}
                          alt={song.title}
                          className="w-full"
                        />
                        {showplay === index ? (
                          <div
                            key={index}
                            className="absolute bottom-0 right-4 mb-5 bg-gradient-to-r  from-blue-800/80 border border-purple-400/70 to-purple-800 p-4 rounded-full"
                          >
                            <PlayIcon color="black" fill={"black"} 
                              onClick={() =>{ handlePlaySong(song); console.log(song)}}
                            />
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="">
                        <p className="text-lg font-bold">{song.title}</p>
                        <p className="text-[12px] text-gray-200">
                          {song.artists}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="w-full">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Top Artists</h2>
                    <button className="text-gray-400 hover:text-white">
                      View all
                    </button>
                  </div>

                  <div className="overflow-x-scroll">
                    <div className="flex flex-nowrap gap-3 min-w-max items-center">
                      {topartists.map((topartist, index) => (
                        <div key={index} className="text-center mb-3">
                          <div className="w-60 mb-3 h-60 rounded-full overflow-hidden border border-gray-100/30">
                            <img
                              src={topartist.image}
                              alt={topartist.name}
                              className="w-full"
                            />
                          </div>
                          <p className="text-md text-gray-200">
                            {topartist.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Home
