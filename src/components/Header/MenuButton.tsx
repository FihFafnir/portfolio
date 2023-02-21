import React from "react";
import styled from "styled-components";

const MenuButtonContainer = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid #111;
    border-radius: 3px;



    .line {
        width: 32px;
        height: 3px;
        border-radius: 3px;
        background-color: #000;
        transition: all ease 1s;
    }

    .line:nth-child(2) {
        transition: all ease 0.2s;
    }

    &:hover > .line:nth-child(1) {
        transform: translateY(10px) rotate(45deg);
        background-color: red;
    }

    &:hover > .line:nth-child(2) {
        position: absolute;
        opacity: 0;
    }

    &:hover > .line:nth-child(3) {
        transform: translateY(-10px) rotate(-45deg);
        background-color: red;
    }
`;

const MenuButton = () => {
    return (
        <MenuButtonContainer>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </MenuButtonContainer>
    );
}

export default MenuButton;
