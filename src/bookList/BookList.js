import React from 'react';
import Book from '../book/Book';
import './BookList.css';

function BookList(props) {
    return (
        <div id="BookList">
            {props.books.map((el, index) => {
                return <Book {...el} key={el.id} index={index}/>
            })}
        </div>
    );
}

export default BookList;