import React from "react";
import { Route, Switch, Redirect} from "react-router-dom";
import Navigation from "../navigation/navigation";
import CheckOut from "../pages/checkout/checkout";
import Main from "../pages/main";
import Header from "../header";

const App = () =>{
    return (
        <div className="container">
            <Header numItems={3} total={2400}/>
            <Navigation/>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/main" />
                </Route>
                <Route path="/main" exact >
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