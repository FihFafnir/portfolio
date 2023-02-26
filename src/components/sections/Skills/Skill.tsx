import React from "react";
import styled from "styled-components";

const SkillContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #ddd;
    width: 16%;
    height: 16vw;
    margin: -15px -10px 15px -10px;
    transform: scale(.60);
    transition: all ease 1s;            
    border-radius: 5px;

    &:hover {
        background-color: #333;
        transform: scale(1);
        height: 340px;
        color: #eee;
        box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
        z-index: 3;
    }

    .icon {
        transition: transform ease 1s;
    }

    &:hover > .icon {
        transform: translateY(-90px);
    }

    p {
        position: absolute;
        top: 120px;
        text-align: justify;
        font-size: 11pt;
        width: 80%;
        height: 0;
        opacity: 0;
    }

    &:hover > p {
        height: min-content;
        opacity: 1;
        transition: opacity 1s ease 0.5s;
    }

    &:hover ~ .blurredBackground {
        opacity: 1;
        transform: translateX(0);
    }

    // Laptop CSS

    @media only screen and (max-width: 992px) {
        width: 25%;
        height: 25vw;
    }

    // Tablet CSS

    @media only screen and (max-width: 768px) {
        width: 33%;
        height: 33vw;
    }

    // Mobile CSS

    @media only screen and (max-width: 600px) {
        width: 50%;
        height: 50vw;
    }
`;

interface ISkillProps {
    description: string;
    children: JSX.Element;
}

const Skill = ({ description, children }: ISkillProps) => (
    <SkillContainer>
        {children}
        <p>{description}</p>
    </SkillContainer>
);

export default Skill;
