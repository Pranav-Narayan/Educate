import React from 'react'
import './Programs.css'
import program_1 from '/src/assets/program-1.jpg'
import program_2 from '/src/assets/program-2.jpg'
import program_3 from '/src/assets/program-3.jpg'
import program_icon1 from '/src/assets/program-icon-1.png'
import program_icon2 from '/src/assets/program-icon-2.png'
import program_icon3 from '/src/assets/program-icon-3.png'
import {motion} from 'framer-motion'

const Programs = () => {
  return (
    <div className='programs'>
        <motion.div 
                initial={{opacity:0.5,scale:0}}
                whileInView={{
                    opacity:1,
                    scale:1,
                    transition:{ease:'linear',duration:0.5,delay:0.25}
                  }}
        className="program">
            <img src={program_1} alt="" />
            <div className="caption">
                <img src={program_icon1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </motion.div>
        <motion.div 
            initial={{opacity:0.5,scale:0}}
            whileInView={{
                opacity:1,
                scale:1,
                transition:{ease:'linear',duration:0.5,delay:0.45}
              }}
        className="program">
            <img src={program_2} alt="" />
            <div className="caption">
                <img src={program_icon2} alt="" />
                <p>Master Degree</p>
            </div>
        </motion.div>
        <motion.div 
            initial={{opacity:0.5,scale:0}}
            whileInView={{
                opacity:1,
                scale:1,
                transition:{ease:'linear',duration:0.5,delay:0.65}
              }}
        className="program">
            <img src={program_3} alt="" />
            <div className="caption">
                <img src={program_icon3} alt="" />
                <p>Post Graduation</p>
            </div>
        </motion.div>
    </div>
  )
}

export default Programs
