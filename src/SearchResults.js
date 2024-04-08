import Tracklist from "./Tracklist";
import "./SearchResults.css";


const SearchResults = ({results, onAdd}) => {

    return (
        <div className="search-results">
            <div className="title">
                <h2>Results</h2>
            </div>
            <Tracklist tracklist={results} onAdd={onAdd}/>
        </div>
    );

};

export default SearchResults;
