import './Track.css';

const Track = ({key, name, artist, album}) => {
    return (
        <div>
            <div className="track">
                <div>{name.length > 25 ? name.slice(0,25) + "..." : name}</div>
                <div>{artist.length > 25 ? artist.slice(0,25) + "..." : artist}</div>
                <div>{album.length > 25 ? album.slice(0,25) + "..." : album}</div>
            </div>
        </div>
    );
};

export default Track;
