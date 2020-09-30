import React from 'react'

import './App.css'
import ProjectCard from './components/ProjectCard'
import data from "./components/data"

const App = () => {
  return (
    <div className="App">
      <h1>Tom Sherman's portfolio page:</h1>
      <ProjectCard data={data}/>
    </div>
  )
}

export default App