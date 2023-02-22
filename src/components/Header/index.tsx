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
    
    input[type="checkbox"] {
        display: none;
    }

    .menuButton {
        display: none;
    }

    @media only screen and (max-width: 600px) {
        .menuButton {
            display: flex;
            margin-right: 20px;
            z-index: 1;
        }

        #menu:checked ~ .navBarItemsContainer {
            width: 60vw;
            transform: translateX(0);
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
        position: fixed;
        top: 0;
        right: 0;
        margin-right: 0;
        margin-top: 70px;
        width: 0;
        height: 100%;
        flex-direction: column;
        background-color: #eee;
        transform: translateX(60vw);
        transition: all ease 0.8s;

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
                <input id="menu" type="checkbox" />
                <MenuButton />
                <NavBarItemsContainer className="navBarItemsContainer">
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
