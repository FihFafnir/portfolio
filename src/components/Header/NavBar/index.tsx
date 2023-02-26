import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import NavBarItems from "./NavBarItems";
import { BlurredBackground } from "../../GenericComponents";

const NavBarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    height: 70px;
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

        #menu:checked ~ .navBar--itemsContainer {
            width: 100vw;
            transform: translateX(0);
        }

        #menu:checked ~ .blurredBackground {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

const NavBar = () => {
    const [menuChecked, setMenuChecked] = useState(false);


    return (
        <NavBarContainer>
            <Logo />
            <input id="menu" type="checkbox" onChange={() => {
                setMenuChecked(() => !menuChecked);
            }} checked={menuChecked} />
            <MenuButton />
            <NavBarItems setMenuChecked={setMenuChecked} />
            <BlurredBackground htmlFor="menu" />
        </NavBarContainer>
    );
}
export default NavBar;
