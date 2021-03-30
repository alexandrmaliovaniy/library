import React, {useState} from 'react';
import './App.css';
import BookList from './bookList/BookList';
import Search from './search';
import data from './booksDB/books';
import Context from './Context';

function App() {
  let [query, updateQuery] = useState("");
  let [list, loadList] = useState(data);
  
  function Input(query) {
    updateQuery(query);
    loadList(Search(data, query));
  }

  return (
    <Context.Provider value={{Input}}>
      <div className="App">
        <input id="Search" onChange={(e)=> Input(e.target.value)} value={query}/>
        <BookList books = {list}/>
      </div>
    </Context.Provider>
  );
}

export default App;
