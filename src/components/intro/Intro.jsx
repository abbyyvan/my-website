import { useEffect, useRef } from 'react'
import './intro.css'
import {init} from 'ityped'

export default function Intro() {

  const textRef = useRef()
  useEffect(()=>{
    init(textRef.current, 
      { showCursor: true, 
        typeSpeed:  100,
        startDelay: 500,
        backSpeed:  60,
        backDelay:  1500,
        strings: ["Developer", "Designer","Content Creator" ] })
  },[])
  return (
    <div className='intro' id='intro'>
      <div className="left-intro">
        {/* <div className="imageContainer">
          <img src="assets/man.png" alt="" />
        </div> */}
      </div>
      <div className="right-intro">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Abby Yuan</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
     
    </div>
  )
}
