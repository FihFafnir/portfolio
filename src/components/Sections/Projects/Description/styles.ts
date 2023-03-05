import styled from "styled-components";
import { title, box } from "../../../styles";

const DescriptionContainer = styled.div`
    ${box}
    padding: 40rem;
    flex-direction: column;
    width: 30%;

    h1 {
        ${title}
        margin-bottom: 20rem;
    }

    p {
        display: flex;
        align-items: center;
        height: 30%;
        font-size: 20rem;
    }

    a {
        margin-top: 25rem;
        width: fit-content;
        border-radius: 20rem;
        padding: 10rem 15rem 10rem 15rem;
        background-color: #111;
        color: #eee;
        text-decoration: none;
        font-size: 20rem;
    }

    @media screen and (max-width: 1024px) {
        p {
            height: 40%;
        }
    }

    // Tablet CSS

    @media screen and (max-width: 768px) {
        width: 60%;

        p {
            height: 32%;
        }
    }

    // Mobile CSS

    @media screen and (max-width: 600px) {
        width: 80%;
        height: 40%;
        border: 1px solid #000;
        align-items: center;
        text-align: center;

        h1 {
            margin-bottom: 30px;
        }

        p {
            height: fit-content;
        }
    }
`;

export default DescriptionContainer;
