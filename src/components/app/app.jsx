import React from "react";
import { Route, Switch} from "react-router-dom";
import Navigation from "../navigation/navigation";
import CheckOut from "../pages/checkout/checkout";
import Main from "../pages/main";

const App = () =>{
    return (
        <div>
            <h2>Hello cat and tinny - it's my wife and helpers can get</h2>
            <Navigation/>
            <Switch>
                <Route path="/main" exact>
                    <Main/>
                </Route>
                <Route path="/checkout">
                    <CheckOut />
                </Route>
            </Switch>
        </div>
    )
}

export default (App);