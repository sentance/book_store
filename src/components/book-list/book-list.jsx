import React from "react";
import {connect} from "react-redux";
import BookItem from "./book-item";
const BookList = (props) => {
    const {books} = props;
    return (
        <ul>
            {books.map((book) => {
                return (
                    <li key={book.id}><BookItem book={book}/></li>
                )
            })}
        </ul>
    )
}

const mapStateToProps = ({books})=>{
    return {books}
}

export default connect(mapStateToProps)(BookList);