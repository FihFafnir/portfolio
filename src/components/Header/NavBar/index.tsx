import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import NavBarItems from "./NavBarItems";
import { BlurredBackground } from "../../GenericComponents";

interface INavBarContainerProps {
    black: boolean;
}

const NavBarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ black }: INavBarContainerProps) => black ? "#000" : "#fff"};
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
            height: 100vh;
        }

        #menu:checked ~ .navBar--itemsContainer > a {
            transform: translateY(0);
        }

        #menu:checked ~ .blurredBackground {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

const NavBar = () => {
    const [navBarBlack, setNavBarBlack] = useState(true);
    const [menuChecked, setMenuChecked] = useState(false);
    const [currentSection, setCurrentSection] = useState("#home");

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > window.innerHeight) {
                setCurrentSection("#about");
            }

            if (window.scrollY > 10) {
                setNavBarBlack(false);
            } else {
                setNavBarBlack(true);
            }
        }

        window.addEventListener("scroll", scrollListener);

        return () => {
            window.removeEventListener("scroll", scrollListener);
        }
    });

    return (
        <NavBarContainer black={navBarBlack}>
            <Logo black={navBarBlack} />
            <input id="menu" type="checkbox" onChange={() => {
                setMenuChecked(() => !menuChecked);
            }} checked={menuChecked} />
            <MenuButton black={navBarBlack} />
            <NavBarItems
                setMenuChecked={setMenuChecked}
                black={navBarBlack}
                currentSection={currentSection}
            />
            <BlurredBackground htmlFor="menu" />
        </NavBarContainer>
    );
}
export default NavBar;
