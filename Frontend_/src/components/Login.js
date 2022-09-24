import React from 'react'
import myimage from"../image2.png"
import "./Login.css"

const Login = () => {
  return (
    <div>
      <div className="row">
        <div className="left">
          <h2>Sign up for amazing Resumes & CVs</h2>
          <p className='para'>sign up or login to the GoResume website and we will serve <br /> you with excellents formattable templates.</p>
          <div className="input">
            <label htmlFor=""  className="user">Username</label>
            <input type="text"  className="input-1" />
            <label htmlFor=""  className="email">Your Email Address</label>
            <input type="text"  className="input-2" />
            <label htmlFor=""  className="pass">Password</label>
            <input type="text"  className="input-3" />
            <label htmlFor=""  className="cpass">Confirm Password</label>
            <input type="text"  className="input-4" />
          <button class="btn-sign">Sign Up</button>
          <a className='link'  href="/login">Aready have account?LoginIn</a>
          </div>
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
