import React, { useRef } from 'react'
import './Video.css'

function Video() {
  const videoRef = useRef(null);

  return (
    <div className='video'>
        <video autoplay loop 
        ref={videoRef}
        className='video_player'>
        <source src="https://v16-webapp.tiktok.com/64427e93d5f56fce5a7d87943c5a9b9c/62a0f273/video/tos/useast2a/tos-useast2a-pve-0068/16369cb46ed84b0382a349a7b2f1ed2d/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1004&bt=502&btag=80000&cs=0&ds=3&ft=eXd.6HQSMyq8ZS3sawe2NwDoyl7Gb&mime_type=video_mp4&qs=0&rc=NDo2OGY0OmRoZWc2ZmU2M0BpamhrNWU6ZnFmZDMzNzczM0BfMGJiNWEtNTExLWBhMjM1YSMuNXExcjQwZmNgLS1kMTZzcw%3D%3D&l=2022060813003901021713420608294037" type="video/mp4"/>
        </video>

      {/* video footer */}

      {/* video sidebar */}
      
    </div>
  )
}

export default Video