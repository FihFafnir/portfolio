import React from "react";
import styled from "styled-components";

interface IPropsHeader {
    navHeight: number;
}

const NavBar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    height: ${({ navHeight }: IPropsHeader) => navHeight}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99;
`;

const NavBarItemsContainer = styled.div`
    display: flex;
    margin-right: 20px;
    a {
        height: 100%;
        color: #000;
        text-decoration: none;
        margin: 10px;
        font-weight: bold;
    }
`;

const LogoContainer = styled.a`
    margin-left: 20px;
    color: #000;
    text-decoration: none;
`;

const Header = ({ navHeight }: IPropsHeader) => {
    return (
        <header>
            <NavBar navHeight={navHeight} >
                <LogoContainer href="#home">Meu Portfólio</LogoContainer>
                <NavBarItemsContainer>
                    <a href="#home">Home</a>
                    <a href="#about">Sobre</a>
                    <a href="#skills">Habilidades</a>
                    <a href="#contact">Contato</a>
                </NavBarItemsContainer>
            </NavBar>
        </header>
    );
}

export default Header;
