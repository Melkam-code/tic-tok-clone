import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleVideoPress = () => {
    //if video is playing stop it 
     if(playing) {
       videoRef.current.pause();
       setPlaying(false);
     } else {
       videoRef.current.play();
       setPlaying(true);
     }
    //otherwise play it
  }

  return (
    <div className='video'>
        <video autoplay loop 
        onClick={handleVideoPress}
        ref={videoRef}
        className='video_player'>
        <source src="https://v16-webapp.tiktok.com/c6cd9f606f4de2d8d8a63051bde05b7e/62a0fe1b/video/tos/useast2a/tos-useast2a-pve-0068/d303534524e141deb8d9a3e2fc584f9a/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2634&bt=1317&btag=80000&cs=0&ds=3&ft=eXd.6HQSMyq8ZK_uawe2NTPjyl7Gb&mime_type=video_mp4&qs=0&rc=ZTM7aTc1NzxlZ2ZnODo8aUBpM3ZtajY6ZnY3ZDMzNzczM0AvLjBeMTIxXjQxMjJhY2BeYSNqLWxzcjQwYGNgLS1kMTZzcw%3D%3D&l=202206081352500101890900661F2FA3C4" type="video/mp4"/>
        </video>

      {/* video footer */}
      <VideoFooter />

      {/* video sidebar */}
      <VideoSidebar />
      
    </div>
  )
}

export default Video