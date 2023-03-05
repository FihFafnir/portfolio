import React from "react";
import List from "./List";
import Controller from "./Controller";
import { IProject } from "../../Projects";
import SliderContainer from "./styles";

interface ISliderProps {
    index: number;
    indexHandler: Function;
    projects: IProject[];
}

const Slider = ({ index, indexHandler, projects }: ISliderProps) => {
    return (
        <SliderContainer className="projects--slider" index={index}>
            <List
                index={index}
                projects={projects}
            />
            <Controller
                index={index}
                indexHandler={indexHandler}
                projects={projects}
            />
        </SliderContainer>
    );
};

export default Slider;
