import React from 'react'

const Skillset = () => {
  return (
    <>
        <div className='all'>
      <div className="personal-box">
        <button className='head1contact'>Personal Info</button>
        <button className='head1contact'>Contact us</button>
        <button className='head1contact'>Education</button>
        <button className='head1contact'>Personal Info</button>
        <button className='head1contact active'>Skill Set</button>
      </div>
      <div className="second1new">
          <div className="second11">
            <h1 style={{"textAlign":"center"}}>Your skill sets</h1>
            <p style={{
                  "width": "69%",
                  "textAlign": "center"
            }}>Mention your various skills in various domains to ee how 
            much skillful and suited you are for the position.
            </p>
            <div className="box1">
              <div className="input11">
              <input type="text" placeholder='Skill Name' className='box31'/>
              </div>
              <input type="text" placeholder='Proficiency' className='box11' />
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
    </>
    )
}

export default Skillset
