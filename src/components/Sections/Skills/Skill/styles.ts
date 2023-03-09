import styled from "styled-components";
import { box } from "../../../styles";

const SkillContainer = styled.div`
    ${box}
    position: relative;
    align-items: end;
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
        height: 400rem;
        color: #eee;
        box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
        z-index: 3;
    }

    .icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    &:hover > .icon {
        top: 50rem;
        transform: translateY(0);
    }

    p {
        text-align: justify;
        font-size: 15rem;
        width: 80%;
        height: fit-content;
        opacity: 0;
        border: 1px solid #f00;
    }

    &:hover > p {
        border: 1px solid #f00;
        opacity: 1;
        transition: opacity 1s ease 0.5s;
    }

    &:hover ~ .blurredBackground {
        opacity: 1;
        transform: translateX(0);
    }
`;

export default SkillContainer;
