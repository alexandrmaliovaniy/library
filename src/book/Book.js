import React from 'react';
import './Book.css';
import Author from './Author';
import Tag from './Tag';

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
                <strong>Tags:</strong>&nbsp;
                    {props.tags.map((el, index) => {
                        return <Tag name={el} key={index}/>
                    })}
                </div>

                <div className="author">
                    <strong>Author:</strong>&nbsp;
                    {props.author.map((el, index) => {
                        return <Author name={el} key={index}/>
                    })}
                </div>
            </div>
            <button className="order">
                {props.count > 0 ? "order" : "unavilable"}
            </button>
        </div>
    )
}

export default Book;