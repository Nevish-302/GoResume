import React from 'react'
import "./Contact.css"
import contactimg from "../Contact us-bro 1.png"

const Contact = () => {
  return (
    <div className='all'>
      <div className="personal-box">
        <button className='head1contact'>Personal Info</button>
        <button className='head1contact active'>Contact us</button>
        <button className='head1contact'>Personal Info</button>
        <button className='head1contact'>Personal Info</button>
        <button className='head1contact'>Personal Info</button>
      </div>
      <div className="second1new">
          <div className="second11">
            <h1 style={{"textAlign":"center"}}>Your Contact details</h1>
            <p style={{
                  "width": "69%",
                  "textAlign": "center"
            }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, accusamus?lmdkblndkbm, f,b f.b,
            </p>
            <div className="box1">
              <div className="input11">
              <input type="text" className='box31'/>
              <input type="" className='box41'/>
              </div>
              <input type="text" className='box11' />
              <input type="text" className='box21' />
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
            <img className="contactimg" src={contactimg} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Contact
