import React from "react";
import { Link } from "react-router-dom";
import './SignUp.css'

const SingUp=()=>{
    return(
        <>
        <div className="form-wrap">
                  <h2 className="sign-up-h2-heading">Create account</h2>
           <h5 className="sign-up-h5">Your name</h5>
           <input type="text" placeholder="Enter Name"  />
           <h5 className="sign-up-h5">Email</h5>
           <input type="email" placeholder="Enter Email"  />
           <h5 className="sign-up-h5">Password</h5>
           <input type="password"  placeholder="Enter password" />
           <h5 className="sign-up-h5">Re-enter Password</h5>
           <input type="password" name=""  placeholder="Re-Enter password" />
           <button className="appbutton" type="button">Sign Up</button> 
           <p>Already have an account? <Link to="/update">Sign-In</Link></p>
            {/* <h1 className="inputBox">Register</h1>
            <input className="inputBox" type="text" placeholder="Enter Name" />
            <input className="inputBox" type="text" placeholder="Enter Email" />
            <input className="inputBox" type="password" placeholder="Enter password" />
            <button className="appbutton" type="button">Sign Up</button>  */}
        </div>

        </>
 
        
      
  

    );
};

export default SingUp