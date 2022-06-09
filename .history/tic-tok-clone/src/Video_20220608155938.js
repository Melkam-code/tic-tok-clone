import React from 'react'
import './Video.css'

function Video() {
  return (
    <div className='video'>
        <video autoplay loop className='video_player'>
        <source src="https://www.tiktok.com/@16woldu/video/7106338942697344262?_r=1&u_code=e26a261b8i1hmb&preview_pb=0&language=en&_d=e08jhdmmm8i13f&share_item_id=7106338942697344262&source=h5_m&timestamp=1654693115&user_id=7106473516895208453&sec_user_id=MS4wLjABAAAA5QnDcOufEpIkQCpBpbIsKfcaUuirXE66lb0td4xDEtzTHyQP-gPv4jwdGUWm581p&utm_source=telegram&utm_campaign=client_share&utm_medium=android&share_iid=7106473680667363077&share_link_id=f1d6d006-57bc-4d1e-b9ca-68746f5bb9de&share_app_id=1233&ugbiz_name=Main" type="video/mp4"/>
        </video>

      {/* video footer */}

      {/* video sidebar */}
      
    </div>
  )
}

export default Video