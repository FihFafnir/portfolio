import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import NavBarContainer from "./styles";
import NavBarItems from "./NavBarItems";

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
            <label htmlFor="menu" className="blurredBackground"></label>
        </NavBarContainer>
    );
}
export default NavBar;
