import React, { useEffect } from 'react'
import './Hero.css'
import darkarrow from '/src/assets/dark-arrow.png'
import {motion} from 'framer-motion'

const Hero = ({setexplore}) => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <motion.h1 
          initial={{opacity:0,scale:0}}
          whileInView={{
            opacity:1,
            scale:1,
            transition:{ease:'linear',duration:0.75,delay:0.25}}}
            >we ensure better education for a better world</motion.h1>

        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <motion.button className='btn'
              initial={{x:-100}}
              whileInView={{
                opacity:[0,0.3,0.7,1],
                x:0,
                transition:{ease:'linear',duration:1,delay:0.95}
              }}
              onClick={()=>{setexplore(true)}}
        >Explore more <img src={darkarrow} alt="" /></motion.button>
      </div>
    </div>
  )
}

export default Hero
