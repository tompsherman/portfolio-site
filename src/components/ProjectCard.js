import React from 'react'
import styled from "styled-components"

const ProjectCard = (props) => {
    return (
        <StyledDiv>
            <div class="project-container">
            {props.data.map(project=>{
                return(
                   <>
                            <div class ="project">
                                <h2>{project.title}</h2>
                                <h3>{project.tagline}</h3>
                                <p>{project.description}</p>
                                <a href={project.url}>{project.url}</a>
                                <img src="#" alt="alt" />
                            </div>
                   </>
                )
            })}
            </div>
            
        </StyledDiv>
    )
}

const StyledDiv = styled.div`

    .project-container{
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    .project{
        width:50%;
        padding: 1%;
        margin: 1%;
        border: 1px solid black;
    }
`

export default ProjectCard
