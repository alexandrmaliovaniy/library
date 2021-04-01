import React from 'react';
import Book from '../book/Book';
import './BookList.css';

function BookList(props) {
    return (
        <div id="BookList">
            {
            props.books.length > 0 ? 
            props.books.map((el, index) => {
                return <Book {...el} key={el.id} index={index}/>
            }) : <div className="noResult">No result...</div>}
        </div>
    );
}

export default BookList;