import React from 'react'
import './About.css'
import about_img from '/src/assets/about.jpg'
import play_icon from '/src/assets/play-icon.png'
import {motion} from 'framer-motion'

const About = ({setplay}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <motion.img 
              initial={{opacity:0,scale:0}}
              whileInView={{opacity:1,scale:1,transition:{ease:'linear',duration:0.2,delay:0.5}}}
            src={play_icon} alt="" className='play-icon'  onClick={()=>{
              setplay(true)
            }}/>
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tommorow's Leader Today</h2>
            <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculam is desinged to empower students with the knowledge, skills, and experiences need to excel in the dynamic field of education.</p>
            <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
            <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education</p>
        </div>
    </div>
  )
}

export default About
