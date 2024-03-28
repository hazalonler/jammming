import Tracklist from "./Tracklist";
import "./SearchResults.css";
import { useState } from "react";


const SearchResults = () => {

    const [results, setResults] = useState(
        [
            {
                id: "ba12ur34",
                name: "Al Beni",
                artist: "Kalben",
                album: "Sonsuza Kadar ne olurdu sanki yanima gelseydin"
            },
            {
                id: "fe321fr2",
                name: "Geceler kara Tren",
                artist: "Nazan Once",
                album: "Ben Boyle Ask Gormedim"
            }, 
            {
                id: "fdiw94qn",
                name: "Bikinisinde Astronomi",
                artist: "Son Feci Bisiklet",
                album: "Son Feci EP"
            },
            {
                id: "law3295c",
                name: "Bikinisinde Astronomi",
                artist: "Son Feci Bisiklet",
                album: "Son Feci EP"
            },
            {
                id: "e456gs1b",
                name: "Bikinisinde Astronomi",
                artist: "Son Feci Bisiklet",
                album: "Son Feci EP"
            }, 
            {
                id: "dsi93ms0",
                name: "Geceler kara Tren",
                artist: "Nazan Once",
                album: "Ben Boyle Ask Gormedim"
            }, 
        ]
    );

    return (
        <div className="search-results">
            <div className="title">
                <h2>Results</h2>
            </div>
            <Tracklist tracklist={results}/>
        </div>
    );

};

export default SearchResults;
