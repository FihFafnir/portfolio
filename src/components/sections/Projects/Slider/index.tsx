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

interface ISliderContainerProps {
    index: number;
}

const SliderContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    width: 100%;
	overflow: hidden;

    @media screen and (max-width: 600px) {
        width: 100%;
        height: 50%;
        margin: 0;

        .projects--box {
            top: 0;
            left: 50%;
            width: 80%;
            height: 170px;
            transform: translateX(100vw);
        }

        .projects--box:nth-child(${({ index }: ISliderContainerProps) => index + 1}) {
            transform: translateX(-50%);
        }
    }
`;

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
