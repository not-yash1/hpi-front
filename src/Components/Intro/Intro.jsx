import React, { useEffect, useRef, useState } from 'react'
import './Intro.css'
import logo from '../../images/logoTop.png'
import vid from '../../images/vid.mp4'
import { RxSpeakerOff } from "react-icons/rx";
import { RxSpeakerLoud } from "react-icons/rx";

const Intro = () => {

    const vidRef = useRef(null)

    const [volume, setVolume] = useState(false);
    const styles = {
        height: '100%',
        width: '100%',
        background: 'none',
        color: '#F7F7F7',
    }

    useEffect(() => {
        if(vidRef.current) {
            vidRef.current.volume = volume ? 1 : 0
        }
    }, [volume])

  return (
    <div className='intro-container'>
        <img src={logo} alt="Logo" />
        <video ref={vidRef} src={vid} autoPlay playsInline muted={!volume} loop alt="Intro Video">Your browser does not support the video tag</video>
        <button onClick={() => setVolume(!volume)}>
            {volume ? <RxSpeakerLoud style={styles}/> : <RxSpeakerOff style={styles}/>}
        </button>
    </div>
  )
}

export default Intro
