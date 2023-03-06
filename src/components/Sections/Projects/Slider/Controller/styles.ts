import styled from "styled-components";
import { box } from "../../../../styles";

const ControllerContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: end;
    padding-bottom: 50rem;
    width: 100%;
    height: 30%;

    button {
        border: none;
        cursor: pointer;
    }

    span {
        ${box}
        align-items: center;
        font-size: 16rem;
        height: 32rem;
    }
`;

export default ControllerContainer;
