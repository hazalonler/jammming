import React, { useState } from "react";
import "./SearchBar.module.css";

const SearchBar = () => {

    const [search, setSearch] = useState('');

    const handleInput = (event) => {
        setSearch(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Search Successful!\nYour search was ${search}`);
    }; 


    return (
        <form onSubmit={handleSubmit} >
            <input type="text" value={search} onChange={handleInput} placeholder="Enter song name..."/>
            <button>Search</button>
        </form>
    );

};

export default SearchBar;
