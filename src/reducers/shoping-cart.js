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
    const {bookList: {books}, shoppingCart: {cartItem}} = state

    const book = books.find(({id}) => id === bookId)
    const itemIndex = cartItem.findIndex(({id})=>id === bookId)
    const item = cartItem[itemIndex]
    const newItem = updateCartItem(book, item, quantity)

    return {
        orderTotal: 0,
        cartItem: updateCartItems(cartItem, newItem, itemIndex)
    }
}


const updateShoppingCart = (state, action) =>{
    if (state === undefined){
        return {
            cartItem: [],
            orderTotal: 0
        }
    }
    switch (action.type){
        case "ALL_BOOKS_REMOVE_FROM_CART":
            const item = action.payload
            return {
                ...state,
                cartItem: state.shoppingCart.cartItem.filter((book)=>book.id !== item)
            }

        case "BOOK_ADDED_TO_CART":
            return updateOrder(state, action.payload, 1)

        case "REMOVE_BOOK":
            return updateOrder(state, action.payload, -1)

        default:
            return state.shoppingCart
    }
}

export default updateShoppingCart;