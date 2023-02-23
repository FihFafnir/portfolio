import React from "react";
import { IProject } from "../../Projects";

interface IListProps {
    projects: IProject[];
}

const List = ({ projects }: IListProps) => {
    return (
        <div className="projects--list">
            <div className="projects--box">
                <h1>{projects[0].title}</h1>
                <div className="iconContainer"></div>
            </div>
            <div className="projects--box">
                <h1>{projects[1].title}</h1>
                <div className="iconContainer"></div>
            </div>
        </div>
    );
}

export default List;
