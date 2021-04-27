import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <ul>
            <li><Link to="/main">Main</Link></li>
            <li><Link to="/checkout">Cart</Link></li>
        </ul>
    )
}

export default Navigation;