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

interface IPropsSkills {
    paddingTop: number;
}

const ICONS_SIZE:string = "5em";

const SkillsContainer = styled.section`
    padding-top: ${({ paddingTop }: IPropsSkills) => paddingTop + 30}px;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .descriptionContainer {
        position: fixed;
        width: 100%;
        height: 110%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.9);
        display: none;
        opacity: 0;
        transition: opacity ease 1s;
    }
    
    .iconContainer:hover ~ .iconContainer {
        margin: 50px 20px 50px 20px;
    }

    // Mobile CSS

    @media only screen and (max-width: 600px) {
        padding-top: ${({ paddingTop }: IPropsSkills) => paddingTop + 20}px;
        height: 100%;
        justify-content: center;
        position: relative;

        .iconContainer {
            padding-top: 10px;
            margin: 30px;
        }

        .iconContainer:hover {
            width: 84%;
            height: 500px;
        }

        .focus {
            border: 1px solid #f00;
            top: ${({ paddingTop }: IPropsSkills) => -paddingTop}x;
            position: absolute;
        }

        .iconContainer p {
            font-size: 18px;
            margin: 0px 50px 50px 50px;
        }
    }
`;

const IconContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8em;
    height: 8em;
    background-color: #ddd;
    border-radius: 5px;
    margin: 50px;
    text-decoration: none;
    transition: all ease 1s;
    color: #eee;

    &:hover {
        background-color: #333;
        flex-wrap: wrap;
        width: 20em;
        height: 27em;
        margin: 50px 0px 50px 0px;
        z-index: 2;
    }

    .hovered {
        margin: 50px 20px 50px 20px;
    }

    &:hover ~ .descriptionContainer {
        display: block;
        opacity: 1;
    }

    h1 {
        display: flex;
        align-items: center;
        color: #eee;
        width: 4em;
        height: 5em;
        position: absolute;
        opacity: 0;
    }

    &:hover > h1 {
        position: static;
        padding-left: 15px;
        width: 5em;
        border: 1px solid #f00;
        transition: all 0.5s ease-in 0.5s;
        opacity: 1; 
    }

    p {
        z-index: -1;
        position: absolute;
        opacity: 0;
        font-size: 18px;
        text-align: justify;
        margin: -10px 50px 50px 50px;
    }

    &:hover > p {
        z-index: 1;
        opacity: 1;
        position: static;
        transition: all 1s ease 0.6s;
    }
`;

interface IPropsIconContainer {
    id?: string;
    icon: JSX.Element;
    title: string;
    description: string;
}

const IconContainer = ({ icon, title, description }: IPropsIconContainer) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <IconContainerDiv onMouseEnter={() => setIsHovered(true)} className={isHovered ? "hovered" : ""}> 
            { icon }
            <h1>{ title }</h1>
            <p>{ description }</p>
        </IconContainerDiv>
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
                description="É a quinta versão da linguagem de marcação HTML (Hypertext Markup Language), utilizada para criar páginas web. Ela foi desenvolvida com o objetivo de oferecer novas funcionalidades para a web, tornando-a mais interativa e dinâmica."
            />
            <IconContainer
                icon={
                    <DiJavascript className="icon" size={ICONS_SIZE} />
                }
                title="Javascript"
                description="É a quinta versão da linguagem de marcação HTML (Hypertext Markup Language), utilizada para criar páginas web. Ela foi desenvolvida com o objetivo de oferecer novas funcionalidades para a web, tornando-a mais interativa e dinâmica."
            />
            <IconContainer
                icon={
                    <DiNodejs className="icon" size={ICONS_SIZE} />
                }
                title=""
                description="É a quinta versão da linguagem de marcação HTML (Hypertext Markup Language), utilizada para criar páginas web. Ela foi desenvolvida com o objetivo de oferecer novas funcionalidades para a web, tornando-a mais interativa e dinâmica."
            />
            <IconContainer
                icon={
                    <DiReact className="icon" size={ICONS_SIZE} />
                }
                title="ReactJS"
                description="É a quinta versão da linguagem de marcação HTML (Hypertext Markup Language), utilizada para criar páginas web. Ela foi desenvolvida com o objetivo de oferecer novas funcionalidades para a web, tornando-a mais interativa e dinâmica."
            />
            <IconContainer
                icon={
                    <SiStyledcomponents className="icon" size={ICONS_SIZE} />
                }
                title="Styled Components"
                description="É a quinta versão da linguagem de marcação HTML (Hypertext Markup Language), utilizada para criar páginas web. Ela foi desenvolvida com o objetivo de oferecer novas funcionalidades para a web, tornando-a mais interativa e dinâmica."
            />
            <IconContainer
                icon={
                    <SiTypescript className="icon" size={ICONS_SIZE} />
                }
                title="TypeScript"
                description="É a quinta versão da linguagem de marcação HTML (Hypertext Markup Language), utilizada para criar páginas web. Ela foi desenvolvida com o objetivo de oferecer novas funcionalidades para a web, tornando-a mais interativa e dinâmica."
            />
            <IconContainer
                icon={
                    <DiGitBranch className="icon" size={ICONS_SIZE} />
                }
                title="Git"
                description="É a quinta versão da linguagem de marcação HTML (Hypertext Markup Language), utilizada para criar páginas web. Ela foi desenvolvida com o objetivo de oferecer novas funcionalidades para a web, tornando-a mais interativa e dinâmica."
            />
            <IconContainer
                icon={
                    <DiGithubBadge className="icon" size={ICONS_SIZE} />
                }
                title="GitHub"
                description="É a quinta versão da linguagem de marcação HTML (Hypertext Markup Language), utilizada para criar páginas web. Ela foi desenvolvida com o objetivo de oferecer novas funcionalidades para a web, tornando-a mais interativa e dinâmica."
            />
            <div className="descriptionContainer"></div>
        </SkillsContainer>
    );
}

export default Skills;
