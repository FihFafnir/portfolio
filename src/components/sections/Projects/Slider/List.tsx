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
        justify-content: space-between;
        background-color: #fff;
        width: 350rem;
        height: 250rem;
        padding: 15rem;
        border-radius: 10rem;
        transform: translate(420rem, -50%);
        transition: transform ease 1s;
    }

    .projects--box:nth-child(
            ${({ index }: IListContainerProps) => index + 1}
        ) {
        opacity: 1;
        transform: translate(0, -50%);
    }

    .projects--box h1 {
        margin-top: 10rem;
        font-size: 25rem;
        width: 80%;
    }

    .projects--box .iconContainer {
        margin-top: 20rem;
        background-color: #000;
        border-radius: 50%;
        width: 32rem;
        height: 32rem;
    }

    // Tablet CSS

    @media screen and (max-width: 768px) {
        .projects--box {
            width: 200rem;
            transform: translate(280rem, -60%);
        }
    }

    @media screen and (max-width: 600px) {
        .projects--box {
            top: 0;
            left: 50%;
            width: 80%;
            height: 170px;
            transform: translateX(100vw);
        }

        .projects--box:nth-child(${({ index }: IListContainerProps) => index + 1}) {
            transform: translateX(-50%);
        }
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
