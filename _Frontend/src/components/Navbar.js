import React from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import "./Navbar.css";


const Navbar=()=> {
  const history = useNavigate();

  const login=()=>{
    history("/login");
  }
  return (
    <>
    <div class="header">
      <a
      style={{
      "position":'absolute',
      "left":"45px",
      "color":"aliceblue"
      }}
      >
        GoResume.com
      </a>
      <div class="navbar">
      </div>
      <button onClick={()=>{history("/")}} class="button-2">
        Home
      </button>
      <button onClick={()=>{history("/SignUp")}} class="button-3">
        Sign Up
      </button>
      <button onClick={login} class="button-1">
        Log In<img
          class="profile-logo"
          src="https://assetscdn1.paytm.com/frontendcommonweb/efb01c36.svg"
          alt="profileLogo" />
      </button>
    </div>
    
    </>
  
  )
}

export default Navbar
