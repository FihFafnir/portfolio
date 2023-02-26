import React, { useState } from "react";
import styled from "styled-components";
import Description from "./Description";
import Slider from "./Slider";

const ProjectsContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .projects--content {
        display: flex;
        width: 90%;
        height: 60vh;
        background-color: #ededed;
        border-radius: 15px;
    }

    // Mobile CSS

    @media screen and (max-width: 600px) {
        .projects--content {
            height: 80vh;
            flex-direction: column;
            align-items: center;
        }
    }
`;

export interface IProject {
    title: string;
    description: string;
    link: string;
}

const Projects = () => {
    const projects: IProject[] = [
        {
            title: "Solution Preparation Calculator in React and TS",
            description:
                "This web application shortens the chemist's work by making the calculation for the preparation of a solution through the calculations of concentration, purity - and if the target solution is liquid - density.",
            link: "https://github.com/FihFafnir/SPC-in-react-and-ts"
        },
        {
            title: "Em Breve...",
            description: "",
            link: "https://github.com/FihFafnir/"
        }
    ];

    const [index, setIndex] = useState(0);

    const indexHandler = (option: string) => {
        if (option === "previous" && index > 0) {
            setIndex(index - 1);
        }

        if (option === "next" && index < projects.length - 1) {
            setIndex(index + 1);
        }
    };

    return (
        <ProjectsContainer id="projects">
            <div className="projects--content">
                <Description index={index} projects={projects} />
                <Slider
                    index={index}
                    indexHandler={indexHandler}
                    projects={projects}
                />
            </div>
        </ProjectsContainer>
    );
};

export default Projects;
