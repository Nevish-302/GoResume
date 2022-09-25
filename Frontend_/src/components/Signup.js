import React from 'react'
import { useState} from 'react';
import myimage from"../image1.png"
import "./Signup.css"

const Login = () => {

  const[user,setuser]=useState({
    username:"",email:"",pass:"",cpass:""
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
      const {username,email,pass,cpass} = user;
  
      if(pass != cpass){
        res.status(422).json({error:"password not matching"});
        return;
    }
      const res = await fetch("/userauth/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          username,email,pass
        })
      });  
    }
  
  return (
    <div>
      <div className="row">
        <div className="left">
          <h2 >Sign up for amazing Resumes & CVs</h2>
          <p className='para2'>sign up or login to the GoResume website and we will serve <br /> you with excellents formattable templates.</p>
          {/* <div className="input"> */}
            <label htmlFor="" className="usera">Username</label>
            <input type="text" name="username"   value={user.username} onChange={handleinputs}  className="inputa" />
            <br />
            <label htmlFor=""   className="emaila">Email Address</label>
            <input type="text" name="email" value={user.email} onChange={handleinputs} className="inputb" />
            <br />
            <label htmlFor=""  className="pass1">Password</label>
            <input type="text"  name="pass" value={user.pass} onChange={handleinputs} className="inputc" />
            <br />
            <label htmlFor=""  className="cpass2">confirm Password</label>
            <input type="text" name="cpass"  value={user.cpass} onChange={handleinputs} className="inputd" />
          <button class="btn-signup " >Sign Up</button>
          <a className='linkup'  href="/Signup">dont have a account?SignUp</a>
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

export default Login
