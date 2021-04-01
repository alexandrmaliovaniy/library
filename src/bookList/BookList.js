import React from 'react';
import BookPlaceholder from '../book/BookPlaceholder';
import './BookList.css';

const Book = React.lazy(()=> import('../book/Book'))

function BookList(props) {
    return (
        <div id="BookList">
            {
                props.books.length > 0 ? 
                props.books.map((el, index) => {
                    return <React.Suspense key={index} fallback={<BookPlaceholder key={index} />}>{<Book {...el} key={el.id} index={index}/>}</React.Suspense> 
                }) : <div className="noResult">No result...</div>
            }
        </div>
    );
}

export default BookList;