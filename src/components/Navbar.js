import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";

const Navbar=()=> {
  return (
    <>
    <div class="header">
      <a
      >
        GoResume.com
      </a>
      <div class="navbar">
      </div>
      <button class="button-2">
        Home
      </button>
      <button class="button-1">
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