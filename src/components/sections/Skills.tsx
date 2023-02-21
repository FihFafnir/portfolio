import React, { useState } from "react";
import styled from "styled-components";
import {
    DiHtml5,
    DiCss3,
    DiJavascript,
    DiReact,
    DiNodejs,
    DiGitBranch,
    DiGithubBadge
} from "react-icons/di";
import { SiTypescript, SiStyledcomponents } from "react-icons/si";

const ICON_SIZE:number = 4;

const SkillsContainer = styled.section`
    height: 100%;
    display: flex;
    align-items: center;
    padding-top: 120px;
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
        width: 50%;
        height: 200px;
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
`;

const Skills = () => {
    return (
        <SkillsContainer id="skills">
            <div className="skillsContent">
                <div className="iconContainer">
                    <DiHtml5 
                        className="icon" 
                        size={ICON_SIZE + "em"}
                    />
                    <p className="iconContent"></p>
                </div>
                <div className="iconContainer">
                    <DiCss3 
                        className="icon" 
                        size={ICON_SIZE + "em"}
                    />
                    <p className="iconContent"></p>
                </div>
                <div className="iconContainer">
                    <DiJavascript 
                        className="icon"
                        size={ICON_SIZE + "em"}
                    />
                    <p className="iconContent"></p>
                </div>
                <div className="iconContainer">
                    <SiTypescript 
                        className="icon"
                        size={ICON_SIZE + "em"}
                    />
                    <p className="iconContent"></p>
                </div>
                <div className="iconContainer">
                    <DiReact 
                        className="icon" 
                        size={ICON_SIZE + "em"}
                    />
                    <p className="iconContent"></p>
                </div>
                <div className="iconContainer">
                    <SiStyledcomponents 
                        className="icon"
                        size={ICON_SIZE + "em"}
                    />
                    <p className="iconContent"></p>
                </div>
                <div className="iconContainer">
                    <DiNodejs 
                        className="icon"
                        size={ICON_SIZE + "em"}
                    />
                    <p className="iconContent"></p>
                </div>
                <div className="iconContainer">
                    <DiGitBranch 
                        className="icon"
                        size={ICON_SIZE + "em"}
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
