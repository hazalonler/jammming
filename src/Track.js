import React, { useCallback, useState } from 'react';
import './Track.css';

const Track = (props) => {

    const [isRemoval, setIsRemoval] = useState(false);

    const addTrack = useCallback(
        () => {
            setIsRemoval(true);
            props.onAdd(props.track);
        }, 
        [props.onAdd]
    );

    const removeTrack = () => {
        setIsRemoval(false);
        props.onRemove(props.track);
    };

    const addOrRemove = () => {
        if (isRemoval) {
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
