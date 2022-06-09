import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, likes, messages, shares, channel, description, song }) {
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
        <video autoPlay loop 
        onClick={handleVideoPress}
        ref={videoRef}
        className='video_player'>
        <source src={url} type="video/mp4"/>
        </video>

      {/* video footer */}
      <VideoFooter channel={channel} description={description} song={song} />

      {/* video sidebar */}
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
      
    </div>
  )
}

export default Video