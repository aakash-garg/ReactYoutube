import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBrb72kJJnJghmnvzqoTt4B0dwsH_2Gsk8';

const App = () => {
  return(
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
