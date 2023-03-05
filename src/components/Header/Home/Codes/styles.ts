import styled from "styled-components";

const BackgroundCodesContainer = styled.div`
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
`;

export default BackgroundCodesContainer;
