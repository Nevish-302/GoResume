import React from 'react'
import "./Navbarnew.css"
import home from '../home.png'
import contact from '../contact.png'
import download from '../download.png'
import update from '../update.png'
import userpic from '../userpic.png'

// import "./new.js"
import { Link } from 'react-router-dom'

const Navbarnew = () => {
    var counter = true;
    const handleclick = () =>{
        if(counter){
        const mew = document.querySelector('.menu');
        const butt = document.querySelector('.btn-new');
        // mew.classList.remove('.mew');
        mew.classList.add('mew1');
        butt.classList.add('meow');
        counter=false;

    }else{
        counter =true;
        const mew = document.querySelector('.menu');
        const butt = document.querySelector('.btn-new');
        // mew.classList.remove('.mew');
        mew.classList.remove('mew1');
        butt.classList.remove('meow');

    }
    
    }
  return (
    <div className='sidenav'>
{/* <div class="toggle">
        <Link><i class="fa fa-bars"></i></a>
    </div> */}
    <button className='btn-new' onClick={handleclick} >|||</button>
    <div className="menu">
        <ul>
            <li><i class="fa-solid fa-house-user"></i><Link href="#"><img className='icon' src ={home} />Home</Link></li>
            <li><Link href="#"><img className='icon' src ={update} />Update Resume</Link></li>
            <li><Link href="#"><img className='icon' src ={download} />Download Page</Link></li>
            <li><Link href="#"><img className='icon' src ={contact} />Contact Us</Link></li>
            
        </ul>
    </div>
    </div>
  )
}

export default Navbarnew
