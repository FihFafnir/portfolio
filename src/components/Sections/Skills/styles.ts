import styled from "styled-components";
import { title, box, section, blurredBackground } from "../../styles";


const SkillsContainer = styled.section`
    ${section}
    padding-top: 150px;
    position: relative;
    flex-direction: column;
    justify-content: start;
    overflow-y: hidden;

    h1 {
        ${title}
        text-align: center;
        margin-bottom: 30rem;
    }

    .skills--content {
        ${box}
        width: 100%;
        flex-wrap: wrap;
    }

    .blurredBackground {
        ${blurredBackground}
        z-index: 1;
    }

    // Tablet CSS

    @media only screen and (max-width: 768px) {
        height: 100%;
        padding-bottom: 30vh; 
    }
`;

export default SkillsContainer;
