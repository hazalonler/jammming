import Track from "./Track";
import './Tracklist.css';
const Tracklist = ({tracklist, onAdd}) => {

    return (
        <div className="list">
            {tracklist.map((track) =>
                <Track 
                    key={track.id}
                    track={track}
                    onAdd={onAdd}    
                />
            )}
        </div>
    );
};

export default Tracklist;
