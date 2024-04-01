import Tracklist from "./Tracklist";
import "./SearchResults.css";


const SearchResults = ({results}) => {

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
