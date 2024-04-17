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
  const [savedTracksURL, setSavedTracksURL] = useState([]);

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
        <SearchBar className="searchbar" onSearch={search}/>
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
