
import "./SearchResults.css";


const SearchResults = () => {

    const results = [
        {
            song: "Al Beni",
            artist: "Kalben",
            album: "Sonsuza Kadar"
        },
        {
            song: "Geceler kara Tren",
            artist: "Nazan Once",
            album: "Ben Boyle Ask Gormedim"
        }, 
        {
            song: "Bikinisinde Astronomi",
            artist: "Son Feci Bisiklet",
            album: "Son Feci EP"
        },
        {
            song: "Bikinisinde Astronomi",
            artist: "Son Feci Bisiklet",
            album: "Son Feci EP"
        },
        
        {
            song: "Bikinisinde Astronomi",
            artist: "Son Feci Bisiklet",
            album: "Son Feci EP"
        }, 
        {
            song: "Geceler kara Tren",
            artist: "Nazan Once",
            album: "Ben Boyle Ask Gormedim"
        }, 
    ]

    return (
        <div className="search-results">
            <div className="title">
                <h2>Results</h2>
            </div>
            <div className="list">
                {results.map((track) =>
                    <div className="track">
                        <div>{track.song}</div>
                        <div>{track.artist}</div>
                        <div>{track.album}</div>
                    </div>
                )}
            </div>
            
        </div>
    );

};

export default SearchResults;
