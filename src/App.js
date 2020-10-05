import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";

import ProjectCard from "./components/ProjectCard";
// import Home from "./components/Home";

import projdata from "./data/projdata";
import webdata from "./data/webdata";
import journodata from "./data/journodata";
import comdata from "./data/comedata";
import Blog from "./components/Blog";

const App = () => {
  const history = useHistory();

  const routeToJourno = () => {
    history.push(`/journalist`);
  };
  const routeToWebDev = () => {
    history.push(`/webdev`);
  };
  const routeToProjects = () => {
    history.push(`/projects`);
  };
  const routeToComedy = () => {
    history.push(`/comedy`);
  };
  const routeToBlog = () => {
    history.push(`/blog`);
  };
  const routeToHome = () => {
    history.push(`/`);
  };

  return (
    <div className="App">
      <h1>Tom Sherman's portfolio page:</h1>
      <button onClick={routeToJourno}>Journalist</button>
      <button onClick={routeToWebDev}>WebDev</button>
      <button onClick={routeToProjects}>Projects</button>
      <button onClick={routeToComedy}>Comedy</button>
      <button onClick={routeToBlog}>Blog</button>
      <button onClick={routeToHome}>Home</button>
      <Switch>
        <Route path="/journalist">
          <ProjectCard projdata={journodata} />
        </Route>
        <Route path="/webdev">
          <ProjectCard projdata={webdata} />
        </Route>
        <Route path="/projects">
          <ProjectCard projdata={projdata} />
        </Route>
        <Route path="/comedy">
          <ProjectCard projdata={comdata} />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/">
          <div>
            <br></br>
            this is the home page
            <br></br>
            <br></br>
            <button onClick={routeToJourno}>Journalist</button>
            <button onClick={routeToWebDev}>WebDev</button>
            <button onClick={routeToProjects}>Projects</button>
            <button onClick={routeToBlog}>Blog</button>
            <button onClick={routeToHome}>Home</button>
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
