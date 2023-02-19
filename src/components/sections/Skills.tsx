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

    .iconContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 8em;
        height: 8em;
        background-color: #ddd;
        border-radius: 5px;
        margin: 10px;
    }

    // Mobile CSS

    @media only screen and (max-width: 600px) {
        padding-top: ${({ paddingTop }: IPropsSkills) => paddingTop + 20}px;
        height: 100%;
        justify-content: center;
        flex-wrap: wrap;
        position: relative;

        .descriptionContainer {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: rgba(0,0,0,.9);
            display: none;
        }

        .iconContainer:hover ~ .descriptionContainer {
            display: block;
        }

        .iconContainer {
            margin: 20px;
            transition: all ease 0.5s;
        }

        .iconContainer:hover {
            color: #eee;
            background-color: #222;
            justify-content: space-evenly;
            flex-wrap: wrap;
            width: 80%;
            height: 80%;
            z-index: 2;
        }

        .icon {
            padding: 10px;
        }

        .iconContainer h1 {
            color: #eee;
            width: 5em;
            height: 5em;
            display: none;
        }

        .iconContainer:hover > h1 {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .iconContainer p {
            border: 1px solid #0f0;
            display: none;
            font-size: 18px;
            flex-wrap: wrap;
            text-align: justify;
            margin: 0px 50px 50px 50px;
        }

        .iconContainer:hover > p {
            display: inline;
        }
`;

const Skills = ({ paddingTop }: IPropsSkills) => {
    return (
        <SkillsContainer id="skills" paddingTop={paddingTop}>
            <label htmlFor="html5Icon" className="iconContainer">
                <DiHtml5 id="html5Icon" className="icon" size={ICONS_SIZE} />
                <h1>HTML 5</h1>
                <p> é a quinta versão da linguagem de marcação HTML (Hypertext Markup Language), utilizada para criar páginas web. Ela foi desenvolvida com o objetivo de oferecer novas funcionalidades para a web, tornando-a mais interativa e dinâmica.</p>
            </label>
            <label className="iconContainer">
                <div className="iconContent">
                    <DiCss3 className="icon" size={ICONS_SIZE} />
                    <div className="description">
                        <h1>CSS 3</h1>
                        <p>HTML5 é a quinta versão da linguagem de marcação HTML (Hypertext Markup Language), utilizada para criar páginas web. Ela foi desenvolvida com o objetivo de oferecer novas funcionalidades para a web, tornando-a mais interativa e dinâmica.</p>
                    </div>
                </div>
            </label>
            <label className="iconContainer">
                <DiJavascript className="icon" size={ICONS_SIZE} />
                <div className="description">
                    <p>HTML5 é a quinta versão da linguagem de marcação HTML (Hypertext Markup Language), utilizada para criar páginas web. Ela foi desenvolvida com o objetivo de oferecer novas funcionalidades para a web, tornando-a mais interativa e dinâmica.</p>
                </div>
            </label>
            <label className="iconContainer">
                <DiNodejs className="icon" size={ICONS_SIZE} />
            </label>
            <label className="iconContainer">
                <DiReact className="icon" size={ICONS_SIZE} />
            </label>
            <label className="iconContainer">
                <SiStyledcomponents className="icon" size={ICONS_SIZE} />
            </label>
            <label className="iconContainer">
                <SiTypescript size={"4em"} />
            </label>
            <label className="iconContainer">
                <DiGitBranch className="icon" size={ICONS_SIZE} />
            </label>
            <label className="iconContainer">
                <DiGithubBadge className="icon" size={ICONS_SIZE} />
            </label>
            <div className="descriptionContainer"></div>
        </SkillsContainer>
    );
}

export default Skills;
