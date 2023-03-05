import styled from "styled-components";
import { section } from "../../styles";

const ProjectsContainer = styled.section`
    ${section}
    align-items: center;

    .projects--content {
        display: flex;
        background-color: #ededed;
        border-radius: 15px;
        width: 90%;
        height: 60vh;
    }

    // Mobile CSS

    @media screen and (max-width: 600px) {
        .projects--content {
            height: 80vh;
            flex-direction: column;
            align-items: center;
        }
    }
`;

export default ProjectsContainer;
