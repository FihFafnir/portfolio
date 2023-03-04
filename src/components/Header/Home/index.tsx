import React from "react";
import styled from "styled-components";
import { Title } from "../../GenericComponents";
import Terminal from "./Terminal";
import Img from "./Img";

const HomeContainer = styled.section`
    background-color: #000;
    box-shadow: 0px 2px 10px 1px rgba(0,0,0,.9);
    color: #fff;
    padding-top: 70px;
    height: 100vh;
    display: flex;
    justify-content: center;

    .text {
        width: 20%;
        z-index: 1;
        height: 100px;
        margin: 200rem 0rem 0rem 50rem;
    }

    h1 {
        font-size: 45rem;
    }

    p {
        font-size: 20em;
        font-weight: bold;
    }

    // Mobile CSS

    @media only screen and (max-width: 600px) {
        .text {
            width: 100%;
        }
    }
`;

const Home = () => {
    return (
        <HomeContainer id="home">
            <div className="text">
                <p>Olá, meu nome é</p>
                <Title>Alan Mateus</Title>
                <p>Desenvolvedor Front-end</p>
            </div>
            <Terminal></Terminal>
            <Img />
        </HomeContainer>
    );
};

export default Home;
