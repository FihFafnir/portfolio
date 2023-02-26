import React from "react";
import styled from "styled-components";


const LogoContainer = styled.a`
    margin-left: 20px;
    color: #000;
    text-decoration: none;
`;

const Logo = () => {
    return (
        <LogoContainer href="#home">Portfólio</LogoContainer>
    );
}

export default Logo;
