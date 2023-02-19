import React from "react";
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

interface IPropsSkills {
    paddingTop: number;
}

const ICONS_SIZE:string = "5em";

const SkillsContainer = styled.section`
    padding-top: ${({ paddingTop }: IPropsSkills) => paddingTop + 30}px;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .iconContainer {
        border: 1px solid #000;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 8em;
        height: 8em;
        background-color: #ddd;
        border-radius: 5px;
        margin: 30px;
    }

    .descriptionContainer {
        position: fixed;
        width: 100%;
        height: 110%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.9);
        display: none;
    }

    .iconContainer:hover ~ .descriptionContainer {
        display: block;
    }

    .iconContainer:hover {
        position: fixed;
        top: ${({ paddingTop }) => paddingTop}px;
        order: -1;
        color: #eee;
        background-color: #222;
        justify-content: space-evenly;
        padding-top: 40px;
        flex-wrap: wrap;
        width: 80%;
        height: 80%;
        z-index: 2;
    }

    .iconContainer h1 {
        color: #eee;
        width: 5em;
        height: 5em;
        display: none;
    }

    .iconContainer:hover > h1 {
        display: flex;
        align-items: center;
    }

    .iconContainer p {
        z-index: -1;
        position: absolute;
        opacity: 0;
        font-size: 20px;
        text-align: justify;
        margin: 35px 50px 50px 50px;
    }

    .iconContainer:hover > p {
        z-index: 1;
        opacity: 1;
        position: static;
        height: 100%;
    }

    // Mobile CSS

    @media only screen and (max-width: 600px) {
        padding-top: ${({ paddingTop }: IPropsSkills) => paddingTop + 20}px;
        height: 100%;
        justify-content: center;
        position: relative;

        .iconContainer {
            transition: width ease 0.5s;
            padding-top: 10px;
            margin: 30px;
        }

        .iconContainer:hover {
            width: 80%;
            height: 80%;
        }

        .iconContainer p {
            font-size: 18px;
            margin: 0px 50px 50px 50px;
        }
    }
`;

interface IPropsIconContainer {
    icon: JSX.Element;
    title: string;
    description: string;
}

const IconContainer = ({ icon, title, description }: IPropsIconContainer) => {
    return (
        <div
            className="iconContainer"
        >
            { icon }
            <h1>{ title }</h1>
            <p>{ description }</p>
        </div>
    );
}

const Skills = ({ paddingTop }: IPropsSkills) => {
    return (
        <SkillsContainer id="skills" paddingTop={paddingTop}>
            <IconContainer
                icon={
                    <DiHtml5
                        className="icon"
                        color="FF5722"
                        size={ICONS_SIZE}
                    />
                }
                title="HTML 5"
                description="É a quinta versão da linguagem de marcação HTML (Hypertext Markup Language), utilizada para criar páginas web. Ela foi desenvolvida com o objetivo de oferecer novas funcionalidades para a web, tornando-a mais interativa e dinâmica."
            />
            <IconContainer
                icon={
                    <DiCss3
                        className="icon"
                        color="2196F3"
                        size={ICONS_SIZE}
                    />
                }
                title="CSS 3"
                description=""
            />
            <IconContainer
                icon={
                    <DiJavascript className="icon" size={ICONS_SIZE} />
                }
                title="Javascript"
                description=""
            />
            <IconContainer
                icon={
                    <DiNodejs className="icon" size={ICONS_SIZE} />
                }
                title="NodeJS"
                description=""
            />
            <IconContainer
                icon={
                    <DiReact className="icon" size={ICONS_SIZE} />
                }
                title="ReactJS"
                description=""
            />
            <IconContainer
                icon={
                    <SiStyledcomponents className="icon" size={ICONS_SIZE} />
                }
                title="Styled Components"
                description=""
            />
            <IconContainer
                icon={
                    <SiTypescript className="icon" size={ICONS_SIZE} />
                }
                title="TypeScript"
                description=""
            />
            <IconContainer
                icon={
                    <DiGitBranch className="icon" size={ICONS_SIZE} />
                }
                title="Git"
                description=""
            />
            <IconContainer
                icon={
                    <DiGithubBadge className="icon" size={ICONS_SIZE} />
                }
                title="GitHub"
                description=""
            />
            <div className="descriptionContainer"></div>
        </SkillsContainer>
    );
}

export default Skills;
