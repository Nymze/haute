import React from "react";
import logo from "./logo.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <a-scene>
        <a-assets>
          <a-asset-item id="tube" src=""></a-asset-item>
          <video
            id="blue"
            autoplay
            loop="true"
            src="/blue.mp4"
            autoplay
          ></video>
        </a-assets>

        <a-videosphere src="blue.mp4"></a-videosphere>
        <a-entity id="rig" position="0 0 0">
          <a-camera fov="30"></a-camera>
        </a-entity>
      </a-scene>
    </div>
  );
}

export default App;
