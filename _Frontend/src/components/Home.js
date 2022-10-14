import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const history = useNavigate();
  return (
    <div>
      {/* <div class="header_A">

<h2>GoResume.com</h2>
<a href="" class="about_us">Login</a>
<a href="" class="login_a">Dashboard</a>
<a href="" class="Home_a">About Us</a>
</div> */}
<div class="header_BB">
<p>Do you know your resume can increase your chance to get hired manifolds!</p>
<h1>WELCOME TO THE ULTIMATE <br/> RESUME BUILDER</h1>
<button class="create-now" onClick={()=>{history("/personal")}}>Create Resume Now</button>
<div class="arrow-image"></div>
<div class="slant">

</div>
<img class="main-image" src="./Resume-pana 1.png" alt=""/>

</div>
    </div>
  )
}

export default Home
