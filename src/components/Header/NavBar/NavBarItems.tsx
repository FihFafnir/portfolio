import React from "react";
import styled from "styled-components";

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

interface INavBarItemsProps {
    setMenuChecked: Function;
}

const NavBarItems = ({ setMenuChecked }: INavBarItemsProps) => {
    const checkboxHandler = ():void => {
        setMenuChecked(false);
    }

    return (
        <NavBarItemsContainer className="navBar--itemsContainer">
            <a href="#home" onClick={checkboxHandler} >Home</a>
            <a href="#about" onClick={checkboxHandler}>Sobre</a>
            <a href="#skills" onClick={checkboxHandler}>Habilidades</a>
            <a href="#projects" onClick={checkboxHandler}>Projetos</a>
            <a href="#contact" onClick={checkboxHandler}>Contato</a>
        </NavBarItemsContainer>
    );
}

export default NavBarItems;
