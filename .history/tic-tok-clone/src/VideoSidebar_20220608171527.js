import React from 'react'
import './VideoSidebar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';


function VideoSidebar() {
  return (
    <div className='video_sidebar'>
      <div className="video_sidebar_button">
          <FavoriteBorderIcon fontSize="large" />
      </div>
      <div className="video_sidebar_button">
          <MessageIcon fontSize="large" />
      </div>
      <div className="video_sidebar_button">
          <SendIcon fontSize="large" />
      </div>
    </div>
  )
}

export default VideoSidebar