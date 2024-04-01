import Track from "./Track";
import './Tracklist.css';
const Tracklist = (props) => {


    return (
        <div className="list">
            {props.tracklist.map((track) =>
                <Track 
                    key={track.id}
                    name={track.name}
                    artist={track.artist}
                    album={track.album}    
                />
            )}
        </div>
    );
};

export default Tracklist;
