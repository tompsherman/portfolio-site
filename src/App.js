import React from "react";

import "./App.css";
import ProjectCard from "./components/ProjectCard";
import projdata from "./components/projdata";
import WebDevCard from "./components/WebDevCard";
import webdata from "./components/webdata";

const App = () => {
  return (
    <div className="App">
      <h1>Tom Sherman's portfolio page:</h1>
      <WebDevCard webdata={webdata} />
      <ProjectCard projdata={projdata} />
    </div>
  );
};

export default App;
