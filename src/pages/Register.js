import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function Register()
{
    const [form,setform] = useState(
        {
            name:"",
            email:"",
            password:""
        }
    );

    const handlesubmit = async (e)=>{
        e.preventDefault();     // reload the page
        await axios.post('http://localhost:8080/api/users/register',form);
        alert('User Register');
    };
    const handleSubmit = (e) => {
  e.preventDefault();
  // Your form logic here
  console.log("Form submitted");
};

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter name" onChange={(e)=>setform({...form,name:e.target.value})} /><br></br>
            <br></br>
            <input type="email" placeholder="Enter Email" onChange={(e)=>setform({...form,email:e.target.value})}/><br></br>
            <br></br>
            <input type="password" placeholder="Enter Password" onChange={(e)=>setform({...form,password:e.target.value})}/><br></br>
            <br></br>
            <button type="submit">Register</button>
        </form>        
    );
}
export default Register;
