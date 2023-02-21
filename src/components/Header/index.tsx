import React from "react";
import styled from "styled-components";
import MenuButton from "./MenuButton";


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

    @media only screen and (max-width: 600px) {

        MenuButton:hover ~ NavBarItemsContainer {
            display: block;
        }
    }
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

    // Mobile CSS

    @media only screen and (max-width: 600px) {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        margin-right: 0;
        width: 50%;
        height: 100%;
        flex-direction: column;
        background-color: #eee;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid #dedede;
            height: 100px;
            margin: 0;
        }
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
                <LogoContainer href="#home">Portfólio</LogoContainer>
                <MenuButton />
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
