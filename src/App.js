import React, { useState, useCallback } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import {getTrack, savePlaylist} from './Spotify';

import './App.css';

function App() {

  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');

  const search = useCallback((term) => {
    getTrack(term).then(setResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlist.some((savedTrack) => savedTrack.id === track.id))
        return;
      setPlaylist((prevTracks) => [...prevTracks, track]);
    },
    [playlist]
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
    savePlaylist(playlistName, tracksURL).then(() => {
      setPlaylist([]);
      setPlaylistName('New Playlist');
    });
  }, [playlist, playlistName]);

  const handleDarkToggle = () => {
    document.body.classList.toggle('dark-mode')
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enable');
    } else {
        localStorage.setItem('darkMode', 'disable');
    }
  };

  if (localStorage.getItem('darkMode') === 'enable') {
    document.body.classList.add('dark-mode') 
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ja<p className='thremmm'>mmm</p>ing</h1>
        <SearchBar className="searchbar" onSearch={search}/>
        <div className="login">
          <button className='darkToggle' onClick={handleDarkToggle}>Dark/Light</button>
          <div>Log In</div>
        </div>
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
