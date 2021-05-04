const booksLoaded = (newBooks) =>{
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}
const booksRequested = () =>{
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}
const booksError = (error) =>{
    return {
        type: 'FETCH_BOOKS_ERROR',
        payload: error
    }
}
const bookAddedToCart = (bookId) =>{
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}
const allBookRemoveFromCart = (bookId) =>{
    return {
        type: "ALL_BOOKS_REMOVE_FROM_CART",
        payload: bookId
    }
}
const removeBook = (bookId) =>{
    return {
        type: "REMOVE_BOOK",
        payload: bookId
    }
}
const fetchBooks = (bookStoreService, dispatch)=> ()=>{
    dispatch(booksRequested());
    bookStoreService.getBooks()
        .then((data)=>{
            dispatch(booksLoaded(data))})
        .catch((error)=>{
            dispatch(booksError(error))
        })
}
export {
    fetchBooks,
    bookAddedToCart,
    allBookRemoveFromCart,
    removeBook
}