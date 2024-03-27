
import { useState } from "react";
import "./SearchResults.module.css";
import Tracklist from "./Tracklist";


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
    ]

    return (
        <div className="results">
            <Tracklist tracklist={results} />
        </div>
    );

};

export default SearchResults;
