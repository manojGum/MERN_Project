import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar=()=>{
    return (
        <div>
            <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/Profile">Profile</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/others">others</Link></li>
            </ul>
        </div>
    )

}

export default Navbar;