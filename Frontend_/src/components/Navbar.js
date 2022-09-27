import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../App';
import "./Navbar.css";

const Navbar=()=> {
  const history = useNavigate();
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
      <button class="button-2" onClick={()=>{
        history("/")
      }}>
        Home
      </button>
      <div>

      <button onClick={()=>{
        history("/login")
      }} class="button-1">
        Log In<img
          class="profile-logo"
          src="https://assetscdn1.paytm.com/frontendcommonweb/efb01c36.svg"
          alt="profileLogo" />
      </button>


      <button onClick={()=>{
        history("/Signup")
      }} class="button-4">
        Sign up
      </button>



      <button onClick={()=>{
        history("/about")
      }} class="button-5">
        About
      </button>

      <button onClick={()=>{
        history("/logout")
      }} class="button-3">
        logout <img
          class="profile-logo"
          src="https://assetscdn1.paytm.com/frontendcommonweb/efb01c36.svg"
          alt="profileLogo" />
      </button>

      </div>


    </div>
    
    </>
  
  )
}

export default Navbar
