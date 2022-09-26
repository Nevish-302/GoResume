import React, { useState } from 'react'
// import Contact from './Contact'
import "./Personal.css"
import {useNavigate} from "react-router-dom";

const Personal = () => {
  let datapro="";
  let personname={
    full_name :"",
    job_title :"",
    about:""
}
  let contactdetails={
     number:"",
     email :"",
     address:"",
     linkden:""
}
 let skills = 
  [ 

  

  ] 
  let education= ""
    
  
 let hobbies = 
  [

  ]
 let language = 
  [

  ]
  
const [empname,setEmpname]=useState(personname)
const [newdata,setdata]=useState(datapro)
const [contactkaro,setcontactkaro]=useState(contactdetails)
const [skill,setskills]=useState(skills)
const [edu,setedu]=useState(education)
const [hobbie,sethobbie]=useState(hobbies)
const [lang,newlang]=useState(language)
const [eduyear,setEduyear]=useState("")
const [edudegree,setEdudegree]=useState("")
const [educollege,setEducollege]=useState("")
let data={
  data_profile : newdata,
  name : empname, 
  contact : contactkaro,
  skills :skill,
  hobbies : hobbie,
  education : {
      members : [ 
        {year : eduyear},
        {degree : edudegree},
        {college : educollege}]
  }   
  ,
  work_experience : {
      type: Array,
      members :[
      {year : {type : Number},},
      {duration : {type : Number},},
      {job_title : {type : String},},
      {company_name : {type : String}}]
  },
  lang : {
      type : Array,
  }
  }
  let name,value;
  
  const handleinputs=(e)=>{
    // console.log(e);
    name= e.target.name;
    value = e.target.value;

    setEmpname({...empname,[name]:value})
    setcontactkaro({...contactkaro,[name]:value})
    setdata({...newdata,[name]:value})
    console.log(empname);
  }
  const [input,setinput]= useState("")
  const [newinput,setnewinput]= useState("")
  const [langinput,setlanginput]= useState("")
  const handlebutton=()=>{
    // const skill = [];
    skill.push(input);
    setskills(skill);
    setinput("")
    console.log(skill)
  }
  const newbutton= ()=>{
    // const current = [];
    hobbie.push(newinput);
    sethobbie(hobbie);
    setnewinput("");
    console.log(skill);
  }
  const newlangbutton= ()=>{
    // const current = [];
    lang.push(langinput);
    newlang(lang);
    langinput("");
    console.log(lang);
  }
  const handleskill =async (e)=>{
    const val = await e.target.value;
    setinput(val);
  }
  const newhandleskill =async (e)=>{
    const val = await e.target.value;
    setnewinput(val);
  }
  const newlanghandle =async (e)=>{
    const val = await e.target.value;
    setlanginput(val);
  }






  const history = useNavigate();
  const personalnext = () =>{
     var doc1 = document.querySelector(".second1new");
     var doc2 = document.querySelector(".second1newone");
     doc1.classList.add("hidd");
    //  doc1.classList.add("flex");
    doc2.classList.remove("hidd");
    doc2.classList.add("flex");
  }
  
  
  const personalback =()=>{
    var doc1 = document.querySelector(".second1new");
    var doc2 = document.querySelector(".second1newone");
    doc2.classList.add("hidd");
    doc1.classList.remove("hidd");
    doc2.classList.remove("flex");
  }

  const contactnext =()=>{
    var doc3 = document.querySelector(".second1newone");
    var doc4 = document.querySelector(".secondnew");
    doc3.classList.add("hidd");
    doc4.classList.remove("hidd");
    doc4.classList.add("flex");
  }

  const contactback =()=>{
    var doc3 = document.querySelector(".second1newone");
    var doc4 = document.querySelector(".secondnew");
    doc4.classList.add("hidd");
    doc3.classList.remove("hidd");
    doc4.classList.remove("flex");
  }

  const worknext =()=>{
    var doc5 = document.querySelector(".secondnew");
    var doc6 = document.querySelector(".secondskill1new");
    doc5.classList.add("hidd");
    doc6.classList.remove("hidd");
    doc5.classList.add("flex");
  }
  const skillnext =()=>{
    var doc7 = document.querySelector(".secondskill1new");
    var doc8 = document.querySelector(".second1newa");
    doc7.classList.add("hidd");
    doc8.classList.remove("hidd");
    doc8.classList.add("flex");
  }
  
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
              <input type="text"placeholder='fullname' name='full_name' value={empname.full_name}  onChange={handleinputs} className='fullinput'/>
              
              </div>
              <div className='input11'>
              <input type="text" placeholder='Profession' name='job_title' value={empname.job_title} onChange={handleinputs} className='box11' />
              <input type="text" placeholder='Unique resume name' name='data_profile' value={newdata.data_profile} onChange={handleinputs} className='box11' />
              </div>
              
              <textarea type="text" placeholder='About' name='about' value={empname.about} onChange={handleinputs} className='textbox' />
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
                <button onClick={personalnext} style={{
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

      <div className="second1newone hidd">
          <div className="second11">
            <h1 style={{"textAlign":"center"}}>Your Contact details</h1>
            <p style={{
                  "width": "69%",
                  "textAlign": "center"
            }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, accusamus?lmdkblndkbm, f,b f.b,
            </p>
            <div className="box1">
              <div className="input11">
              <input type="text" placeholder='Email address'  name="email" value={contactkaro.email}   onChange={handleinputs} className='box31'/>
              <input type="" placeholder='Phone no.'  name="phone" value={contactkaro.phone}   onChange={handleinputs} className='box41'/>
              </div>
              <input type="text" placeholder='Address'  name="address" value={contactkaro.address}   onChange={handleinputs} className='box11' />
              <input type="text" placeholder='Your github link' name="github"  value={contactkaro.github}  onChange={handleinputs}  className='box21' />
              <input type="text" placeholder='Your Linkden Link'  name="linkden" value={contactkaro.linkden}   onChange={handleinputs} className='box21' />
            <div style={{
              "display":"flex"
            }}>
              <input type="text" placeholder='Lang'  name="lang" value={langinput}   onChange={newlanghandle} className='box21' />
              <button onClick={newlangbutton} style={{"height":"42px","width":"32px","borderRadius":"8px"}}>+</button>
            </div>
              <div style={
                {
                  "height": "46px",
                  "position":"relative"
                }
              }>
                <button onClick={personalback} style={{
                  "height":"40px",
                  "width":"160px",
                  "background": "none",
                  "border-radius": "31px"
                }}>
                  Back
                </button>
                <button onClick={contactnext} style={{
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
            <img className="contactimg" src='' alt="" />
          </div>
      </div>

      <div className="secondnew hidd">
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
                <button onClick={contactback} className='fistbut'>
                  Back
                </button>
                <button onClick={worknext} className='secoundbtn'>
                  continue
                </button>
              </div>
            </div>
          </div>
          <div className="second2">
            <img src="" alt="" />
          </div>
      </div>

      <div className="secondskill1new hidd">
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
              <input type="text" placeholder='Skill Name' onChange={handleskill}  value={input}  className='box31'/><button onClick={handlebutton} style={{"height":"42px","width":"32px","borderRadius":"8px"}}>+</button>
              </div>
              <div>
              <input type="text" placeholder='Proficiency'  onChange={newhandleskill}  value={newinput} name="proficiency"  className='box11' /><button onClick={newbutton} style={{"height":"42px","width":"32px","borderRadius":"8px"}}>+</button>
              </div>
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
                <button onClick={skillnext} style={{
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

      <div className="second1newa hidd">
          <div className="second11">
            <h1 style={{"textAlign":"center"}}>Your Educational Details</h1>
            <p style={{
                  "width": "69%",
                  "textAlign": "center"
            }}>Mentioning your education qualifications will show your 
            awareness in particular domains.
            </p>
            <div className="box1">
              <input type="text" name='degree'      placeholder='Degree' className='box31'/>
              <div className="input11">
              <input type="text" name='year'  placeholder='Starting Date' className='box11' />
              <input type="text"   placeholder='Ending Date' className='box11' />
              </div>
              <input type="text"name='college'    placeholder='Institution' className='box21' />
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

export default Personal
