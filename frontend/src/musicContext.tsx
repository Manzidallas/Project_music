import { createContext, useContext, useState } from "react";



const Songcontext = createContext();

export const SongProvider = ({children}) =>{
    const [currentSong, setCurrentSong] = useState(null);

    return (
        <Songcontext.Provider value={{currentSong, setCurrentSong}}>
            {children}
        </Songcontext.Provider>
    )

}

export const useSong = () =>{
    const context = useContext(Songcontext)

    if(!context){
        throw new Error (' this must or should have returned useContext as the message')
    }
    return context
}