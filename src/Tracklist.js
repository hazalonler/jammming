import Track from "./Track";
import './Tracklist.css';
const Tracklist = ({tracklist, onAdd, onRemove}) => {

    return (
        <div className="list">
            {tracklist.map((track) =>
                <Track 
                    key={track.id}
                    track={track}
                    onAdd={onAdd}
                    onRemove={onRemove}    
                />
            )}
        </div>
    );
};

export default Tracklist;
