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
const [workyear,setworkyear]=useState("")
const [workduration,setworkduration]=useState("")
const [workjobtitle,setworkjob]=useState("")
const [workcompany,setworkcompany]=useState("")
let data={
  _data_profile : newdata,
  _name : empname, 
  _contact : contactkaro,
  _skills :skill,
  _hobbies : hobbie,
  _education : {
      members : [ 
        {year : eduyear},
        {degree : edudegree},
        {college : educollege}]
  }   
  ,
  _work_experience : {
      members :[
      {year : workduration,},
      {duration : workduration},
      {job_title : workjobtitle},
      {company_name : workcompany}
    ]
  },
  _lang : {
      type : Array,
  }
  }
  let name,value;
  console.log(data);
  const handleinputs=(e)=>{
    // // console.log(e);
    name= e.target.name;
    value = e.target.value;

    setEmpname({...empname,[name]:value})
    setcontactkaro({...contactkaro,[name]:value})
    setdata({...newdata,[name]:value})
    // console.log(empname);
  }
  const [input,setinput]= useState("")
  const [newinput,setnewinput]= useState("")
  const [langinput,setlanginput]= useState("")
  const handlebutton=()=>{
    // const skill = [];
    skill.push(input);
    setskills(skill);
    setinput("")
    // // // console.log(skill)
  }
  const newbutton= ()=>{
    // const current = [];
    hobbie.push(newinput);
    sethobbie(hobbie);
    setnewinput("");
    // // console.log(skill);
  }
  const newlangbutton= ()=>{
    // const current = [];
    lang.push(langinput);
    newlang(lang);
    langinput("");
    // console.log(lang);
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

  const eduback =()=>{
    var doc9 = document.querySelector(".secondskill1new");
    var doc10 = document.querySelector(".second1newa");
    doc10.classList.add("hidd");
    doc9.classList.remove("hidd");
    doc10.classList.remove("flex");
  }

  const skillback =()=>{
    var doc11 = document.querySelector(".secondskill1new");
    var doc12 = document.querySelector(".secondnew");
    doc12.classList.add("hidd");
    doc11.classList.remove("hidd");
    doc12.classList.remove("flex");
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

  const fulldata =async ()=>{
    const {_data_profile,_name,_contact,_hobbies,_education} = data
    try {
      const res = await fetch("http://localhost:8080/form/submit",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
         _data_profile,_name,_contact,_hobbies,_education
        })
      })
    } catch (error) {
      
    }
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
              <input type="text"placeholder='fullname'  className='fullinput'/>
              
              </div>
              <div className='input11'>
              <input type="text" placeholder='Profession'  className='box11' />
              <input type="text" placeholder='Unique resume name' name='data_profile' value={newdata.data_profile} onChange={handleinputs} className='box11' />
              </div>
              
              <textarea type="text" placeholder='About'   className='textbox' />
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
              <input type="" placeholder='Phone no.'  name="phone"  className='box41'/>
              </div>
              <input type="text" placeholder='Address'  name="address"  className='box11' />
              <input type="text" placeholder='Your github link' name="github"    className='box21' />
              <input type="text" placeholder='Your Linkden Link'  name="linkden" className='box21' />
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
              <input type="text" placeholder='Company Name' value={input} onChange={(e)=>{setworkcompany(e.target.value)}} className='box3new'/>
              <input type=""  placeholder='Designation' onChange={(e)=>{setworkjob(e.target.value)}} className='box4new'/>
              </div>
              <input type="text"   placeholder='Time period of service' onChange={(e)=>{setworkduration(e.target.value)}} className='box1new' />
              <textarea type="text" placeholder='Description' onChange={(e)=>{setworkduration(e.target.value)}} className='box2new' />
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
                <button onClick={skillback} style={{
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
              <input type="text" name='degree' value={input} onChange={(e)=>{setEdudegree(e.target.value)}}    placeholder='Degree' className='box31'/>
              <div className="input11">
              <input type="text" name='year'  value={input} onChange={(e)=>{setEduyear(e.target.value)}}  placeholder='Starting Date' className='box11' />
              <input type="text"   placeholder='Ending Date' className='box11' />
              </div>
              <input type="text"name='college'  value={input} onChange={(e)=>{setEducollege(e.target.value)}}    placeholder='Institution' className='box21' />
              <div style={
                {
                  "height": "46px",
                  "position":"relative"
                }
              }>
                <button onClick={eduback} style={{
                  "height":"40px",
                  "width":"160px",
                  "background": "none",
                  "border-radius": "31px"
                }}>
                  Back
                </button>
                <button onClick={fulldata} style={{
                  "height":"40px",
                  "width":"160px",
                  "position":"absolute",
                  "left":"240px",
                  "background": "none",
                  "border-radius": "31px",
                  "backgroundColor":"#00B027"
                }}>
                  fullformdata
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
