import React, { useEffect } from 'react'
import "./dashboard.css"
import Navbarnew from './Navbarnew'

const Dashboard = () => {

  const userdashboard = async ()=>{
    try {
      const res = await fetch ("/home",{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        }
      });
      console.log("Hi")
      const data = await res.json();
      console.log(data);
      if (!res.status === "200") {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    userdashboard();
  })

  return (
    <>
      <Navbarnew/>
      <div style={{
        "height": "647px",
        "width": "100%",
      }}>
      <div className='top' >
        <h1 className='head'>Welcome to</h1>
        <p className='para'>GoResume.com <span>The ultimate resume builder</span></p>
        <div className='fun'>
            let's make some
        </div>
      </div>
      <div className="bottom">
        <div className="one">
            <div className="cardcontain">
            <div className="card1">
                <div className="card1in">

                </div>
            </div>
            <div className="card2">
                <div className="card2in">

                </div>
            </div>
            <div className="card3">
                <div className="card3in">
                    
                </div>
            </div>
            </div>
            <div className="cardcontain">
            <div className="card1">
                <div className="card1in">

                </div>
            </div>
            <div className="card2">
                <div className="card2in">

                </div>
            </div>
            <div className="card3">
                <div className="card3in">

                </div>
            </div>
            </div>
        </div>
        <div className="two">
            <div className="twotop">
            <img src="" alt="" />
            <h1>Anubhav Pal</h1>
            <p>lorem10@gmail.com</p>
            </div>
            <div className="twodown">
            <h1>Reset Password</h1>
            <label htmlFor="" className='twoinput1'>Enter your old password</label>
            <input type="text"className='inputtext' />
            <label htmlFor="" className='twoinput2'>Enter new password</label>
            <input type="text" className='inputtext'/>
            <button type="button" className='twobtn'>Reset</button>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard
