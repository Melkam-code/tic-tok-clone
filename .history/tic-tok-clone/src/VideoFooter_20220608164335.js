import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';

function VideoFooter() {
  return (
    <div className='video_footer'>
     <div className="video_footer_text">
         <h3>@melkam</h3>
         <p>its me</p>
         <div className="video_footer_tic">
             <MusicNoteIcon className='video_footer_icon' />
             <Ticker>
                 {({ index }) => (
                     <>
                     <p>{song}</p>
                     </>
                 )}
             </Ticker>
         </div>
     </div>
    </div>
  )
}

export default VideoFooter