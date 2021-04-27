import React, {Fragment} from "react";

const BookItem = ({book}) => {
    const {title, author} = book;
    return (
        <Fragment>
            <span>Author: {author} </span>
            <span>Title: {title} </span>
        </Fragment>
    )
}

export default BookItem;