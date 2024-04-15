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
        {
          uri: 'spotify:track:7srtV4NCdSZYV4hD5ypdnN',
          id: "ba12ur34",
          name: "Al Beni",
          artist: "Kalben",
          album: "Sonsuza Kadar"
      },
      {
          uri: 'spotify:track:4CWwQBDEI444gJh9rSg6iB',
          id: "fe321fr2",
          name: "Ben Her Zaman Sana Asiktim",
          artist: "Kalben",
          album: "Sonsuza Kadar"
      }, 
      {
          uri: 'spotify:track:03RzD0WAxZsEmFB5Qw4ygK',
          id: "fdiw9u4n",
          name: "Doya Doya",
          artist: "Kalben",
          album: "Kalben"
      },
      {
          uri: 'spotify:track:6ekZQgLfo35AVWkMSrfXGT',
          id: "law3295c",
          name: "Cek",
          artist: "Kalben",
          album: "Ask Cesmesi"
      },
    ]
  );

  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [savedTracksURL, setSavedTracksURL] = useState([]);

  const addTrack = useCallback(
    (track) => { 
      setResults(
        (prevTracks) => prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
      );
      setPlaylist((prevTracks) => [...prevTracks, track]);
    },[]
  );

  const removeTrack = useCallback(
    (track) => { 
      setPlaylist(
        (prevTracks) => prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
      ); 
    }, []
  );

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const saveTracks = useCallback (() => {
    const tracksURL = playlist.map((track) => track.uri);
    setSavedTracksURL([playlistName, tracksURL]);
    alert(`Playlist made Successfully!\nYour playlist was ${savedTracksURL}`);
  }, [playlist, playlistName]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
        <SearchBar className="searchbar"/>
        <div className="login">Log In</div>
      </header>
      <SearchResults results={results} onAdd={addTrack}/>
      <Playlist 
        playlist={playlist} 
        onRemove={removeTrack} 
        onSave={saveTracks} 
        playlistName={playlistName} 
        onNameChange={updatePlaylistName}
      />
    </div>
  );
}

export default App;
