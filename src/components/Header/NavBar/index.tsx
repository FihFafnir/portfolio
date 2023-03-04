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
    background-color: rgba(255, 255, 255, ${({ black }: INavBarContainerProps) => black ? "0" : "1"});
    width: 100%;
    height: 70rem;
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
            margin-right: 20rem;
            z-index: 1;
        }

        #menu:checked ~ .navBar--itemsContainer {
            height: 100vh;
        }

        #menu:checked ~ .navBar--itemsContainer > a {
            transform: translateY(0);
        }

        #menu:checked ~ .blurredBackground {
            ${({ black }: INavBarContainerProps) => black && "top: 0;"}
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
        const getElementY = (selector: string): number => {
            const element: HTMLElement | null = document.querySelector(selector)
            return element?.offsetTop || 0;
        }

        const scrollListener = () => {
            const sectionSelectors = ["#about", "#skills", "#projects"];
            const currentSectionSelector = sectionSelectors.filter((section) => window.scrollY >= getElementY(section) - window.innerHeight * 0.4).reverse()[0];
            setCurrentSection(currentSectionSelector || "#home");

            setNavBarBlack(window.scrollY > 10 ? false : true);
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
