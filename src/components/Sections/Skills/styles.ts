import styled from "styled-components";
import { title, box, section, blurredBackground } from "../../styles";


const SkillsContainer = styled.section`
    ${section}
    position: relative;
    flex-direction: column;

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
        padding-top: 120px;
    }
`;

export default SkillsContainer;
