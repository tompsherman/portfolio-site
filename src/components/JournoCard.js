import React from "react";
import styled from "styled-components";

const JournoCard = (props) => {
  return (
    <StyledDiv>
      <div class="journo-container">
        {props.journodata.map((project) => {
          return (
            <>
              <div class="project">
                <h2>{project.title}</h2>
                <h3>{project.tagline}</h3>
                <p>{project.description}</p>
                <a href={project.url}>{project.title} website</a>
                <br></br>
                <img src="#" alt="alt" />
              </div>
            </>
          );
        })}
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  * {
    border: 1px solid red;
  }
  .journo-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    height: 50vh;
  }
  .project {
    width: 25%;
    padding: 1%;
    margin: 1%;
    border: 1px solid black;
  }
`;

export default JournoCard;
