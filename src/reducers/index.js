const initialState = {
    books: [],
    loading: false,
    error: null,
    cartItem: []

}
const updateCartItems = (cartItem, item, idx) => {

    if(item.count === 0) {
        return [
            ...cartItem.slice(0, idx),
            ...cartItem.slice(idx +1)
        ]
    }

    if (idx === -1){
        return [
            ...cartItem,
            item
        ]
    }
    return [
        ...cartItem.slice(0, idx),
        item,
        ...cartItem.slice(idx +1)
    ]
}
const updateCartItem = (book, item = {}, quantity) => {

    const {
        id = book.id,
        title = book.title,
        count = 0,
        total = 0
    } = item
    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity * book.price
    }
}
const updateOrder = (state, bookId, quantity ) => {
    const {books, cartItem} = state

    const book = books.find(({id}) => id === bookId)
    const itemIndex = state.cartItem.findIndex(({id})=>id === bookId)
    const item = cartItem[itemIndex]
    const newItem = updateCartItem(book, item, quantity)

    return {
        ...state,
        cartItem: updateCartItems(state.cartItem, newItem, itemIndex)
    }
}
const reducer = (state = initialState, action) =>{
    console.log(action.type)
    switch (action.type){
        case "FETCH_BOOKS_REQUEST":
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            }
        case "FETCH_BOOKS_SUCCESS":
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            }
        case "FETCH_BOOKS_ERROR":
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }
        case "ALL_BOOKS_REMOVE_FROM_CART":
            const item = action.payload
            return {
                ...state,
                cartItem: state.cartItem.filter((book)=>book.id !== item)
            }

        case "BOOK_ADDED_TO_CART":
            return updateOrder(state, action.payload, 1)

        case "REMOVE_BOOK":
            return updateOrder(state, action.payload, -1)

        default:
            return state
    }
}

export default reducer;