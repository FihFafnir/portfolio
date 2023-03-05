import React from "react";
import LogoContainer from "./styles";

interface ILogoProps {
    black: boolean;
}

const Logo = ({ black }: ILogoProps) => {
    return (
        <LogoContainer href="#home" black={black}>Portfólio</LogoContainer>
    );
}

export default Logo;
