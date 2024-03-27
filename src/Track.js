

const Track = (props) => {

    return (
        <div>
            <div>
                <div>{props.song}</div>
                <div>{props.artist}</div>
            </div>
            <div>{props.album}</div>
        </div>
    );
};

export default Track;
