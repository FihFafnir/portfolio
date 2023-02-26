import React from "react";
import styled from "styled-components";
import { IProject } from "../../Projects";

interface IListProps {
    index: number;
    projects: IProject[];
}

interface IListContainerProps {
    index: number;
}

const ListContainer = styled.div`
    .projects--box {
        display: flex;
        position: absolute;
        top: 50%;
        left: 0;
        height: 120px;
        justify-content: space-between;
        background-color: #fff;
        width: 280px;
        height: 120px;
        padding: 20px;
        border-radius: 10px;
        transform: translate(350px, -60%);
        transition: transform ease 1s;
    }

    .projects--box:nth-child(
            ${({ index }: IListContainerProps) => index + 1}
        ) {
        opacity: 1;
        transform: translate(0, -60%);
    }

    .projects--box h1 {
        font-size: 20px;
        width: 80%;
    }

    .projects--box .iconContainer {
        margin-top: 20px;
        background-color: #000;
        border-radius: 50%;
        width: 32px;
        height: 32px;
    }
`;

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
