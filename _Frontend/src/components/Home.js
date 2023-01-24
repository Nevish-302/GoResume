import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom'
import welcome from '../welcome.png'

const Home = () => {
  const history = useNavigate();
  return (
    <div>
<button class="create-now" onClick={()=>{history("/personal")}}>Create Resume Now</button>
<img src={welcome} className="WelcomeHere" />
    </div>
  )
}

export default Home
