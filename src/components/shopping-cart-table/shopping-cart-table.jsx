import React from "react";
import "./shopping-cart-table.css"
import {connect} from "react-redux";
import {allBookRemoveFromCart, removeBook, bookAddedToCart} from "../../actions"


const ShoppingCartTable = (props) => {
    const data = props.cartItem.map((book)=>{
        return (
            <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.count}</td>
                <td>${book.total}</td>
                <td>
                    <button onClick={()=>props.onDelete(book.id)} className="btn btn-outline-danger">
                        <i className="fa fa-trash-o"/>
                    </button>
                    <button onClick={()=>props.onIncrease(book.id)} className="btn btn-outline-success">
                        <i className="fa fa-plus-circle"/>
                    </button>
                    <button onClick={()=>props.onDecrease(book.id)} className="btn btn-outline-warning">
                    <i className="fa fa-minus-circle"/>
                </button>
                </td>
            </tr>
        )
    })
    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
            <div className="total">
                Total: $201
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        cartItem: state.shoppingCart.cartItem
    }
}
const mapDispatchToProps = {
    onDelete: allBookRemoveFromCart,
    onDecrease: removeBook,
    onIncrease: bookAddedToCart,
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);