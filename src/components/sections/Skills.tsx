import React, { useState } from "react";
import styled from "styled-components";
import {
    DiHtml5,
    DiCss3,
    DiJavascript,
    DiReact,
    DiNodejs,
    DiGit,
    DiGithubBadge
} from "react-icons/di";
import { SiTypescript, SiStyledcomponents } from "react-icons/si";

const ICON_SIZE:number = 4;

interface ISkillsContainerProps {
    screenWidth: number;
}

const SkillsContainer = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;

    .skillsContent {
        display: flex;
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
    }

    .iconContainer {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        background-color: #ddd;
        width: 16%;
        height: ${({ screenWidth }: ISkillsContainerProps) => screenWidth * 0.16}px;
        margin: -15px -10px 15px -10px;
        transform: scale(.60);
        transition: all ease 1s;
        border-radius: 5px;
        z-index: 1;
    }

    .iconContainer:hover {
        background-color: #333;
        transform: scale(1);
        height: 300px;
        color: #eee;
        box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
        z-index: 3;
    }

    .icon {
        size: 4em;
        transition: transform ease 1s;
    }

    .iconContainer:hover > .icon {
        transform: translateY(-90px);
    }

    .iconContent {
        position: absolute;
        width: 100%;
        height: 0;
        transition: all ease 1s;
    }

    .darkBackground {
        position: fixed;
        top: 0;
        left: 0;
        border: 1px solid #f00;
        background-color: rgba(0,0,0,.5);
        opacity: 0;
        width: 100%;
        height: 130%;
        z-index: 0;
        transition: opacity ease 1s;
    }

    .iconContainer:hover ~ .darkBackground {
        opacity: 1:
        z-index: 1;
    }

    // Laptop CSS

    @media only screen and (max-width: 992px) {
        .iconContainer {
            width: 25%;
            height: ${({ screenWidth }: ISkillsContainerProps) => screenWidth*0.25}px;
        }
    }

    // Tablet CSS

    @media only screen and (max-width: 768px) {
        height: 100%;
        padding-top: 120px;

        .iconContainer {
            width: 33%;
            height: ${({ screenWidth }: ISkillsContainerProps) => screenWidth*0.33}px;
        }
    }

    // Mobile CSS

    @media only screen and (max-width: 600px) {
        .iconContainer {
            height: ${({ screenWidth }: ISkillsContainerProps) => screenWidth*0.5}px;
        }
    }
`;

const Skills = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    window.addEventListener("resize", () => {
        const newScreenWidth: number = window.innerWidth;

        setScreenWidth(newScreenWidth);
    });

    return (
        <SkillsContainer id="skills" screenWidth={screenWidth}>
            <div className="skillsContent">
                <div className="iconContainer">
                    <DiHtml5
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="FF5722"
                    />
                    <p className="iconContent"></p>
                </div>
                <div className="iconContainer">
                    <DiCss3
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="2196F3"
                    />
                    <p className="iconContent"></p>
                </div>
                <div className="iconContainer">
                    <DiJavascript
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="EDBB36"
                    />
                    <p className="iconContent"></p>
                </div>
                <div className="iconContainer">
                    <SiTypescript
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="3178C6"
                    />
                    <p className="iconContent"></p>
                </div>
                <div className="iconContainer">
                    <DiReact
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="61DBFB"
                    />
                    <p className="iconContent"></p>
                </div>
                <div className="iconContainer">
                    <SiStyledcomponents
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="DE778F"
                    />
                    <p className="iconContent"></p>
                </div>
                <div className="iconContainer">
                    <DiNodejs
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="66A060"
                    />
                    <p className="iconContent"></p>
                </div>
                <div className="iconContainer">
                    <DiGit
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="F05033"
                    />
                    <p className="iconContent"></p>
                </div>
                <div className="iconContainer">
                    <DiGithubBadge
                        className="icon"
                        size={ICON_SIZE + "em"}
                    />
                    <p className="iconContent"></p>
                </div>
                <div className="darkBackground" ></div>
            </div>
        </SkillsContainer>
    );
}

export default Skills;
