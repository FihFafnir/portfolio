import React from "react";
import styled from "styled-components";

interface IPropsHome {
    paddingTop: number;
}

const HomeContainer = styled.section`
    padding-top: ${({ paddingTop }: IPropsHome) => paddingTop}px;
    height: 100vh;
    display: flex;
    justify-content: center;

    div {
        margin-top: 50px;
    }
`;

const Home = ({ paddingTop }: IPropsHome) => {
    return (
        <HomeContainer id="home" paddingTop={paddingTop} >
            <div>
                <h2>Olá, meu nome é</h2>
                <h1>Alan Mateus.</h1>
                <p>Desenvolvedor Front-Web</p>
            </div>
        </HomeContainer>
    );
}

export default Home;
