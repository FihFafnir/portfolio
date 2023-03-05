import React, { useState } from "react";
import Description from "./Description";
import Slider from "./Slider";
import ProjectsContainer from "./styles";

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
