import React from 'react'
import "./Navbarnew.css"
// import "./new.js"
import { Link,useNavigate } from 'react-router-dom'


const Navbarnew = () => {
    const history = useNavigate();

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
    <div>
{/* <div class="toggle">
        <Link><i class="fa fa-bars"></i></a>
    </div> */}
    <button className='btn-new' onClick={handleclick} ><i class="fa-solid fa-bars"></i></button>
    <div className="menu">
        <ul>
            <li><i class="fa-solid fa-house-user"></i><Link href="#"  >Home</Link></li>
            <li><Link href="#" >Update Resume</Link></li>
            <li><Link href="#" >Download Page</Link></li>
            <li><Link href="#" >Contact Us</Link></li>
            
        </ul>
    </div>
    </div>
  )
}

export default Navbarnew
