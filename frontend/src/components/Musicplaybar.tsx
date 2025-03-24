import WavesurferPlayer from '@wavesurfer/react';
import { NextIcon, PauseIcon, PlayIcon, PreviousIcon, Queue01Icon, ShuffleIcon, VolumeHighIcon } from 'hugeicons-react';
import { useEffect, useState } from 'react';

const Musicplaybar = ({ id, title, artist, coverArt, songurl }) => {
  const [volume, setVolume] = useState(false);
  const [showvolume, setShowVolume] = useState(false);
  const [isplaying, setIsplaying] = useState(false);
  const [time, setTime] = useState(0); // Time in seconds
  const [wavesurfer, setWavesurfer] = useState(null);

  // Dynamic playlist built from props
  const [playlist, setPlaylist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Default song when no song is selected yet
  const defaultSong = {
    id: 0,
    songtitle: "No Song Selected",
    artist: "Unknown Artist",
    coverArt: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/2048px-Apple_Music_icon.svg.png", // Fallback image
    songUrl: "",
  };

  // if(time.length > 0){
  //   setIsplaying(true);
  // }else{
  //   setIsplaying(false)
  // }

 

  // Current playing song (defaults to placeholder if playlist is empty)
  const [currentPlaying, setCurrentPlaying] = useState(defaultSong);

  // Update playlist when a new song is passed from App
  useEffect(() => {
    if (title && artist && songurl) {
      const newSong = {
        id: id || Date.now(), // Use provided id or generate a unique one
        songtitle: title,
        artist: artist,
        coverArt: coverArt || "https://via.placeholder.com/150",
        songUrl: songurl,
      };

      // Check if the song already exists in the playlist
      const songExistsIndex = playlist.findIndex((song) => song.songUrl === songurl);
      if (songExistsIndex === -1) {
        // Add new song to playlist if it doesn't exist
        setPlaylist((prev) => [...prev, newSong]);
        setCurrentIndex(playlist.length); // Point to the newly added song
      } else {
        // If song exists, switch to it
        setCurrentIndex(songExistsIndex);
      }
    }
  }, [title, artist, coverArt, songurl, id]);

  // Update currentPlaying when currentIndex or playlist changes
  useEffect(() => {
    if (playlist.length > 0) {
      setCurrentPlaying(playlist[currentIndex]);
    } else {
      setCurrentPlaying(defaultSong); // Fallback when playlist is empty
    }
  }, [currentIndex, playlist]);

  // Navigation functions
  function Next() {
    if (playlist.length > 0) {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 < playlist.length ? prevIndex + 1 : 0
      );
    }
  }

  function Prev() {
    if (playlist.length > 0) {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 >= 0 ? prevIndex - 1 : playlist.length - 1
      );
    }
  }

  // Update document title
  useEffect(() => {
    if (currentPlaying) {
      document.title = `${currentPlaying.artist} - ${currentPlaying.songtitle}`;
    }
  }, [currentPlaying]);

  // Wavesurfer setup
  const onReady = (ws) => {
    setWavesurfer(ws);
    setTime(0); 
  };

  // Update time during playback
  const onAudioprocess = (ws) => {
    setTime(ws.getCurrentTime());
  };

  const onPlayPause = () => {
    if (wavesurfer) {
      wavesurfer.playPause();
    }
  };

  useEffect(() => {
    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentPlaying.songtitle,
        artist: currentPlaying.artist,
        album: "Album Name",
        artwork: [
          {
            src: currentPlaying.coverArt,
            sizes: "512x512", 
            type: "image/png",
          },
        ],
      });
    }})


  return (
    <div className="bg-white/50 px-5 relative backdrop-blur-lg rounded-2xl py-4 flex items-center justify-between">
      <div className="flex gap-2 items-center w-80">
        <img
          src={currentPlaying.coverArt}
          alt="Picture of the music being played"
          className="w-15 h-15 rounded-xl"
        />
        <div>
          <h1 className="text-xl font-semibold">{currentPlaying.songtitle}</h1>
          <p className="text-sm font-lighter">{currentPlaying.artist}</p>
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <div className="flex gap-3 items-center mr-10">
          <button onClick={() => Prev()}>
            <PreviousIcon />
          </button>
          <button onClick={() => onPlayPause()}>
            {!isplaying ? (
              <PlayIcon className="" size={42} fill="#000" />
            ) : (
              <PauseIcon className="" size={42} fill="#000" />
            )}
          </button>
          <button onClick={() => Next()}>
            <NextIcon />
          </button>
        </div>

        <div className="flex gap-10 items-center">
          <div className="w-80">
            <WavesurferPlayer
              height={60}
              url={currentPlaying.songUrl}
              onReady={onReady}
              progressColor={'yellow'}
              barGap={4}
              barRadius={10}
              barWidth={3}
              cursorColor="#000"
              cursorWidth={0}
              autoplay
              onPlay={() => setIsplaying(true)}
              onPause={() => setIsplaying(false)}
              onAudioprocess={onAudioprocess}
            />
          </div>
          <div className="flex w-10 px-1">
            <p>{Math.floor(time / 60)}:</p>
            <p>{('0' + Math.floor(time % 60)).slice(-2)}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <ShuffleIcon />
        <Queue01Icon />
        <VolumeHighIcon />
      </div>
    </div>
  );
};

export default Musicplaybar;