import React from "react";
import logo from "./logo.svg";
import hautemodel from "./modeles/hautetght.gltf";

import "./App.css";

function App() {
  return (
    <div className="App">
      <a-scene>
        <a-assets>
          <video
            id="blue"
            autoplay
            loop="true"
            src="https://res.cloudinary.com/dfzrepi27/video/upload/v1574260051/blue_ra7q4p.mov"
            autoplay
          ></video>
        </a-assets>

        <a-videosphere
          src="https://res.cloudinary.com/dfzrepi27/video/upload/v1574260051/blue_ra7q4p.mov"
          scale="0.005 0.005 0.005"
        ></a-videosphere>
        <a-light type="ambient" color="#222" intensity="10"></a-light>
        <a-entity id="rig" position="0 0 0">
          <a-camera fov="30"></a-camera>
        </a-entity>
      </a-scene>
    </div>
  );
}

export default App;
