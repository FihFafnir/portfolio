import React from "react";
import styled from "styled-components";
import { IProject } from "../Projects";

interface IDescriptionProps {
    index: number;
    projects: IProject[];
}

const DescriptionContainer = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    border: 1px solid #f00;
    font-size: 1.6px;

    h1 {
        margin-bottom: 15px;
        font-size: 20em;
    }

    p {
        display: flex;
        align-items: center;
        height: 30%;
        font-size: 10em;
    }

    a {
        margin-top: 30px;
        width: fit-content;
        border-radius: 20px;
        padding: 10px 15px 10px 15px;
        background-color: #111;
        color: #eee;
        text-decoration: none;
    }

    @media screen and (max-width: 1024px) {
        p {
            height: 40%;
        }
    }

    // Tablet CSS

    @media screen and (max-width: 768px) {
        width: 60%;

        p {
            height: 32%;
        }
    }

    // Mobile CSS

    @media screen and (max-width: 600px) {
        width: 80%;
        height: 40%;
        border: 1px solid #000;
        align-items: center;
        text-align: center;

        h1 {
            margin-bottom: 30px;
        }

        p {
            height: fit-content;
        }
    }
`;

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
