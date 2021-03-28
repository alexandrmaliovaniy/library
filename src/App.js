import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import BookList from './bookList/BookList';
import Search from './search';
import data from './booksDB/books';

function App() {
  let [list, loadList] = useState(data);
  return (
    <div className="App">
      <input id="Search" onChange={(e)=> loadList(Search(data, e.target.value))}/>
      <BookList books = {list}/>
    </div>
  );
}

export default App;
