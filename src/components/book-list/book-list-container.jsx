import React, {Component} from "react";
import {connect} from "react-redux";
import {WithBookstoreService} from "../hoc";
import {fetchBooks, bookAddedToCart} from "../../actions";
import compose from "../../utils";
import Loader from "../loader";
import BookList from "./book-list";
class BookListContainer extends Component{
    componentDidMount() {
       this.props.fetchBooks()

    }

    render(){
    const {books, loading, error} = this.props;
        return (
            <div>
                {loading && <Loader/>}
                {error && <p>error</p>}
                <BookList
                    books={books}
                    onAddedToCart={this.props.onAddedToCart}
                />
            </div>
        )
}
}

const mapStateToProps = ({bookList: {books, loading, error}})=>{
    return {books, loading, error}
}
const mapDispatchToProps = (dispatch, {bookStoreService})=>{

    return{
        fetchBooks: fetchBooks(bookStoreService, dispatch),
        onAddedToCart: (id)=>dispatch(bookAddedToCart(id)),
    }

}
export default compose(
    WithBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(BookListContainer)
