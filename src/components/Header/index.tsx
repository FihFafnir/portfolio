import React, { useState } from "react";
import styled from "styled-components";
import MenuButton from "./MenuButton";
import { BlurredBackground } from "../GenericComponents";


interface IHeaderProps {
    navHeight: number;
}

const NavBar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    height: ${({ navHeight }: IHeaderProps) => navHeight}px;
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

        #menu:checked ~ .blurredBackground {
            height: 100vh;
            opacity: 1;
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

const Header = ({ navHeight }: IHeaderProps) => {
    const [menuChecked, setMenuChecked] = useState(false);

    const checkboxHandler = ():void => {
        setMenuChecked(false);
    }

    return (
        <header>
            <NavBar navHeight={navHeight} >
                <LogoContainer href="#home">Portfólio</LogoContainer>
                <input id="menu" type="checkbox" onChange={() => {
                    setMenuChecked(() => !menuChecked);
                }} checked={menuChecked} />
                <MenuButton />
                <NavBarItemsContainer className="navBarItemsContainer">
                    <a href="#home" onClick={checkboxHandler} >Home</a>
                    <a href="#about" onClick={checkboxHandler}>Sobre</a>
                    <a href="#skills" onClick={checkboxHandler}>Habilidades</a>
                    <a href="#contact" onClick={checkboxHandler}>Contato</a>
                </NavBarItemsContainer>
                <BlurredBackground htmlFor="menu" />
            </NavBar>
        </header>
    );
}

export default Header;
