import React from "react";

import "./App.css";
import ProjectCard from "./components/ProjectCard";

import projdata from "./data/projdata";
import webdata from "./data/webdata";
import journodata from "./data/journodata";

const App = () => {
  return (
    <div className="App">
      <h1>Tom Sherman's portfolio page:</h1>
      <ProjectCard projdata={journodata} />
      <ProjectCard projdata={webdata} />
      <ProjectCard projdata={projdata} />
    </div>
  );
};

export default App;
