import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';

function VideoFooter({ channel, description, song }) {
  return (
    <div className='video_footer'>
     <div className="video_footer_text">
         <h3>@{channel}</h3>
         <p>{description}</p>
         <div className="video_footer_tic">
             <MusicNoteIcon className='video_footer_icon' />
             <Ticker mode="smooth">
                 {({ index }) => (
                     <>
                     <p>{song}</p>
                     </>
                 )}
             </Ticker>
         </div>
     </div>
     <img
      className='video_footer_record'
      src="https://static.thenounproject.com/png/934821-200.png"
      alt=""
      />
    </div>
  )
}

export default VideoFooter