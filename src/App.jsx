import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Videoplayer from './components/Videoplayer/Videoplayer'
import Explore from './components/Explore/Explore'

function App() {

  const [play ,setPlay] = useState(false)
  const [explore, setExplore] = useState(false)

  return (
    <>
      <Navbar/>
      <Hero setexplore={setExplore}/>
      <div className="container">
          <Title para={'Our program'} h2={'What we offer'}/>
          <Programs/>
      </div>
      <About setplay={setPlay}/>
      <Title para={'gallery'} h2={'Campus Photos'}/>
      <Campus/>
      <Title para={'Testimonials'} h2={'What Student Says'}/>
      <Testimonials/>
      <Title para={'contact us'} h2={'Get In Touch'}/>
      <Contact/>
      <Footer/>
      <Videoplayer play={play} setplay={setPlay}/>
      <Explore explore={explore} setexplore={setExplore}/>
    </>
  )
}

export default App
