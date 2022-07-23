import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './SignUp.css'

const SingUp=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [repassword,setRepassword]=useState("")
// it used to navigate or redirect to another pages
    const navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate("/")
        }
        
    })
    // const nameHandel=(event)=>{
    //     setName(event.target.value)
    //     console.log(name)
    // }
    const collectData=async()=>{
        // console.log(name,email,password,repassword)
        let result=await fetch("http://localhost:5000/signup",{
            method:'post',
            body:JSON.stringify({name,email,password}),
          headers:{

                'Content-Type':'application/json'
            },
        });
        result=await result.json()
        console.log(result);
        setPassword("");
        setRepassword("");
        setName("");
        setEmail("");
        if(result)
        {
            // it data save into localStorage afet that page redirect to the product pages
            localStorage.setItem("user",JSON.stringify(result));
            navigate("/")
            // privateComponents are

        }
    }
   
    return(
        <>
        <div className="form-wrap">
                  <h2 className="sign-up-h2-heading">Create account</h2>
           <h5 className="sign-up-h5">Your name</h5>
           <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Name"  />
          
           <h5 className="sign-up-h5">Email</h5>
           <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email"  />
          
           <h5 className="sign-up-h5">Password</h5>
           <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)}  placeholder="Enter password" />
           
           <h5 className="sign-up-h5">Re-enter Password</h5>
           <input type="password"  value={repassword} onChange={(event)=>setRepassword(event.target.value)} name=""  placeholder="Re-Enter password" />
           
           <button className="appbutton" onClick={collectData} type="button">Sign Up</button> 
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