import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// Outlet handel which is that i am passing througn props 
// privateRout or PrivateComponents are same
const PrivateComponents=()=>{
    // get data into localStorage
    const auth=localStorage.getItem('user')
    // hear i am appling some conditon like user no singup then redirect to singup pages else allwo  to see all the pages
return auth?<Outlet />:<Navigate to="/signup" />
}
export default PrivateComponents;