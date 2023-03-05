import styled from "styled-components";
import { blurredBackground } from "../../GenericStyles";

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

    .blurredBackground {
        ${blurredBackground}
    }

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

export default NavBarContainer;
