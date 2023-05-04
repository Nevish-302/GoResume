import React from 'react'
import myimage from"../image2.png"
import "./Login.css"
import { useState, useEffect} from 'react'
import  {useNavigate}  from "react-router-dom";
import { useCookies } from 'react-cookie';

const Login = () => {

  const history = useNavigate();

  const [login,setlogin]=useState({
   username:"",password:""
  })

  let name,value;
  
  const handlelogin = (e)=>{
   name= e.target.name;
   value = e.target.value;

   setlogin({...login,[name]:value})
  }

  const [cookies, setCookie] = useCookies(['user'])  
  const [cook, setCook] = useState({name : '', token : ''})
  useEffect(()=> {
  setCookie('auth', cook.auth, {
    path : '/'
    })
    console.log(cookies);
  }, [cook])
  console.log(cookies);
  const loginnow = async(e)=>{
    e.preventDefault();
      const {username,password} = login;

      const res = await fetch("https://goresume-api.onrender.com/userauth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        credentials: 'include', //for jwt 
        body:JSON.stringify({
          username,password
        })
      });
      const jack = await res.json()
      setCook(jack);
      console.log(res)
      res.status == 200 ? window.alert(`Login Success`) : window.alert(`invalid credentials`)
     history("/");
  }

  return (
    <div>
      <div className="row1">
        <div className="left1">
          <h2 className='login-head'>Log in for amazing resumes and CVs!</h2>
          <p className='para1'>Login to the GoResume website and we will serve<br />
you with excellents formattable templates.</p>
          {/* <div className="input"> */}
            <label htmlFor="username"  className="user1">Username:</label>
            <input type="text" name="username"  value={login.username}  className="input-11" onChange={handlelogin} />
            <label htmlFor="password"  className="user1">Password:</label>
            <input type="password" name="password" value={login.password} className="input-11"  onChange={handlelogin}/>
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
