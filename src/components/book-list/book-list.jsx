import React from "react";
import BookItem from "./book-item";

const BookList = ({books, onAddedToCart}) => {
    return (
        <div>
            {books.map((book) => {
                return (
                    <div><BookItem book={book} onAddedToCart={()=>onAddedToCart(book.id)} /></div>
                )
            })}
        </div>
    )
}
export default BookList;