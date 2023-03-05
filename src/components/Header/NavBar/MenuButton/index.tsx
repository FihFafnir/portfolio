import React from "react";
import MenuButtonContainer from "./styles";

interface IMenuButtonProps {
    black: boolean;
}

const MenuButton = ({ black }: IMenuButtonProps) => {
    return (
        <MenuButtonContainer htmlFor="menu" className="menuButton" black={black}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </MenuButtonContainer>
    );
}

export default MenuButton;
