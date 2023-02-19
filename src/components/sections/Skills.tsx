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
        width: 7em;
        height: 7em;
        background-color: #ddd;
        border-radius: 5px;
        margin: 10px;
    }

    // Mobile CSS

    @media only screen and (max-width: 600px) {
        padding-top: ${({ paddingTop }: IPropsSkills) => paddingTop}px;
        height: 100vh;
        justify-content: center;
        flex-wrap: wrap;
        

        .iconContainer {
            margin: 25px;
        }

        icon {
            padding: 10px;
            
        }
    }
`;

const Skills = ({ paddingTop }: IPropsSkills) => {
    return (
        <SkillsContainer id="skills" paddingTop={paddingTop}>
            <div className="iconContainer">
                <DiHtml5 className="icon" size={ICONS_SIZE} />
            </div>
            <div className="iconContainer">
                <DiCss3 className="icon" size={ICONS_SIZE} />
            </div>
            <div className="iconContainer">
                <DiJavascript className="icon" size={ICONS_SIZE} />
            </div>
            <div className="iconContainer">
                <DiNodejs className="icon" size={ICONS_SIZE} />
            </div>
            <div className="iconContainer">
                <DiReact className="icon" size={ICONS_SIZE} />
            </div>
            <div className="iconContainer">
                <SiStyledcomponents className="icon" size={ICONS_SIZE} />
            </div>
            <div className="iconContainer">
                <SiTypescript size={"4em"} />
            </div>
            <div className="iconContainer">
                <DiGitBranch className="icon" size={ICONS_SIZE} />
            </div>
            <div className="iconContainer">
                <DiGithubBadge className="icon" size={ICONS_SIZE} />
            </div>
        </SkillsContainer>
    );
}

export default Skills;

