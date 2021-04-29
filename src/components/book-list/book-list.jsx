import React, {Component} from "react";
import {connect} from "react-redux";
import BookItem from "./book-item";
import {WithBookstoreService} from "../hoc";
import {booksLoaded, booksRequested, booksError} from "../../actions";
import compose from "../../utils";
import Loader from "../loader";
class BookList extends Component{
    componentDidMount() {
       this.props.fetchBooks()

    }

    render(){
    const {books, loading, error} = this.props;
        return (
            <div>
                {loading && <Loader/>}
                {error && <p>error</p>}
                {books.map((book) => {
                    return (
                       <div><BookItem book={book}/></div>
                    )
                })}
            </div>
        )
}

}

const mapStateToProps = ({books, loading, error})=>{
    return {books, loading, error}
}
const mapDispatchToProps = (dispatch, ownProps)=>{
    const {bookStoreService} = ownProps;
    return{
        fetchBooks: ()=>{
            dispatch(booksRequested());
            bookStoreService.getBooks()
                .then((data)=>{
                    dispatch(booksLoaded(data))})
                .catch((error)=>{
                    dispatch(booksError(error))
                })
        }
    }

}
export default compose(
    WithBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(BookList)
