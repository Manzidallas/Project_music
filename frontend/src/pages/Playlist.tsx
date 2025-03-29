import {MoreVerticalIcon, PlayIcon, Share01Icon, Time01Icon, Time02Icon} from 'hugeicons-react'
import React from 'react'
import { useSong } from '../musicContext';
 
const Playlist = () => {

  const music = [
    { title: 'Sicko Mode', artist: 'Travis Scott', album: 'Astroworld', coverArt: 'https://i.scdn.co/image/ab67616d0000b273c3e1e1e1e1e1e1e1e1e1e1e1', songurl: './music/Travis Scott - Sicko Mode.mp3' },
    { title: 'HUMBLE.', artist: 'Kendrick Lamar', album: 'DAMN.', coverArt: 'https://i.scdn.co/image/ab67616d0000b273c3e1e1e1e1e1e1e1e1e1e1e1', songurl: './music/Kendrick Lamar - HUMBLE.mp3' },
    { title: 'God’s Plan', artist: 'Drake', album: 'Scorpion', coverArt: 'https://i.scdn.co/image/ab67616d0000b273c3e1e1e1e1e1e1e1e1e1e1e1', songurl: './music/Drake - God’s Plan.mp3' },
    { title: 'Mo Bamba', artist: 'Sheck Wes', album: 'Mudboy', coverArt: 'https://i.scdn.co/image/ab67616d0000b273c3e1e1e1e1e1e1e1e1e1e1e1', songurl: './music/Sheck Wes - Mo Bamba.mp3' },
    { title: 'Rockstar', artist: 'Post Malone', album: 'Beerbongs & Bentleys', coverArt: 'https://i.scdn.co/image/ab67616d0000b273c3e1e1e1e1e1e1e1e1e1e1e1', songurl: './music/Post Malone - Rockstar.mp3' },
    { title: 'Bad and Boujee', artist: 'Migos', album: 'Culture', coverArt: 'https://i.scdn.co/image/ab67616d0000b273c3e1e1e1e1e1e1e1e1e1e1e1', songurl: './music/Migos - Bad and Boujee.mp3' },
    { title: 'Old Town Road', artist: 'Lil Nas X', album: '7', coverArt: 'https://i.scdn.co/image/ab67616d0000b273c3e1e1e1e1e1e1e1e1e1e1e1', songurl: './music/Lil Nas X - Old Town Road.mp3' },
    { title: 'Bodak Yellow', artist: 'Cardi B', album: 'Invasion of Privacy', coverArt: 'https://i.scdn.co/image/ab67616d0000b273c3e1e1e1e1e1e1e1e1e1e1e1', songurl: './music/Cardi B - Bodak Yellow.mp3' },
    { title: 'In Da Club', artist: '50 Cent', album: 'Get Rich or Die Tryin\'', coverArt: 'https://i.scdn.co/image/ab67616d0000b273c3e1e1e1e1e1e1e1e1e1e1e1', songurl: './music/50 Cent - In Da Club.mp3' },
    { title: 'Juicy', artist: 'The Notorious B.I.G.', album: 'Ready to Die', coverArt: 'https://i.scdn.co/image/ab67616d0000b273c3e1e1e1e1e1e1e1e1e1e1e1', songurl: './music/The Notorious B.I.G. - Juicy.mp3' },
  ];

  return (
    <div className="mt-4">
      <div className="mb-4 relative h-80 p-4 w-full bg-red-500 rounded-xl">
        <div className="flex gap-4">
          <div className='overflow-hidden rounded-2xl w-70 h-70'>
            <img
              className='w-full'
              src="https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9"
              alt=""
            />

          </div>

          <div className='relative'>
            <div>
              <p className='text-[12px] mb-3'>Playlist</p>
              <h1 className="text-5xl font-bold">Playlist Name</h1>
              <p>16 Tracks</p>
            </div>

            <div className="flex gap-4 items-center absolute bottom-0">
              <div className="bg-gray-100/30 backdrop-blur-md p-2 w-15 h-15 flex items-center cursor-pointer justify-center rounded-full">
                <PlayIcon />
              </div>
              <Share01Icon />
              <MoreVerticalIcon size={30} />
            </div>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-[50px_2fr_1fr_50px] items-center gap-2 px-1 py-4  rounded-t-xl">
        <div className="border-none px-2 py-1 text-center">#</div>
        <div className="border-none px-2 py-1">Title</div>
        <div className="border-none px-2 py-1">Album</div>
        <div className="border-none px-2 py-1 flex justify-center">
          <Time02Icon />
        </div>
      </div>
      {music.map((song) => (
        <div
          key={song.id}
          className="grid grid-cols-[50px_2fr_1fr_50px] items-center gap-2 px-1 py-4 hover:bg-gray-100/20 rounded-md "
        >
          <div className="border-none px-2 py-1 text-center">{song.id + 1}</div>
          <div className="border-none px-2 py-1 flex gap-2 items-center">
            <img
              src="https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9"
              alt=""
              className="w-15 h-15 rounded-xl"
            />
            {/* {title: 'Not Like Us', artist: 'Kendrick Lamar', coverArt: 'https://i.scdn.co/image/ab67616d0000b2731ea0c62b2339cbf493a999ad', songurl: './music/Kendrick Lamar - Not Like Us.mp3'} */}
            <div className="space-y-0">
              <h1 className="font-semibold">{song.artist}</h1>
              <p className="text-sm">{song.title}</p>
            </div>
          </div>
          <div className="border-none px-2 py-1">{song.album}</div>
          <div className="border-none px-2 py-1 flex justify-center">02:15</div>
        </div>
      ))}
    </div>
  );
}

export default Playlist
