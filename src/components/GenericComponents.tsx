import React from "react";
import styled from "styled-components";

const BlurredBackgroundContainer = styled.label`
    position: fixed;
    top: 70px;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0;
    backdrop-filter: blur(2px);
    z-index: -1;
    background-color: rgba(0, 0, 0, .6);
    transform: translateX(-100vw);
    transition: opacity ease 0.8s;
`;

interface IBlurredBackgroundProps {
    htmlFor?: string;
}

const BlurredBackground = ({ htmlFor }: IBlurredBackgroundProps) => {
    return (
        <BlurredBackgroundContainer className="blurredBackground" htmlFor={htmlFor}></BlurredBackgroundContainer>
    );
}

export {
    BlurredBackground
}
