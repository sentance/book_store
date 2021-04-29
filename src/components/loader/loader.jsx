import React from "react";
import Pulse from './Pulse.svg'
const Loader = () => {
    return(
        <div style={{margin: '0 auto'}}>
           <img src={Pulse} alt="spinner"/>
        </div>
    )
}

export default Loader;