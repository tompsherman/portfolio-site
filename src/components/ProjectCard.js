import React from 'react'

const ProjectCard = (props) => {
    return (
        <div>
            {props.data.map(project=>{
                return(
                   <>
                        <h2>{project.title}</h2>
                        <h3>{project.tagline}</h3>
                        <p>{project.description}</p>
                        <a href={project.url}>{project.url}</a>
                        <img src="#" alt="alt" />
                   </>
                )
            })}
            
        </div>
    )
}

export default ProjectCard
