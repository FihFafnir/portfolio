import React from "react";
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

const Controller = ({ index, indexHandler, projects }: IControllerProps) => {
    return (
        <div className="controller">
            <button onClick={() => indexHandler("previous")}>
                <GrFormPrevious size="32px" />
            </button>
            <span>{index + 1}/{projects.length}</span>
            <button onClick={() => indexHandler("next")}>
                <GrFormNext size="32px" />
            </button>
        </div>
    );
}

export default Controller;
