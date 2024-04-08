import React, { useState, useCallback } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

import './App.css';

function App() {

  const [results, setResults] = useState(
    [
        {
            id: "fe321fr2",
            name: "Geceler kara Tren",
            artist: "Nazan Once",
            album: "Ben Boyle Ask Gormedim"
        }, 
        {
            id: "fdiw94qn",
            name: "Bikinisinde Astronomi",
            artist: "Son Feci Bisiklet",
            album: "Son Feci EP"
        },
        {
            id: "e456gs1b",
            name: "Bikinisinde Astronomi",
            artist: "Son Feci Bisiklet",
            album: "Son Feci EP"
        }, 
        {
            id: "dsi93ms0",
            name: "Geceler kara Tren",
            artist: "Nazan Once",
            album: "Ben Boyle Ask Gormedim"
        }, 
    ]
  );

  const [playlist, setPlaylist] = useState([
      {
          id: "ba12ur34",
          name: "Al Beni",
          artist: "Kalben",
          album: "Sonsuza Kadar"
      },
      {
          id: "fe321fr2",
          name: "Ben Her Zaman Sana Asiktim",
          artist: "Kalben",
          album: "Sonsuza Kadar"
      }, 
      {
          id: "fdiw94qn",
          name: "Doya Doya",
          artist: "Kalben",
          album: "Kalben"
      },
      {
          id: "law3295c",
          name: "Cek",
          artist: "Kalben",
          album: "Ask Cesmesi"
      },
    ]
  );

  const addTrack = useCallback(
    (track) => {
      if (playlist.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylist((prevTracks) => [...prevTracks, track]);
    },
    [playlist]
  );

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
        <SearchBar className="searchbar"/>
        <div className="login">Log In</div>
      </header>
      <SearchResults results={results} onAdd={addTrack}/>
      <Playlist playlist={playlist}/>
    </div>
  );
}

export default App;
