import React from 'react'
import { useState } from 'react';
import myimage from"../image1.png"
import "./Signup.css"
import  {useNavigate}  from "react-router-dom";

const Signup = () => {
  const history = useNavigate();
  const[user,setuser]=useState({
    username:"",email:"",password:"",cpassword:""
  })

    let name,value;
    const handleinputs=(e)=>{
      // console.log(e);
      name= e.target.name;
      value = e.target.value;
      setuser({...user,[name]:value})
    }

    const postdata = async (e)=>{
      e.preventDefault();
      const { username,email,password,cpassword} = user;
      if(password==cpassword){
        const res = await fetch("https://goresume-api.onrender.com/userauth/register",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            username,email,password
          })
        });
        
        // console.log(res);
        
        const data = await res.json();
        // console.log(data.photo);
        
        if(data.status === "422"|| !data){
          window.alert("invalid registration")
        }
        
        window.alert("succesfully register");
        history("/login");
        
      }
    }
  return (
    <div>
      <div className="row">
        <div className="left">
          <h2 className='signup-head'>Sign up for amazing Resumes & CVs</h2>
          <div className='para2'>SignUp to the GoResume website and we will serve <br /> you with excellents formattable templates.</div>
          {/* <div className="input"> */}
            <label htmlFor="username" className="usera">Username</label>
            <input type="text" name="username"   value={user.username} onChange={handleinputs}  className="input-21" />
            <br />
            <label htmlFor="email"   className="usera">Email Address</label>
            <input type="email" name="email" value={user.email} onChange={handleinputs} className="input-21" />
            <br/>
            <label htmlFor="password"  className="usera">Password</label>
            <input type="password"  name="password" value={user.password} onChange={handleinputs} className="input-21" />
            <br />
            <label htmlFor="cpassword"  className="usera">confirm Password</label>
            <input type="password" name="cpassword"  value={user.cpassword} onChange={handleinputs} className="input-21" />
          <button class="btn-signup " onClick={postdata} >Sign Up</button>
          <a className='linkup'  href="/login">Already have an account? LogIn</a>
          {/* </div> */}
          <div className="arrow-right">
          </div>
        </div>
        <div className="right">
            <img src={myimage} alt="" className='right-img'/>
        </div>
      </div>
    </div>
  )
}

export default Signup
