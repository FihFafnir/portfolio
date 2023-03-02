import styled from "styled-components";

const Terminal = styled.div`
    position: absolute;
    width: 80%;
    height: 100%;
    opacity: 0.6;
    top: 50px;
    left: -160px;
    background-image: url("./assets/terminal.png");
    background-repeat: no-repeat;
    background-size: content;
    filter: contrast(110%);
`;

export default Terminal;
