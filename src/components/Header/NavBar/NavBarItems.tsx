import React from "react";
import styled from "styled-components";

interface INavBarItemsContainerProps {
    black: boolean;
    currentSection: string;
}

const NavBarItemsContainer = styled.div`
    display: flex;
    margin-right: 20px;

    a {
        font-size: 16rem;
        position: relative;
        height: 100%;
        color: ${({ black }: INavBarItemsContainerProps) => black ? "#fff" : "#000"};
        text-decoration: none;
        margin: 10px;
        font-weight: bold;
    }

    a[href=${({ currentSection }: INavBarItemsContainerProps) => '"' + currentSection + '"'}]::after {
        content: "";
        position: absolute;
        top: 20px;
        left: 0;
        width: 30px;
        height: 3px;
        border-radius: 10px;
        background-color: ${({ black }: INavBarItemsContainerProps) => black ? "#fff" : "#000"};
    }

    // Mobile CSS

    @media only screen and (max-width: 600px) {
        position: fixed;
        top: 70px;
        right: 0;
        margin-right: 0;
        overflow: hidden;
        width: 100vw;
        height: 0;
        flex-direction: column;
        transition: all ease 0.8s;

        a {
            display: flex;
            background-color: ${({ black }: INavBarItemsContainerProps) => black ? "#000" : "#fff"};
            align-items: center;
            justify-content: center;
            height: 70px;
            margin: 0;
            transform: translateY(-100vh);
            transition: all ease 0.8s;
        }

        a::before {
            position: absolute;
            content: "";
            background-color: ${({ black }: INavBarItemsContainerProps) => black ? "#000" : "#fff"};
            width: 100vw;
            height: 75px;
            z-index: -5;
        }

        a[href=${({ currentSection }: INavBarItemsContainerProps) => '"' + currentSection + '"'}]::after {
            top: 45px;
            left: auto;
        }
    }
`;

interface INavBarItemsProps {
    setMenuChecked: Function;
    black: boolean;
    currentSection: string;
}

const NavBarItems = ({ setMenuChecked, black, currentSection }: INavBarItemsProps) => {
    const checkboxHandler = (): void => {
        setMenuChecked(false);
    }

    return (
        <NavBarItemsContainer className="navBar--itemsContainer" black={black} currentSection={currentSection}>
            <a href="#home" onClick={checkboxHandler} >Home</a>
            <a href="#about" onClick={checkboxHandler}>Sobre</a>
            <a href="#skills" onClick={checkboxHandler}>Habilidades</a>
            <a href="#projects" onClick={checkboxHandler}>Projetos</a>
            <a href="#contact" onClick={checkboxHandler}>Contato</a>
        </NavBarItemsContainer>
    );
}

export default NavBarItems;
