import React from "react";
import './SignUp.css'

const SingUp=()=>{
    return(
        <div className="register">
            <h1 className="inputBox">Register</h1>
            <input className="inputBox" type="text" placeholder="Enter Name" />
            <input className="inputBox" type="text" placeholder="Enter Email" />
            <input className="inputBox" type="password" placeholder="Enter password" />
            <button className="appbutton" type="button">Sign Up</button> 
        </div>
    );
};

export default SingUp