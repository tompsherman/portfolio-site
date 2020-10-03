import React from "react";

import "./App.css";
import ProjectCard from "./components/ProjectCard";
import projdata from "./components/projdata";
import WebDevCard from "./components/WebDevCard";
import webdata from "./components/webdata";
import JournoCard from "./components/JournoCard";
import journodata from "./components/journodata";

const App = () => {
  return (
    <div className="App">
      <h1>Tom Sherman's portfolio page:</h1>
      <JournoCard journodata={journodata} />
      <WebDevCard webdata={webdata} />
      <ProjectCard projdata={projdata} />
    </div>
  );
};

export default App;
