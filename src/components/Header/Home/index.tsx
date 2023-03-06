import React from "react";
import Img from "./Img";
import HomeContainer from "./styles";

const Home = () => {
    return (
        <HomeContainer id="home">
            <div className="text">
                <p>Olá, meu nome é</p>
                <h1>Alan Mateus</h1>
                <p>Desenvolvedor Front-end</p>
            </div>
        </HomeContainer>
    );
};

export default Home;
