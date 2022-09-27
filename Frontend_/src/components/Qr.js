import React from "react";
import {useState} from "react"
import "./qr.css"
import qrimage from "../girl.png"
import QRCode from 'react-qr-code';

const Qr =()=>{
    const [value, setValue] = useState("http://localhost:3000/template");
  const [back, setBack] = useState('#FFFFFF');
  const [fore, setFore] = useState('#000000');
  const [size, setSize] = useState(150);
    return(
        <>
        {/* <div class="header_a">

<h2>GoResume.com</h2>
<a href="" class="dashboard_a">Dashboard</a>
<a href="" class="home_a">Home</a>
</div> */}


<div class="main_a">

<div class="left_a">
<div class="first-qr">
  
  <div class="first-qr-1"></div>
  QR for Portfolio
</div>
<div class="second-qr">
  
  <div class="second-qr-2">
  <QRCode
            title="GeeksForGeeks"
            value={value}
            bgColor={back}
            fgColor={fore}
            size={size === '' ? 0 : size}
          />
  </div>
  QR for Resume
</div>
</div>

<div class="right_a">
<div class="triangle-right"></div>
<img class="QR_image" src={qrimage} alt=""/>
</div>
</div>
        </>
    )
}

export default Qr