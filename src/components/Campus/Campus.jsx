import React from 'react'
import './Campus.css'
import gallery_1 from '/src/assets/gallery-1.jpg'
import gallery_2 from '/src/assets/gallery-2.jpg'
import gallery_3 from '/src/assets/gallery-3.jpg'
import gallery_4 from '/src/assets/gallery-4.jpg'
import white_arrow from '/src/assets/white-arrow.png'
import {motion} from 'framer-motion'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <motion.img 
                initial={{scale:0}}
                whileInView={{scale:1,transition:{duration:0.5,ease:'linear'}}}
            src={gallery_1} alt="" />
            <motion.img 
                  initial={{scale:0}}
                  whileInView={{scale:1,transition:{duration:0.5,ease:'linear'}}}
            src={gallery_2} alt="" />
            <motion.img 
                initial={{scale:0}}
                whileInView={{scale:1,transition:{duration:0.5,ease:'linear'}}}
            src={gallery_3} alt="" />
            <motion.img 
                initial={{scale:0}}
                whileInView={{scale:1,transition:{duration:0.5,ease:'linear'}}}
            src={gallery_4} alt="" />
        </div>
        <button className='btn' style={{backgroundColor:'blue',color:'white'}}>See More<img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
