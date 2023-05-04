import React, { useEffect, useState } from 'react'
import "./Template.css"
import { useCookies } from 'react-cookie'

const Template = () => {
  const [cookies, setCookie] = useCookies(['user'])  
  const [name,setname]=useState("")
  const [job,setjob]=useState("")
  const [email,setemail] = useState("")
  const [phone,setphone] = useState("")
  const [address,setaddress] = useState("")
  const [about,setabout] = useState("")
  const [education,seteducation] = useState([])
  const [experience,setexperience] = useState([])
  const [skills,setskills] = useState([])
  console.log(cookies)
  const set = new Set(skills)
  const dataProfile = cookies.dataProfile
  console.log(dataProfile)
  const Resumedata = async ()=>{
    const [cookies, setCookie] = useCookies(['user'])  
    try {
      const res = await fetch(`https://goresume-api.onrender.com/form/get`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization" : "Bearer " + cookies.auth,
        },  
        credentials: 'include', //for jwt 
        body:JSON.stringify({
          dataProfile
        })
      })
      const data = await res.json();
      console.log(data);
      setname(data.name.full_name)
      setjob(data.name.job_title)
      setabout(data.name.about)
      console.log('Hi')
      setemail(data.contact.email)
      setphone(data.contact.phone)
      setaddress(data.contact.address)
      // console.log(data._education[0])
      seteducation(data.education)
      setexperience(data.work_experience)
      setskills(data.skills)
      console.log(name, education)
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    Resumedata()
  },[0])

  return (
    <>
    <div>
      <div className='template-main'>
        <div className='main-left'>
          <div className='left-element'>
            <img src='' className='profile-pic'/>
          </div>
          <div className='left-element'>
            <div className='left-element-head'>
              PROFILE
            </div>
            <div className='left-element-description'>
              {about}
            </div>
          </div>
          <div className='left-element'>
            <div className='left-element-head'>
              CONTACTS
            </div>
            <div className='left-element-description'>
              {phone}
            </div>
            <div className='left-element-description'>
              {address}
            </div>
            <div className='left-element-description'>
              {email}
            </div>
          </div>
        </div>
        <div className='main-right'>
          <div className='main-head'>
            {name.toUpperCase()}
          </div>
          <div className='main-head-desc'>
            {job}
          </div>
          <div className='right-element-head'>
            EDUCATION
          </div>
            {education.map(element =>{
              console.log(element)
              return(
              <div className='right-element-description'> 
              <b>{element.college} {element.year}</b>
              <br />
              {element.degree}
              </div>)
              })}
              <br /><br />
          <div className='right-element-head'>
            EMPLOYMENT
          </div>
            {experience.map(element =>{
              console.log(element)
              return(
              <div className='right-element-description'> 
              <b>{element.company_name} {element.duration }</b>&nbsp;&nbsp; | &nbsp;&nbsp;{element.job_title}
              <br />
              {element.description || element.year}
              </div>)
              })}<br /> <br />
              <div className='right-element-head'>
            SKILLS & EXPERTISE
          </div> 
            {skills.map(element =>{
              console.log(element)
              return(
              <div className='right-element-description'> 
              <b>---</b> {element}
              </div>)
              })}
              <br /><br />
        </div>
      </div>
       <div class="containerc">
    <div class="headerh">
      <div class="full-name">
        <span class="first-name">{name}</span> 
      </div>
      <div class="contact-info">
        <span class="email">Email: </span>
        <span class="email-val">{email}</span>
        <span class="separator"></span>
        <span class="phone">Phone: </span>
        <span class="phone-val">{phone}</span>
      </div>
      
      <div class="about">
        <span class="position">Front-End Developer </span>
        <span class="desc">
          {about}
        </span>
      </div>
    </div>
     <div class="details">
      <div class="section">
        <div class="section__title">Experience</div>
        <div class="section__list">
        {Array.isArray(experience)
        ? experience.map(item=>{
          return(
          <div class="section__list-item">
            <div class="temp1Left">
              <div class="name">{item.company_name}</div>
              <div class="addr">{item.job_title}</div>
              <div class="duration">{item.year}</div>
            </div>
            <div class="temp1Right">
              <div class="name">Fr developer</div>
              <div class="desc">did This and that</div>
            </div>
          </div>
          )
          })
        :null}
        </div>
      </div>
      <div class="section">
        <div class="section__title">Education</div>
        {Array.isArray(education)
        ? 
          education.map(item=>{
            return(
        <div class="section__list">
          <div class="section__list-item">
            <div class="temp1Left">
              <div class="name">{item.college}</div>
              <div class="addr">{item.degree}</div>
              <div class="duration">{item.year}</div>
            </div>
            <div class="temp1Right">
              <div class="name">Fr developer</div>
              <div class="desc">did This and that</div>
            </div>
          </div>
        </div>
            )
          })
          : null}
        
    </div>
       <div class="section">
        <div class="section__title">Projects</div> 
         <div class="section__list">
           <div class="section__list-item">
             <div class="name">DSP</div>
             <div class="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.</div>
           </div>
           
           <div class="section__list-item">
                      <div class="name">DSP</div>
             <div class="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. <a href="/login">link</a>
             </div>
           </div>
         </div>
      </div>
       <div class="section">
         <div class="section__title">Skills</div>
         <div class="skills">
         {Array.from(set).map((item, index) => {
        return (
           <div class="skills__item temp1Left name" key={index}>
               {item}
               </div>
               )
            })
          }
           </div>
         </div>
           
         </div>
       <div class="section">
       <div class="section__title">
         Interests
         </div>
         <div class="section__list">
           <div class="section__list-item">
                    Football, programming.
            </div>
         </div>
       </div>
       </div>
    </div> 
    </>

  )
}

export default Template
