import React, { useState } from "react";
import styled from "styled-components";
import {
    GrFormPrevious,
    GrFormNext
} from "react-icons/gr";

interface IProjectsContainerProps {
    index: number;
}

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

    .projects--description {
        padding: 30px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 30%;
    }

    .projects--description h1 {
        margin-bottom: 15px;
    }

    .projects--description p {
        display: flex;
        align-items: center;
        height: 50%;
    }

    .projects--description a {
        margin-top: 30px;
        width: fit-content;
        border-radius: 20px;
        padding: 10px 15px 10px 15px;
        background-color: #111;
        color: #eee;
        text-decoration: none;
    }

    .projects--slider {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        width: 100%;
        overflow: hidden;
    }

    .projects--box {
        display: flex;
        position: absolute;
        top: 50%;
        left: 0;
        height: 120px;
        justify-content: space-between;
        background-color: #fff;
        width: 280px;
        height: 120px;
        padding: 20px;
        border-radius: 10px;
        transform: translate(350px, -60%);
        transition: transform ease 1s;
    }

    .projects--box:nth-child(${({ index }: IProjectsContainerProps) => index + 1}) {
        opacity: 1;
        transform: translate(0, -60%);
    }

    .projects--box h1 {
        font-size: 20px;
        width: 80%;
    }

    .projects--box .iconContainer {
        margin-top: 20px;
        background-color: #000;
        border-radius: 50%;
        width: 32px;
        height: 32px;
    }

    .projects--slider .controller {
        display: flex;
        justify-content: space-between;
        align-items: end;
        padding-bottom: 50px;
        width: 280px;
        height: 30%;
    }

    .projects--slider .controller button {
        border: none;
        cursor: pointer;
    }

    .projects--slider .controller span {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 32px;
    }

    // Tablet CSS

    @media screen and (max-width: 768px) {
        .projects--description {
            width: 60%;
        }

        .projects--description p {
            height: 40%;
        }

        .projects--box {
            width: 200px;
            transform: translate(280px, -60%);
        }
    }

    // Mobile CSS

    @media screen and (max-width: 600px) {
        .projects--content {
            height: 80vh;
            flex-direction: column;
            align-items: center;
        }

        .projects--description {
            width: 80%;
            align-items: center;
            text-align: center;
        }

        .projects--description h1 {
            margin-bottom: 30px;
        }

        .projects--slider {
            width: 100%;
            height: 50%;
            margin: 0;
        }

        .projects--box {
            top: 0;
            left: 50%;
            width: 80%;
            height: 170px;
            transform: translateX(100vw);
        }

        .projects--box:nth-child(${({ index }: IProjectsContainerProps) => index + 1}) {
            transform: translateX(-50%);
        }

    }
`;

const Projects = () => {
    interface IProject {
        title: string;
        description: string;
        link: string;
    }

    const projects: IProject[] = [
        {
            title: "Solution Preparation Calculator in React and TS",
            description: "This web application shortens the chemist's work by making the calculation for the preparation of a solution through the calculations of concentration, purity - and if the target solution is liquid - density.",
            link: "https://github.com/FihFafnir/SPC-in-react-and-ts"
        },
        {
            title: "Solution Preparation Calculator in React and TS",
            description: "Esta aplicação web simplifica o trabalho do químico ao fazer o cálculo para a preparação de uma solução através dos cálculos de concentração, pureza - e se a solução alvo for líquida - densidade.",
            link: "https://github.com/FihFafnir/SPC-in-react-and-ts"
        }
    ];

    const [index, setIndex] = useState(0);

    const indexHandler = (option: string) => {
        if(option === "previous" && index > 0) {
            setIndex(index - 1);
        }

        if(option === "next" && index < projects.length - 1) {
            setIndex(index + 1)
        }
    }


    return (
        <ProjectsContainer id="projects" index={index}>
            <div className="projects--content">
                <div className="projects--description">
                    <h1>Projetos</h1>
                    <p>{projects[index].description}</p>
                    <a href={projects[index].link} target="_blank">Ver Mais</a>
                </div>
                <div className="projects--slider">
                    <div className="projects--list">
                        <div className="projects--box">
                            <h1>{projects[index].title}</h1>
                            <div className="iconContainer"></div>
                        </div>
                        <div className="projects--box">
                            <h1>TESTETETTTE</h1>
                            <div className="iconContainer"></div>
                        </div>
                    </div>
                    <div className="controller">
                        <button onClick={() => indexHandler("previous")}>
                            <GrFormPrevious size="32px" />
                        </button>
                        <span>{index + 1}/{projects.length}</span>
                        <button onClick={() => indexHandler("next")}>
                            <GrFormNext size="32px" />
                        </button>
                    </div>
                </div>
            </div>
        </ProjectsContainer>
    )
}

export default Projects;
