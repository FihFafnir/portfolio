import styled from "styled-components";
import { box } from "../../../styles";

const SkillContainer = styled.div`
    ${box}
    position: relative;
    flex-wrap: wrap;
    background-color: #ddd;
    flex: 0 1 min(45vw, 280rem);
    height: min(45vw, 280rem);
    transform: scale(0.6);
    transition: all ease 0.8s;
    border-radius: 5px;

    &:hover {
        background-color: #333;
        transform: scale(1.1);
        //height: fit-content;
        color: #eee;
        z-index: 3;
        border-radius: 5px;
    }

    .icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: all ease 1s;
    }

    &:hover > .icon {
        top: 50rem;
        transform: translateY(0);
    }

    p {
        background-color: #ddd;
        color: rgba(0,0,0,0);
        text-align: justify;
        width: 100%;
        font-size: 15rem;
        z-index: -1;
        height: 0;
        border-radius: 5px;
        padding: 20rem;
        transition: background-color ease 0.8s;
    }

    &:hover > p {
        background-color: #333;
        padding-top: 150rem;
        color: #eee;
        height: fit-content;
        transition:
            all ease 0.8s,
            height 0.8s ease 0.8s,
            color 0.8s ease 0.5s;
    }

    &:hover ~ .blurredBackground {
        opacity: 1;
        transform: translateX(0);
    }
`;

export default SkillContainer;
