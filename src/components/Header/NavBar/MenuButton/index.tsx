import React from "react";
import MenuButtonContainer from "./styles";

const MenuButton = () => {
    return (
        <MenuButtonContainer htmlFor="menu" className="menuButton">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </MenuButtonContainer>
    );
}

export default MenuButton;
