const initialState = {
    books: [
        {id: 1, title: "Prod to Linux", author: "Susana"},
        {id: 2, title: "Prod to Microsoft", author: "Kate"},
    ]
}

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case "BOOKS_LOADED":
            return {
                books: action.payload
            }
        default:
            return state
    }
}

export default reducer;