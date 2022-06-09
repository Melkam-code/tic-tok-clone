import React from 'react'
import './Video.css'

function Video() {
  return (
    <div className='video'>
        <h1>hi</h1>
      <video src="https://vm.tiktok.com/ZMNRNJoSP/?k=1"
      loop
      className='video_player'></video>

<video controls poster="https://placeimg.com/525/300/nature">

<source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />

</video>

      {/* video footer */}

      {/* video sidebar */}
      
    </div>
  )
}

export default Video