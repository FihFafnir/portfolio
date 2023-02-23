import React from "react";
import styled from "styled-components";
import List from "./List";
import Controller from "./Controller";
import { IProject } from "../../Projects";

interface ISliderProps {
    index: number;
    indexHandler: Function;
    projects: IProject[];
}

const Slider = ({ index, indexHandler, projects }: ISliderProps) => {
    return (
        <div className="projects--slider">
            <List projects={projects} />
            <Controller
                index={index}
                indexHandler={indexHandler}
                projects={projects}
            />
        </div>
    );
};

export default Slider;
