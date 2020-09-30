import React from 'react'
import data from "./data"

const ProjectCard = (props) => {
    return (
        <div>
            {props.data.map(project=>{
                return(
                   <>
                        <h2>{project.title}</h2>
                        <h3>{project.tagline}</h3>
                        <p>{project.description}</p>
                        <a href={project.link}>{project.link}</a>
                        <img src="#" alt="alt" />
                   </>
                )
            })}
            
        </div>
    )
}

export default ProjectCard
