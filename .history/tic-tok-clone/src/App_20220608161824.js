import "./App.css";
import Video from "./Video";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function App() {
  return (
    <div className="app">
      <div className="app_videos">
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
