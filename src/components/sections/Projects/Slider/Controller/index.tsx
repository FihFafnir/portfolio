import React from "react";
import {
    GrFormPrevious,
    GrFormNext
} from "react-icons/gr";
import { IProject } from "../../../Projects";
import ControllerContainer from "./styles";

interface IControllerProps {
    index: number;
    indexHandler: Function;
    projects: IProject[];
}

const Controller = ({ index, indexHandler, projects }: IControllerProps) => {
    return (
        <ControllerContainer>
            <button onClick={() => indexHandler("previous")}>
                <GrFormPrevious size="32rem" />
            </button>
            <span>{index + 1}/{projects.length}</span>
            <button onClick={() => indexHandler("next")}>
                <GrFormNext size="32rem" />
            </button>
        </ControllerContainer>
    );
}

export default Controller;
