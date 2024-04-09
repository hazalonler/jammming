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
            <div className='naming'>
                <input type='text' value={name} onChange={handleInput} />
                <div className="list">
                    {props.playlist.map((track) =>
                        <Track 
                            key={track.id}
                            track={track}
                            onRemove={props.onRemove}   
                        />
                    )}
                </div>  
                <div className='button'>
                    <button className='save' onSubmit={handleSubmit}>Save To Spotify</button>
                </div>
            </div>
        </div>
    );
};

export default Playlist;
