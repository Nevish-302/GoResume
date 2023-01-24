import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom'
import "./Navbar.css";
import { useCookies } from 'react-cookie';

const Navbar=()=> {
  const history = useNavigate();
  const [a, seta] = useState(0)
  const [cookies, setCookie] = useCookies(['user'])
  setCookie("Hello", "Jackass", {
    path: '/'
  })
  console.log(cookies, cookies.auth)
  const login=()=>{
    history("/login");
  }
  return (
    <>
    <div className="header">
      <a
      style={{
      "position":'absolute',
      "left":"45px",
      "color":"aliceblue"
      }}
      >
        GoResume.com
      </a>
      <div className="navbar">
      </div>
      {cookies.auth&& <button onClick={()=>{history("/dashboard")}} className="button-3">
        Dashboard
      </button>
      }
      <button onClick={()=>{history("/")}} className="button-2">
        Home
      </button>
      {!cookies.auth && <button onClick={()=>{history("/SignUp")}} className="button-3">
        Sign Up
      </button>
      }
      {!cookies.auth && <button onClick={login} className="button-1">
        Log In<img
          className="profile-logo"
          src="https://assetscdn1.paytm.com/frontendcommonweb/efb01c36.svg"
          alt="profileLogo" />
      </button>
      }{cookies.auth && <button onClick={async()=>{
        const res = await fetch('userauth/logout', {
          method: 'POST',
          headers:{
            "Content-Type":"application/json"
          },
          credentials: 'include',
        })
        const data = await res.json()
        console.log()
        if(res.status == 200){
        seta(a=> !a)
        console.log('LoggedOut')
        history("/SignUp")
        }
      }} className="button-1">
        Logout
      </button>}
      
    </div>
    
    </>
  
  )
}

export default Navbar
