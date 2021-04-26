import React from "react";
import {WithBookstoreService} from "../hoc";

const App = ({bookStoreService}) =>{
    console.log(bookStoreService)
    return (
        <div>
            <h2>Hello cat and tinny love</h2>
        </div>
    )
}

export default WithBookstoreService()(App);