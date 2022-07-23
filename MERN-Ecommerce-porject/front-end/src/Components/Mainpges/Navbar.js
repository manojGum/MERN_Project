import React, { useEffect } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar=()=>{
    const auth=localStorage.getItem('user');
    return (
    
              <div>
                <ul className="nav-ul">
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/add">Add Product</Link></li>
                    <li><Link to="/update">Update Product</Link></li>
                    {/* <li></li> */}
                    <li><Link to="/Profile">Profile</Link></li>

                    {/* if user is SingUp then not sohwo singup menu else shwo SignUp */}
                   
                    <li> {auth ? <Link to="/logout">Logout</Link> :<Link to="/signup">Sign Up</Link>}</li>
                    <li><Link to="/others">others</Link></li>
                </ul>
        </div>
      
    )

}

export default Navbar;