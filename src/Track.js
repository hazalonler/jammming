import React, { useCallback, useState } from 'react';
import './Track.css';

const Track = (props) => {

    const addTrack = useCallback(
        (event) => {
            props.onAdd(props.track);
        }, 
        [props.onAdd]
    );


    return (
        <div>
            <div className="track">
                <div className='songInfo'>
                    <div>{props.track.name.length > 15 ? props.track.name.slice(0,15) + "..." : props.track.name}</div>
                    <div>{props.track.artist.length > 15 ? props.track.artist.slice(0,15) + "..." : props.track.artist}</div>
                    <div>{props.track.album.length > 15 ? props.track.album.slice(0,15) + "..." : props.track.album}</div>
                </div>
                <div className='addButton'>
                    <button onClick={addTrack}> + </button>
                </div>
            </div>
            
        </div>
    );
};

export default Track;
