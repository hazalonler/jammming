import Track from "./Track";

const Tracklist = (props) => {

    return (
        <div>
            {props.tracklist.map((track) => 
                <Track 
                    song={track.song} 
                    artist={track.artist} 
                    album={track.album}
                />
            )}
        </div>
    );

};

export default Tracklist;
