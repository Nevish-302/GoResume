import React from 'react'
import myimage from"../image2.png"
import "./Login.css"
import { useState} from 'react'

const Login = () => {
  
  const [login,setlogin]=useState({
   username:"",password:""
  })

  let name,value;
  
  const handlelogin = (e)=>{
   name= e.target.name;
   value = e.target.value;

   setlogin({...login,[name]:value})
  }

  const loginnow = async(e)=>{
    e.preventDefault();
      const {username,password} = login;

      const res = await fetch("/userauth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          username,password
        })
      });  
      console.log(res,"responded")
  }

  return (
    <div>
      <div className="row1">
        <div className="left1">
          <h2 >Sign up for amazing Resumes & CVs</h2>
          <p className='para1'>sign up or login to the GoResume website and we will serve <br /> you with excellents formattable templates.</p>
          {/* <div className="input"> */}
            <label htmlFor=""  className="user1">Username</label>
            <input type="text" name="username"  value={login.username}  className="input-11" onChange={handlelogin} />
            <label htmlFor=""  className="pass1">Password</label>
            <input type="text" name="password" value={login.password} className="input-31"  onChange={handlelogin}/>
          <button class="btn-sign1" onClick={loginnow}>Login In</button>
          <a className='link1'  href="/Signup">dont have a account?SignUp</a>
          {/* </div> */}
          <div className="arrow-right1">
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
