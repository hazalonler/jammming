import React, { useCallback, useState } from "react";
import "./SearchBar.module.css";

const SearchBar = (props) => {

    const [term, setTerm] = useState('');

    const handleInput = (event) => {
        setTerm(event.target.value);
    };
    
    const handleSearch = useCallback(() => {
     props.onSearch(term);   
    }, [props.onSearch, term]); 


    return (
        <div id="search-bar" onSubmit={handleSearch} >
            <input type="text" value={term} onChange={handleInput} placeholder="Enter song name..."/>
            <button onClick={handleSearch}>Search</button>
        </div>
    );

};

export default SearchBar;
