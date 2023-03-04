import styled from "styled-components";

const Terminal = styled.div`
    position: absolute;
    width: 80%;
    height: calc(100% + 110rem);
    opacity: 0.6;
    top: 10px;
    left: 0;
    background-image: url("./assets/terminal.png");
    background-repeat: no-repeat;
    background-size: content;
    filter: contrast(110%) blur(2px);
`;

export default Terminal;
