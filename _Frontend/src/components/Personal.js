import React, { useState } from 'react'
// import Contact from './Contact'
import "./Personal.css"
// import "./Contact.css"
// import "./Edu.css"
// import "./Skillset.css"
// import "./Workexp.css"
import {useNavigate} from "react-router-dom";
// import verifyToken from '../../../Backend/middleware/auth';
import { useCookies } from 'react-cookie';
import personal from '../personal.png'
import contactImage from '../contactus.png'
import workImage from '../work.png'
import eduImage from '../education.png'
import skillImage from '../skillset.png'

const Personal = () => {
  const [cookies, setCookie] = useCookies(['user'])  
  console.log(cookies)
  const history = useNavigate();
  let datapro="";
  let personname={
    full_name :"",
    job_title :"",
    about:""
}
  let contactdetails={
     phone:"",
     email :"",
     address:"",
     linkden:""
}
 let skills = 
  [

  ]
  const [empname,setEmpname]=useState(personname)
  const [newdata,setdata]=useState(datapro)
  const [contactkaro,setcontactkaro]=useState(contactdetails)
  const [skill,setskills]=useState(skills)
  // const [edu,setedu]=useState(education)
  const [eduyear,setEduyear]=useState("")
  const [edudegree,setEdudegree]=useState("")
  const [educollege,setEducollege]=useState("")
  const [workyear,setworkyear]=useState("")
  const [workduration,setworkduration]=useState("")
  const [workjobtitle,setworkjob]=useState("")
  const [workcompany,setworkcompany]=useState("")

  let [data, setData]=useState({
    _data_profile:newdata,
    _name : {
      full_name : '',
      job_title : '',
      about : ''
    },
    _contact : contactkaro,
    _skills :[],
    _education : [ 
      
    ]
    ,
    _work_experience : [
      
    ]
    })
  
//let data={
//  _data_profile:newdata,
//  _name : empname,
//  _contact : contactkaro,
//  _skills :skill,
//  _education : [ 
//    {
//      year : eduyear,
//      degree : edudegree,
//      college : educollege
//    }
//  ]
//  ,
//  _work_experience : [
//    {
//      year : workduration,
//      duration : workduration,
//      job_title : workjobtitle ,
//      company_name : workcompany
//    }
//  ]
//  }
  const handlechange = (e)=>{
    const {name,value}= e.target;
    setData(ata => (
      {...ata,
        _name : {...ata._name,
        [name]: value,
      }
  }));
  }
  console.log(data)
  const handlecontact = (e)=>{
    const {name,value}= e.target;
    setData(ata => ({
      ...ata, _contact : {...ata._contact, 
        [name]: value,
      }
  }));
  }

  const [input,setinput]= useState("")
  const [newinput,setnewinput]= useState("")
  const [full_name,setfullname] =  useState("")
  const [job_title,setjobtitle] =  useState("")
  const [about,setabout] =  useState("")
  const handlebutton=()=>{
    const current = [...skill];
    //current.push(input);
    //setskills(current);
    setinput("")
    //console.log(skill)
    setData(ata => {
      return {...ata, _skills : [...ata._skills, input]}
    })
  }
  const handleskill =async (e)=>{
    const val = await e.target.value;
    setinput(val);
  }
  const handlepersonal =async (e)=>{
    const val = await e.target.value;
    setfullname(val);
  }
  const handlejob = async (e)=>{
    const val = await e.target.val;
    setjobtitle(val);
  }
  
  const handleabout = async (e)=>{
    const val = await e.target.val;
    setabout(val);
  }
  
  const fulldata =  async ()=>{
    const {_data_profile,_name,_contact,_education,_work_experience,_skills} = data
    console.log(data);
    try {
      const res = await fetch("/form/submit",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
        _data_profile,_name,_contact,_education,_work_experience,_skills
        })
      })
      history("/template") 
    } catch (error) {  
    }
  }
  


  // const history = useNavigate();
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
  const handlework=async ()=>{
    await setData(ata => {return {...ata, _work_experience : [...ata._work_experience, {
      year : workyear,  
      duration : workduration,
      job_title : workjobtitle ,
      company_name : workcompany
    }]}})
    setworkcompany('')
    setworkduration('')
    setworkjob('')
    setworkyear('')
  }
  const handleEducation=async ()=>{
    await setData(ata => {return {...ata, _education : [...ata._education, {
      year : eduyear,  
      degree :edudegree ,
      college :educollege  ,
    }]}})
    setEdudegree('')
    setEduyear('')
    setEducollege('')
    
  }
  //console.log(Data, 'data')
  return (


    // -----------------------personal information-----------------------------
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
            <h1 style={{"textAlign":"left"}}>Personal information Section</h1>
            <div style={{
                  "width": "69%",
                  "textAlign": "left"
            }}>This information will be placed on the top of your resume.
            </div>
            <div className="box1">
              <input type="text" placeholder='Resume Name' name='_data_profile' value={data._data_profile} onChange={(e)=>{setData({...data , _data_profile : e.target.value});
              setCookie('dataProfile', e.target.value, {
                path : '/'
              })}}  className='fullinput'/>
              <div className="input11">
              <input type="text"placeholder='Full Name' name='full_name' value={data._name.full_name}  onChange={handlechange}  className='fullinput'/>
              </div>
              <input type="text" placeholder='Job Title' name='job_title'value={data._name.job_title}  onChange={handlechange} className='box11' />
              
              <textarea type="text" placeholder='A little About Yourself' name='about' value={data._name.about}  onChange={handlechange} className='textbox' />
              <div style={
                {
                  "height": "1rem",
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
            <img className = "right-image" src ={personal} />
          </div>
      </div>

      {/* ------------------contact information--------------------------------- */}

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
              <input type="text" placeholder='Email address'  name="email" value={data._contact.email}   onChange={handlecontact} className='box31'/>
              <input type="" placeholder='Phone no.'  name="phone" value={data._contact.phone}   onChange={handlecontact} className='box41'/>
              </div>
              <input type="text" placeholder='Address'  name="address" value={data._contact.address}   onChange={handlecontact} className='box11' />
              {/* <input type="text" placeholder='Your github link' name="github"   className='box21' /> */}
              <input type="text" placeholder='Your Linkden Link'  name="linkden" value={data._contact.linkden}   onChange={handlecontact} className='box21' />
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
          <img className="right-image" src={contactImage} alt="" />

          </div>
      </div>

      {/* ----------------------work experience---------------------------------------- */}

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
              <input type="text" placeholder='Company Name' name='company' value={workcompany}   onChange={(e)=>{setworkcompany(e.target.value)}}  className='box3new'/>
              <input type=""  placeholder='Designation' name='jobtitle' value={workjobtitle} onChange={(e)=>{setworkjob(e.target.value)}} className='box4new'/>
              </div>
              <input type="text"   placeholder='Time period of service' name='time' value={workduration} onChange={(e)=>setworkduration(e.target.value)} className='box1new' />
              <textarea type="text" placeholder='Year(s)'value={workyear} onChange={(e)=>setworkyear(e.target.value)} className='box3new' />
              <button onClick={handlework}>add +</button>
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
            <img src={workImage} className='right-image' alt="" />
          </div>
      </div>

      {/* -------------skill set---------------------------------------------------- */}

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
              <input type="text" placeholder='Proficiency'   value={newinput} name="proficiency"  className='box11' /><button style={{"height":"42px","width":"32px","borderRadius":"8px"}}>+</button>
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
            <img className="right-image" src={skillImage} alt="" />
          </div>
      </div>

      {/* educational details----------------------------------------- */}

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
              <input type="text" placeholder='Degree' name='degree' value={edudegree} onChange={(e)=>{setEdudegree(e.target.value)}} className='box31'/>
              <div className="input11">
              <input type="text" placeholder='Starting Date' name='year'  value={eduyear} onChange={(e)=>{setEduyear(e.target.value)}} className='box11' />
              <input type="text" placeholder='Ending Date' className='box11' />
              </div>
              <input type="text" placeholder='Institution' name='college' value={educollege} onChange={(e)=>{setEducollege(e.target.value)}} className='box21' />
              <button onClick={handleEducation}>add +</button>
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
                <button onClick={fulldata} name="Submit" type='Submit' style={{
                  "height":"40px",
                  "width":"160px",
                  "position":"absolute",
                  "left":"240px",
                  "background": "none",
                  "border-radius": "31px",
                  "backgroundColor":"#00B027"
                }}>
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="second2">
            <img className="right-image" src={eduImage} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Personal
