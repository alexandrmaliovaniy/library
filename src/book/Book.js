import React from 'react';
import './Book.css';

function Book(props) {
    return(
        <div className="Book">
            <img alt="imgae" src="https://covers.openlibrary.org/b/id/5961019-M.jpg" />
            <div className="info">
                <h1 className="title">
                    {props.title}
                </h1>

                <div className="rank">
                    <strong>Rating:</strong>&nbsp;{props.rank}
                </div>

                <div className="description">
                    <strong>Desctiption:</strong>&nbsp;{props.description.length > 100 ? props.description.slice(0, 100) + "..." : props.description}
                </div>

                <div className="tags">
                    <strong>Tags:</strong>&nbsp;{props.tags.join(", ")}
                </div>

                <div className="author">
                    <strong>Author:</strong>&nbsp;{props.author.join(", ")}
                </div>
            </div>
            <button className="order">
                {props.count > 0 ? "order" : "unavilable"}
            </button>
        </div>
    )
}

export default Book;