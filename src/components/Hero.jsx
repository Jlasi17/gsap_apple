import { useEffect, useRef } from "react"

const Hero = () => {
    const vidref = useRef();
    useEffect(()=>{
        if(vidref.current) vidref.current.playbackRate=3;
    },[])
  return (
    <section id='hero'>
        <div>
            <h1>Mac Book Pro</h1>
            <img src='/title.png' alt='title'></img>
        </div>
        <video ref ={vidref} src='/videos/hero.mp4' autoPlay muted playsInline></video>
        <button>Buy</button>
        <p>From £1000 or £120/mo for 12 months</p>
    </section>

  )
}

export default Hero
