import React from "react";
import styled from "styled-components";
import Img from "./Img";

const HomeContainer = styled.section`
    background-color: #000;
    color: #fff;
    padding-top: 70px;
    height: 100vh;
    display: flex;
    justify-content: center;

    div {
        margin-top: 50px;
    }
`;

const Home = () => {
    return (
        <HomeContainer id="home">
            <div>
                <h2>Olá, meu nome é</h2>
                <h1>Alan Mateus.</h1>
                <p>Desenvolvedor Front-Web</p>
            </div>
            <Img src="assets/fafnir.png" />
        </HomeContainer>
    );
};

export default Home;
