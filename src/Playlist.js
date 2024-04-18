import React, { useCallback, useState } from 'react';
import Track from './Track';
import './Playlist.css';
import Tracklist from './Tracklist';


const Playlist = (props) => {

    const handleInput = useCallback((event) => {
            props.onNameChange(event.target.value);
        }, [props.onNameChange]
    );

    return (
        <div className='container'>
            <div className='playlist'>
                <h2>Playlist</h2>
            </div>
            <div className='naming'>
                <input type='text' defaultValue={'New Playlist'} onChange={handleInput} />
            </div>
            <Tracklist tracklist={props.playlist} onRemove={props.onRemove} isRemoval={true}/>  
            <div className='button'>
                <button className='save' onClick={props.onSave} >Save To Spotify</button>
            </div>
        </div>
    );
};

export default Playlist;
