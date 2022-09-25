import React from 'react'
import "./Workexp.css"

const Workexp = () => {
  return (
    <div className='all'>
      <div className="firstone">
        <button className='headcontact'>Personal Info</button>
        <button className='headcontact'>Contact us</button>
        <button className='headcontact active'>Work Experience</button>
        <button className='headcontact'>Personal Info</button>
        <button className='headcontact'>Personal Info</button>
      </div>
      <div className="second">
          <div className="second1">
            <h1 style={{"textAlign":"center"}}>Your Work Experience</h1>
            <p style={{
                  "width": "69%",
                  "textAlign": "center"
            }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, accusamus?lmdkblndkbm, f,b f.b,
            </p>
            <div className="box">
              <div className="input1">
              <input type="text" placeholder='Company Name' className='box3new'/>
              <input type=""  placeholder='Designation' className='box4new'/>
              </div>
              <input type="text"   placeholder='Time period of service' className='box1new' />
              <textarea type="text" placeholder='Description' className='box2new' />
              <div style={
                {
                  "height": "46px",
                  "position":"relative"
                }
              }>
                <button className='fistbut'>
                  Back
                </button>
                <button className='secoundbtn'>
                  continue
                </button>
              </div>
            </div>
          </div>
          <div className="second2">
            <img src="" alt="" />
          </div>
      </div>
    </div>
  )
}

export default Workexp
