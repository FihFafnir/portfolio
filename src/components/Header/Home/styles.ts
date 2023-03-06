import styled from "styled-components";
import { section, title, applyInDevices } from "../../styles";

const HomeContainer = styled.section`
    ${section}
    background-color: #000;
    box-shadow: 0px 2px 10px 1px rgba(0,0,0,.9);
    justify-content: left;
    scroll-snap-align: center;
    color: #fff;
    padding-top: 70px;


    .text {
        position: absolute;
        top: 200rem;
        left: 32.5%;
        transform: translateX(-50%);
        height: fit-content;
        z-index: 1;
    }

    h1 {
        ${title}
        font-size: 45rem;
    }

    p {
        font-size: 20em;
        font-weight: bold;
    }

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: calc(100vh + 60rem);
        opacity: 0.6;
        top: 10px;
        left: 0;
        background-image: url("./assets/terminal.png");
        background-repeat: no-repeat;
        background-size: cover;
        filter: contrast(110%) blur(3px);
    }

    &::after {
        content: "";
        position: absolute;
        width: max(36vw, 200rem);
        height: max(36vw, 200rem);
        right: 0;
        top: 0;
        opacity: 0.8;
        background-image: url("./assets/fafnir.png");
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 0 0 0 30%;
    }

    // Mobile CSS

    @media only screen and (max-width: 600px) {
        .text {
            width: 100%;
            text-align: center;
            top: max(40vh, 325rem);
            left: 50%;
        }

        &::after {
            top: 15vh;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 30%;
        }
    }

`;

export default HomeContainer;
