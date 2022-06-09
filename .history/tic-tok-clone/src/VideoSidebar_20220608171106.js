import React from 'react'
import './VideoSidebar.css'
import FavoriteIcon from "@mui/icons-material"

function VideoSidebar() {
  return (
    <div className='video_sidebar'>
      <div className="video_sidebar_button">
          <FavoriteIcon fontSize="large" />
      </div>
      <div className="video_sidebar_button"></div>
      <div className="video_sidebar_button"></div>
    </div>
  )
}

export default VideoSidebar