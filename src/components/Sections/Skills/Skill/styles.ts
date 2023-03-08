import styled from "styled-components";
import { box } from "../../../styles";

const SkillContainer = styled.div`
    position: relative;
    ${box}
    align-items: center;
    flex-wrap: wrap;
    background-color: #ddd;
    width: 16vw;
    aspect-ratio: 1;
    margin: -15px -10px 15px -10px;
    transform: scale(.6);
    transition: all ease 0.8s;
    border-radius: 5px;

    &:hover {
        background-color: #333;
        transform: scale(1);
        height: 340rem;
        color: #eee;
        box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
        z-index: 3;
    }

    .icon {
        transition: transform ease 0.8s;
    }

    &:hover > .icon {
        transform: translateY(-90rem);
    }

    p {
        position: absolute;
        top: 130rem;
        text-align: justify;
        font-size: 15rem;
        width: 80%;
        height: 0;
        opacity: 0;
    }

    &:hover > p {
        height: 200rem;
        opacity: 1;
        transition: opacity 1s ease 0.5s;
    }

    &:hover ~ .blurredBackground {
        opacity: 1;
        transform: translateX(0);
    }

    // Laptop CSS

    @media only screen and (max-width: 992px) {
        width: 25vw;
        height: 25vw;
    }

    // Tablet CSS

    @media only screen and (max-width: 768px) {
        width: 33vw;
        height: 33vw;
    }

    // Mobile CSS

    @media only screen and (max-width: 600px) {
        width: 50vw;
        height: 50vw;
    }
`;

export default SkillContainer;
