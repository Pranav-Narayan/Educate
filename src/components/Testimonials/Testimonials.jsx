import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '/src/assets/next-icon.png'
import back_icon from '/src/assets/back-icon.png'
import user_1 from '/src/assets/user-1.png'
import user_2 from '/src/assets/user-2.png'
import user_3 from '/src/assets/user-3.png'
import user_4 from '/src/assets/user-4.png'

import { testimonialData } from '../../data/testimonialData'


function Testimonials() {

    const slider = useRef();

    let tx = 0;

    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const comp = testimonialData.map((testimonial)=>{
        <h3>{testimonial.name}</h3>
    })

  return (

    <div>
        {comp}
    </div>
    
    // <div className="testimonials container">
    //     <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
    //     <div className="slider">
    //         <ul ref={slider}>
    //                 {testimonialData.map((testimonials,i)=>{
    //                         <li key={i}>
    //                             <div className="slide">
    //                                 <div className="userinfo">
    //                                      <img src={testimonials.image} alt="" />
    //                                      <div>
    //                                         <h3>{testimonials.name}</h3>
    //                                         <span>{testimonials.place}</span>
    //                                      </div>
    //                                 </div>
    //                                 <p>{testimonials.review}</p>
    //                             </div>
    //                         </li>
    //                 })}
    //         </ul>
    //     </div>
    //     <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
    // </div>

    // <div className='testimonials container'>
    //     <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
    //     <div className="slider">
    //         <ul ref={slider}>
    //             <li>
    //                 <div className="slide">
    //                     <div className="userinfo">
    //                         <img src={user_1} alt="" />
    //                         <div>
    //                             <h3>Emily Williams</h3>
    //                             <span>Edusity, USA</span>
    //                         </div>
    //                     </div>
    //                     <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceed my expectations</p>
    //                 </div>
    //             </li>
    //             <li>
    //                 <div className="slide">
    //                     <div className="userinfo">
    //                         <img src={user_2} alt="" />
    //                         <div>
    //                             <h3>William Jackson</h3>
    //                             <span>Edusity, USA</span>
    //                         </div>
    //                     </div>
    //                     <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceed my expectations</p>
    //                 </div>
    //             </li>
    //             <li>
    //                 <div className="slide">
    //                     <div className="userinfo">
    //                         <img src={user_3} alt="" />
    //                         <div>
    //                             <h3>Emily Williams</h3>
    //                             <span>Edusity, USA</span>
    //                         </div>
    //                     </div>
    //                     <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceed my expectations</p>
    //                 </div>
    //             </li>
    //             <li>
    //                 <div className="slide">
    //                     <div className="userinfo">
    //                         <img src={user_4} alt="" />
    //                         <div>
    //                             <h3>William Jackson</h3>
    //                             <span>Edusity, USA</span>
    //                         </div>
    //                     </div>
    //                     <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceed my expectations</p>
    //                 </div>
    //             </li>
    //         </ul>
    //     </div>  
    //     <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
    // </div>
  )
}

export default Testimonials
