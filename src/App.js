import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
        <SearchBar className="searchbar"/>
        <div className="login">Log In</div>
      </header>
      <SearchResults/>
    </div>
  );
}

export default App;
