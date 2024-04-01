import React, { useState } from 'react';
import Track from './Track';
import './Playlist.css';


const Playlist = (props) => {

    const [name, setName] = useState('Kalben Fav List');

    const handleInput = (event) => {
        setName(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Playlist made Successfully!\nYour playlist was ${props.playlist}`);
    }; 


    return (
        <div className='container'>
            <div className='playlist'>
                <h2>Playlist</h2>
            </div>
            <form onSubmit={handleSubmit} className='naming'>
                <input type='text' value={name} onChange={handleInput} />
            </form>
            <div className="list">
                {props.playlist.map((track) =>
                    <Track 
                        key={track.id}
                        name={track.name}
                        artist={track.artist}
                        album={track.album}    
                    />
                )}
            </div>  
            <div className='button'>
                <button className='save'>Save To Spotify</button>
            </div>
        </div>
    );
};

export default Playlist;
