import React, { useRef } from 'react'
import './Videoplayer.css'
import video_file from '/src/assets/college.mp4'

function Videoplayer({play,setplay}) {
    const player = useRef(null)

    const closePlayer = (e)=>{
        if(e.target==player.current){
            setplay(false)
        }
    }

  return (
    <div className={`videoplayer ${play? '' : 'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video_file} autoPlay controls></video>
    </div>
  )
}

export default Videoplayer
