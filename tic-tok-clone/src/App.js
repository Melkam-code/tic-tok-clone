import "./App.css";
import Video from "./Video";
import React, { useEffect, useState } from 'react'
import axios from './axios'

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts(){
      const response = await axios.get('/v2/posts');
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  }, []);

  console.log("VIDEOS", videos);

  return (
    <div className="app">
      <div className="app_videos">
        {videos.map((video) => 
         <Video key={video.id} url={video.url} likes={video.likes} shares={video.shares} messages={video.messages}
         channel={video.channel} description={video.description} song={video.song} />
         )}
      </div>
    </div>
  );
}

export default App;
