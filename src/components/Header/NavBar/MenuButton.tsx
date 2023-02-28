import React from "react";
import styled from "styled-components";

interface IMenuButtonProps {
    black: boolean;
}

const MenuButtonContainer = styled.label`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    cursor: pointer;

    .line {
        width: 24px;
        height: 3px;
        border-radius: 3px;
        background-color: ${({ black }: IMenuButtonProps) => black ? "#fff" : "#000"};
        transition: all ease 0.6s;
    }

    .line:nth-child(2) {
        transition: all ease 0.2s;
    }

    #menu: checked ~ & > .line:nth-child(1) {
        transform: translateY(7.5px) rotate(45deg);
        background-color: red;
    }

    #menu: checked ~ & > .line:nth-child(2) {
        position: absolute;
        opacity: 0;
    }

    #menu: checked ~ & > .line:nth-child(3) {
        transform: translateY(-7.5px) rotate(-45deg);
        background-color: red;
    }
`;

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