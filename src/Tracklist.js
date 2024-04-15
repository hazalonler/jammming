import Track from "./Track";
import './Tracklist.css';
const Tracklist = ({tracklist, onAdd, onRemove, isRemoval}) => {

    return (
        <div className="list">
            {tracklist.map((track) =>
                <Track 
                    key={track.id}
                    track={track}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    isRemoval={isRemoval}    
                />
            )}
        </div>
    );
};

export default Tracklist;
