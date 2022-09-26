import React from 'react'
import "./Edu.css"

const Edu = () => {
  return (
    <div className='all'>
      <div className="personal-box">
        <button className='head1contact'>Personal Info</button>
        <button className='head1contact '>Contact us</button>
        <button className='head1contact'>Personal Info</button>
        <button className='head1contact active'>Education</button>
        <button className='head1contact'>Personal Info</button>
      </div>
      <div className="second1newa">
          <div className="second11">
            <h1 style={{"textAlign":"center"}}>Your Educational Details</h1>
            <p style={{
                  "width": "69%",
                  "textAlign": "center"
            }}>Mentioning your education qualifications will show your 
            awareness in particular domains.
            </p>
            <div className="box1">
              <input type="text" placeholder='Degree' className='box31'/>
              <div className="input11">
              <input type="text" placeholder='Starting Date' className='box11' />
              <input type="text" placeholder='Ending Date' className='box11' />
              </div>
              <input type="text" placeholder='Institution' className='box21' />
              <div style={
                {
                  "height": "46px",
                  "position":"relative"
                }
              }>
                <button style={{
                  "height":"40px",
                  "width":"160px",
                  "background": "none",
                  "border-radius": "31px"
                }}>
                  Back
                </button>
                <button style={{
                  "height":"40px",
                  "width":"160px",
                  "position":"absolute",
                  "left":"240px",
                  "background": "none",
                  "border-radius": "31px",
                  "backgroundColor":"#00B027"
                }}>
                  continue
                </button>
              </div>
            </div>
          </div>
          <div className="second2">
            <img className="contactimg" src="" alt="" />
          </div>
      </div>
    </div>
  )
}

export default Edu
