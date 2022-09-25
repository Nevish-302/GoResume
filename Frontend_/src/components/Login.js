import React from 'react'
import myimage from"../image2.png"
import "./Login.css"

const Login = () => {
  return (
    <div>
      <div className="row1">
        <div className="left1">
          <h2 >Sign up for amazing Resumes & CVs</h2>
          <p className='para1'>sign up or login to the GoResume website and we will serve <br /> you with excellents formattable templates.</p>
          {/* <div className="input"> */}
            <label htmlFor=""  className="user1">Username</label>
            <input type="text"  className="input-11" />
            <label htmlFor=""  className="pass1">Password</label>
            <input type="text"  className="input-31" />
          <button class="btn-sign1">Login In</button>
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
