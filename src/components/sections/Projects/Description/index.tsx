import React from "react";
import { IProject } from "../../Projects";
import DescriptionContainer from "./styles"

interface IDescriptionProps {
    index: number;
    projects: IProject[];
}

const Description = ({ index, projects }: IDescriptionProps) => {
    return (
        <DescriptionContainer className="projects--description">
            <h1>Projetos</h1>
            <p>{projects[index].description}</p>
            <a
                href={projects[index].link}
                target="_blank"
                rel="noreferrer noopener"
            >
                Ver Mais
            </a>

        </DescriptionContainer>
    );
};

export default Description;
