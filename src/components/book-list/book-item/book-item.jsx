import React from "react";
import  "./book-list-item.css"

const BookItem = ({book, onAddedToCart}) => {
    const {author, title, price, coverImage, id} = book;
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt="coverImage"/>
            </div>
            <div className="book-details">
                <a href={"/"} className="book-title">{title} </a>
                <div className="book-author">{author} </div>
                <div className="book-price">${price} </div>
                <button onClick={onAddedToCart} className="btn btn-info">add to cart</button>
            </div>
        </div>
    )
}

export default BookItem;