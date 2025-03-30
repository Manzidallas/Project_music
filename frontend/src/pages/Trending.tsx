import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSong } from "../musicContext";
import { PlayIcon } from "hugeicons-react";

// Sample data for the slideshow (replace with your own content)
const slides = [
  {
    title: "Best entertainment apps",
    description: "Enjoy hit movies, TV & music—anytime, anywhere",
    apps: [
      { name: "Netflix", logo: "https://via.placeholder.com/50?text=Netflix" },
      { name: "Prime Video", logo: "https://via.placeholder.com/50?text=Prime" },
      { name: "Hulu", logo: "https://via.placeholder.com/50?text=Hulu" },
      { name: "Disney+", logo: "https://via.placeholder.com/50?text=Disney+" },
      { name: "Apple TV", logo: "https://via.placeholder.com/50?text=AppleTV" },
    ],
  },
  {
    title: "South of Midnight",
    description: "Pre-Order $39.99",
    image: "https://via.placeholder.com/300x200?text=South+of+Midnight",
  },
  {
    title: "Atomfall",
    description: "Included with Game Pass $59.99",
    image: "https://via.placeholder.com/300x200?text=Atomfall",
  },
  {
    title: "Unlock Cosmetics",
    description: "In-game benefits with Game Pass",
    image: "https://via.placeholder.com/300x200?text=Unlock+Cosmetics",
  },
];

const Trending = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Start at 0
  const [isHovered, setIsHovered] = useState(false);
  const slideshowRef = useRef(null);
  const { currentSong, setCurrentSong } = useSong();
  const [showplay, setShowplay] = useState();

  const handlePlaySong = (song) => {
    setCurrentSong({
      title: song.title,
      artist: song.artists,
      coverArt: song.image,
      songurl: song.songUrI,
    });
  };

  // Duplicate slides for infinite looping (at least 3 sets for seamless effect)
  const extendedSlides = [...slides, ...slides, ...slides];

  // Auto-scroll logic
  useEffect(() => {
    if (isHovered) return; // Pause scrolling when hovered

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 4000); // 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [isHovered]);

  // Reset index for infinite loop
  useEffect(() => {
    if (currentIndex >= slides.length * 2) {
      setCurrentIndex(currentIndex % slides.length);
    }
  }, [currentIndex, slides.length]);

  return (
    <>
    
    <div
      className="relative w-full overflow-hidden py-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={slideshowRef}
    >
      <motion.div
        className="flex w-full h-[300px] items-center"
        animate={{
          x: `-${(currentIndex % slides.length) * 33.33}%`,
        }}
        transition={{
          x: {
            duration: 0.5,
            ease: "easeInOut",
            type: "tween",
          },
        }}
      >
        {extendedSlides.map((slide, index) => {
          const distance = Math.abs((currentIndex % slides.length) - (index % slides.length));
          const isActive = distance === 0;

          return (
            <motion.div
              key={index}
              className="flex-shrink-0 px-2 transition-all duration-300"
              style={{ width: "33.33%" }} // Each slide takes 1/3 of the viewport
              animate={{
                scale: isActive ? 1 : 0.8, // Active slide is full size, others are smaller
                opacity: isActive ? 1 : 0.6, // Active slide is fully opaque
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gray-900 rounded-lg p-5 w-full text-white">
                {slide.apps ? (
                  <>
                    <h2 className="text-xl font-bold mb-2">{slide.title}</h2>
                    <p className="text-gray-400 mb-5">{slide.description}</p>
                    <div className="flex gap-3 flex-wrap">
                      {slide.apps.map((app, appIndex) => (
                        <div key={appIndex} className="flex-shrink-0">
                          <img
                            src={app.logo}
                            alt={app.name}
                            className="w-10 h-10 rounded-md"
                          />
                        </div>
                      ))}
                    </div>
                    <button className="mt-5 bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">
                      See details
                    </button>
                  </>
                ) : (
                  <>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-32 object-cover rounded-md mb-3"
                    />
                    <h2 className="text-xl font-bold mb-2">{slide.title}</h2>
                    <p className="text-gray-400 mb-5">{slide.description}</p>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">
                      See details
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Navigation dots */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              (currentIndex % slides.length) === index ? "bg-white" : "bg-gray-600"
            }`}
            onClick={() => setCurrentIndex(index + slides.length)}
          />
        ))}
      </div>


    </div>
    
    <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Trending WorldWide</h2>
        <button className="text-gray-400 hover:text-white">View all</button>
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
            song_url: "",
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
        <div key={index} className={`  relative w-60 overflow-hidden`}>
            <div
            className={`${song.color} relative rounded-xl w-60 h-60 overflow-hidden mb-2`}
            onMouseOver={() => setShowplay(index)}
            onMouseLeave={() => setShowplay(null)}
            >
            <img src={song.image} alt={song.title} className="w-full" />
            {showplay === index ? (
                <div
                key={index}
                onClick={() => {
                    handlePlaySong(song);
                    console.log(song);
                }}
                className="absolute bottom-0 right-4 mb-5 bg-gradient-to-r  from-blue-800/80 border border-purple-400/70 to-purple-800 p-4 rounded-full"
                >
                <PlayIcon color="black" fill={"black"} />
                </div>
            ) : (
                <></>
            )}
            </div>
            <div className="">
            <p className="text-lg font-bold">{song.title}</p>
            <p className="text-[12px] text-gray-200">{song.artists}</p>
            </div>
        </div>
        ))}
    </div>
    </>
  );
};

export default Trending;