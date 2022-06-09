import React from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@mui/icons-material/FavoriteIcon';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/ShareIcon';


function VideoSidebar() {
  return (
    <div className='video_sidebar'>
      <div className="video_sidebar_button">
          <FavoriteIcon fontSize="large" />
      </div>
      <div className="video_sidebar_button">
          <MessageIcon fontSize="large" />
      </div>
      <div className="video_sidebar_button">
          <ShareIcon fontSize="large" />
      </div>
    </div>
  )
}

export default VideoSidebar