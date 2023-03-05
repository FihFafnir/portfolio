import React from "react";
import { IProject } from "../../../Projects";
import ListContainer from "./styles";

interface IListProps {
    index: number;
    projects: IProject[];
}

const List = ({ index, projects }: IListProps) => {
    return (
        <ListContainer className="projects--list" index={index}>
            <div className="projects--box">
                <h1>{projects[0].title}</h1>
                <div className="iconContainer"></div>
            </div>
            <div className="projects--box">
                <h1>{projects[1].title}</h1>
                <div className="iconContainer"></div>
            </div>
        </ListContainer>
    );
}

export default List;
