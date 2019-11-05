import React from "react";
import logo from "./logo.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <a-scene>
        <a-assets>
          <a-asset-item id="tube" src=""></a-asset-item>
        </a-assets>
        <a-entity
          scale="0.1 0.1 0.1 "
          gltf-model="url(/tube.gltf)"
          position="0 0 0"
          animation="property: position; to: 0 0 4000; dur: 30000; easing: linear"
        ></a-entity>
        <a-sky color="#ECECEC"></a-sky>
        <a-entity id="rig" position="0 0 0">
          <a-entity id="camera" camera></a-entity>
        </a-entity>
      </a-scene>
    </div>
  );
}

export default App;
