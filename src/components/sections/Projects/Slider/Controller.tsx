import React from "react";
import styled from "styled-components";
import {
    GrFormPrevious,
    GrFormNext
} from "react-icons/gr";
import { IProject } from "../../Projects";

interface IControllerProps {
    index: number;
    indexHandler: Function;
    projects: IProject[];
}

const ControllerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding-bottom: 50px;
    width: 280px;
    height: 30%;

    button {
        border: none;
        cursor: pointer;
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16rem;
        height: 32px;
    }
`;

const Controller = ({ index, indexHandler, projects }: IControllerProps) => {
    return (
        <ControllerContainer>
            <button onClick={() => indexHandler("previous")}>
                <GrFormPrevious size="32px" />
            </button>
            <span>{index + 1}/{projects.length}</span>
            <button onClick={() => indexHandler("next")}>
                <GrFormNext size="32px" />
            </button>
        </ControllerContainer>
    );
}

export default Controller;
