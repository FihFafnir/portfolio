import styled from "styled-components";
import { box } from "../../../../styles";

const ControllerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding-bottom: 50rem;
    width: 280rem;
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
