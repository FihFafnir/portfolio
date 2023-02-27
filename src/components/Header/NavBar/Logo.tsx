import React from "react";
import styled from "styled-components";

interface ILogoProps {
    black: boolean;
}

const LogoContainer = styled.a`
    margin-left: 20px;
    color: ${({ black }: ILogoProps) => black ? "#fff" : "#000"};
    text-decoration: none;
    font-weight: bolder;
`;

const Logo = ({ black }: ILogoProps) => {
    return (
        <LogoContainer href="#home" black={black}>Portfólio</LogoContainer>
    );
}

export default Logo;
