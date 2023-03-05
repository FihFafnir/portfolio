import styled from "styled-components";
import { title, section } from "../../styles";

const AboutContainer = styled.section`
    ${section}
    flex-direction: column;
    scroll-snap-align: center;

    .about--content {
        display: flex;
        background-color: #ededed;
        border-radius: 15px;
        flex-direction: column;
        padding: 50px;
        height: 60vh;
    }

    h1 {
        ${title}
        margin-left: 70px;
    }

    p {
        font-size: 20rem;
        margin: 20px;
        text-align: justify;
    }
`;

export default AboutContainer;
