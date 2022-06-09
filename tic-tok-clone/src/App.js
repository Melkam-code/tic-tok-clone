import "./App.css";
import Video from "./Video";
import React, { useState } from 'react'

function App() {
  const [likes, setLikes] = useState(220);
  const [shares, setShares] = useState(31);
  const [messages, setMessages] = useState(130);
  const [channel, setChannel] = useState("melkammekonnen");
  const [description, setDescription] = useState("WOW Epic MERN Stack TikTok Clone");
  const [song, setSong] = useState("I am in love with MERN");
  const [url, setUrl] = useState("https://v16-webapp.tiktok.com/14c02f65ecb24c42983798d16bfd8aae/62a1eba6/video/tos/useast2a/tos-useast2a-ve-0068c002/9d912473b22047c88ab296e55ca5d34a/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=924&bt=462&btag=80000&cs=0&ds=3&ft=eXd.6HQSMyq8ZfN_awe2NiS0yl7Gb&mime_type=video_mp4&qs=0&rc=Zjc0aGhmNjc8OWRoNjs0NEBpamQ3bmc6Zmd0PDMzNzczM0BfX2E1NGNfNmAxXmNfLjBeYSNsXzQvcjQwLTVgLS1kMTZzcw%3D%3D&l=202206090645280101901860291B099013");

  return (
    <div className="app">
      <div className="app_videos">
        <Video url={url} likes={likes} shares={shares} messages={messages}
        channel={channel} description={description} song={song} />
      </div>
      {/* App container */}
      {/* Videos */}
    </div>
  );
}

export default App;
