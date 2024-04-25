import React, { useCallback, useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {

    const [term, setTerm] = useState('');

    const handleInput = (event) => {
        setTerm(event.target.value);
    };
    
    const handleSearch = useCallback((event) => {
        props.onSearch(term);   
    }, [props, term]); 


    return (
        <div id="search" onSubmit={handleSearch} >
            <input type="text" value={term} onChange={handleInput} placeholder="Enter song name..."/>
            <button onClick={handleSearch}>Search</button>
        </div>
    );

};

export default SearchBar;
