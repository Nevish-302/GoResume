import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./dashboard.css"
import Navbarnew from './Navbarnew'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import QR from '../images/QR.png'
import QRCode from 'react-qr-code';
import userpic from '../userpic.png'
import bro from '../Fill out-bro 1.png'

const Dashboard = () => {
  const [dataProfiles, setDataProfiles] = useState({Data : [], userinfo :
  {
    username :"",
  }})
  const history = useNavigate();
  const userdashboard = async ()=>{
    try {
      const res = await fetch ("/home",{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        },

      });
      const data = await res.json();
      setDataProfiles(data)
      console.log(data);
      if (!res.status === "200") {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  }
  const [cookies, setCookie] = useCookies(['user'])  

  const goToTemplate = (e) => {
    setCookie('dataProfile', e, {
      path : '/'
    })
    history("/template")
  }
  useEffect(()=>{
    userdashboard();
  }, [0])
   const profiles = dataProfiles.Data.map(profile => {
    console.log(cookies, 'cookies')
    const closeQR = (id) => {
      console.log('Hello')
      document.getElementById(id).style.display = 'none';
    }
    return (
      <div className='profile-entry'>
            <div className="card1in" onClick={()=>{goToTemplate(profile.data_profile)}}>
              <div className ='profile-name'>
                {profile.data_profile} 
              </div>
              <div className='profile-date'>
                {profile.createdAt.split('T')[0]}
              </div>
            </div>
              <div className='QRCode' id={profile._id}>
                <button className='QrClose' onClick={() => closeQR(profile._id)}> Close</button>
                <QRCode
            title="QR"
            value= {window.location.href.split('/d')[0] + '/QRtemplate?name=' + dataProfiles.Data[15].data_profile_id}
            bgColor='white'
            fgColor='black'
            size='30vw'
          /></div>
            <img src={QR} className="QR" onClick={()=> {
              console.log('Hello')
              document.getElementById(profile._id).style.display = "flex";
            }}/>
            </div>
    )
  })
  console.log(window.location.href.split('/d')[0])
  return (
    <>
      <Navbarnew/>
      <div style={{
        "height": "647px",
        "width": "100%",
      }}>
      <div className='top' >
        <div>
        <p className='para'>GoResume.com <span className='sub'>The Ultimate Resume Builder</span></p>
        <div className='fun'>
        <a href='/personal'>
            New Resume
        </a>
        </div>
        </div>
        <img className='top-right' src={bro} />
      </div>
      <div className="bottom">
        <div className="one">
            <div className="cardcontain">
            <div className='profile-entry'>
            <div className="profile-entry-head ">
              <div className ='profile-name'>
                Resume Name 
              </div>
              <div className='profile-date'>
                Date
              </div>
            </div>
            <div className='QR'>
              QR
            </div>
            </div>
              {profiles}
            </div>
        </div>
        <div className='divider-hori'/>
        <div className="two">
            <div className="twotop">
            <img className="userpic" src={userpic} alt="" />
            <div className='username'>{dataProfiles.userinfo.username}</div>
            </div>
            <div className="twodown">
            <div className='reset-head'>Reset Password </div>
            
            <label htmlFor="" className='twoinput1'>Enter your old password:</label>
            <input type="text"className='inputtext' />
            <label htmlFor="" className='twoinput1'>Enter new password:</label>
            <input type="text" className='inputtext'/>
            <button type="button" className='twobtn'>Save Password</button>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard
