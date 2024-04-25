import React, { useCallback } from 'react';
import './Track.css';

const Track = (props) => {

    const addTrack = useCallback(
        () => {
            props.onAdd(props.track);
        }, 
        [props]
    );

    const removeTrack = useCallback(
        (event) => {
            props.onRemove(props.track)   
        }, [props]
    );

    const addOrRemove = () => {
        if (props.isRemoval) {
            return (
                <div className='addOrRemoveButton'>
                    <button onClick={removeTrack}> - </button>
                </div>
            )
        } else {
            return (
                <div className='addOrRemoveButton'>
                    <button onClick={addTrack}> + </button>
                </div>
            )
        }
    }


    return (
        <div className="track">
            <div className='songInfo'>
                <div>{props.track.name.length > 15 ? props.track.name.slice(0,15) + "..." : props.track.name}</div>
                <div>{props.track.artist.length > 15 ? props.track.artist.slice(0,15) + "..." : props.track.artist}</div>
                <div>{props.track.album.length > 15 ? props.track.album.slice(0,15) + "..." : props.track.album}</div>
            </div>
            {addOrRemove()}
        </div>
    
    );
};

export default Track;
