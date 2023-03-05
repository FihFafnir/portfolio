import React from "react";
import BackgroundCodes from "./Codes";
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
            <BackgroundCodes />
            <Img />
        </HomeContainer>
    );
};

export default Home;
