import React from 'react'
// import Contact from './Contact'
import "./Personal.css"

const Personal = () => {
  return (
    <div className='all'>
      <div className="personal-box">
        <button className='head1contact active'>Personal Info</button>
        <button className='head1contact'>Contact us</button>
        <button className='head1contact'> Work Experience</button>
        <button className='head1contact'>Education</button>
        <button className='head1contact'>Skill Set</button>
      </div>
      <div className="second1new">
          <div className="second11">
            <h1 style={{"textAlign":"center"}}>Personal information Section</h1>
            <p style={{
                  "width": "69%",
                  "textAlign": "center"
            }}>This information will be placed on the top of your resume.
            </p>
            <div className="box1">
              <div className="input11">
              <input type="text" className='box31'/>
              <input type="" className='box41'/>
              </div>
              <input type="text" className='box11' />
              <div id="meow1">
              <input type="text" className='box21' />
              <input type="text" className='box21' />
              </div>
              <input type="text" className='box21' />
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
                <button  style={{
                  "height":"40px",
                  "width":"160px",
                  "position":"absolute",
                  "left":"240px",
                  "background": "none",
                  "border-radius": "31px",
                  "backgroundColor":"#00B027"
                }}>
                  continue
                  {/* <Contact/> */}
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

export default Personal
