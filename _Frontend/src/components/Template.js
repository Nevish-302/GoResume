import React, { useEffect, useState } from 'react'
import "./Template.css"

const Template = () => {
  const [name,setname]=useState("")
  const [email,setemail] = useState("")
  const [phone,setphone] = useState("")
  const [about,setabout] = useState("")
  const [education,seteducation] = useState("")
  const [experience,setexperience] = useState("")
  const [skills,setskills] = useState("")

  const set = new Set(skills)

  const Resumedata = async ()=>{
    try {
      const res = await fetch("/myresumedata",{
        method:"get",
        headers:{
          "Content-Type":"application/json",
        },  
      })
      const data = await res.json();
      console.log(data);
      setname(data[0]._name.full_name)
      setabout(data[0]._name.about)
      setemail(data[0]._contact.email)
      setphone(data[0]._contact.phone)
      // console.log(data[0]._education[0])
      seteducation(data[0]._education)
      setexperience(data[0]._work_experience)
      setskills(data[0]._skills)
      
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    Resumedata()
  },[])

  return (
    <>
    <div>
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
            <div class="left">
              <div class="name">{item.company_name}</div>
              <div class="addr">{item.job_title}</div>
              <div class="duration">{item.year}</div>
            </div>
            <div class="right">
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
            <div class="left">
              <div class="name">{item.college}</div>
              <div class="addr">{item.degree}</div>
              <div class="duration">{item.year}</div>
            </div>
            <div class="right">
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
           <div class="skills__item" key={index}>
             <div class="left">
              <div class="name">
               {item}
               </div>
               </div>
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
