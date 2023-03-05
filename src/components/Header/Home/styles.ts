import styled from "styled-components";
import { section, title, applyInDevices } from "../../GenericStyles";

const HomeContainer = styled.section`
    ${section}
    background-color: #000;
    box-shadow: 0px 2px 10px 1px rgba(0,0,0,.9);
    scroll-snap-align: center;
    color: #fff;
    padding-top: 70px;


    .text {
        height: fit-content;
        z-index: 1;
        margin: 200rem 0rem 0rem 50rem;
    }

    h1 {
        ${title}
        font-size: 45rem;
    }

    p {
        font-size: 20em;
        font-weight: bold;
    }

    // Mobile CSS

    ${
        applyInDevices(600, `
            .text {
                width: 100%;
            }
        `)
    }
`;

export default HomeContainer;
