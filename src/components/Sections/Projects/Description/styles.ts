import styled from "styled-components";
import { title, box } from "../../../styles";

const DescriptionContainer = styled.div`
    ${box}
    padding: 40rem;
    flex-direction: column;
    width: clamp(80%, 60%, 30%);

    h1 {
        ${title}
        margin-bottom: 20rem;
    }

    p {
        display: flex;
        border: 1px solid #f00;
        align-items: center;
        height: fit-content;
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

    }
`;

export default DescriptionContainer;
