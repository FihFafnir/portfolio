import React from "react";
import NavBarItemsContainer from "./styles";

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
