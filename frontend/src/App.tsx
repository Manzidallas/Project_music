import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Navbar";
import TopBar from "./components/TopBar";
import { PlayIcon } from "hugeicons-react";
import Musicplaybar from "./components/Musicplaybar";
import Createsong from "./components/model/addsong";
import { useSong } from "./musicContext";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Playlist from "./pages/Playlist";
import Album from "./pages/Album";
import Trending from "./pages/Trending";

function App() {

  const {currentSong, setCurrentSong} = useSong();
  

  return (
    <>
      {/* Sidebar */}
      {/* <div className="bg-black w-[80%] rounded-4xl px-6 py-8 "></div> */}
      <div className="relative py-5 text-gray-300 h-[100vh]  border border-black gap-2 flex bg-zinc-900">
        {/* <Createsong/> */}
        <Sidebar />

        <div className="bg-black w-[80%] rounded-4xl px-6 py-8 overflow-y-auto max-h-full">
          <div>
            <TopBar />
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/playlist" element={<Playlist/>} />
                <Route path="/popular" element={<Trending/>} />
                <Route path="/album/:id" element={<Album/>} />
                <Route path="/search" element={<Search/>} />
              </Routes>
          </div>
        </div>
      </div>
      
      <div className="fixed z-100 bottom-5 mx-auto right-32 w-[75%] rounded-xl">
        <Musicplaybar
          id= {currentSong?.id}
          title={currentSong?.title}
          artist={currentSong?.artist}
          coverArt={currentSong?.coverArt}
          songurl={currentSong?.songurl}
        />
      </div>
    </>
  );
}

export default App;
