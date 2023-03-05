import React from "react";
import styled from "styled-components";
import { title, section } from "../GenericStyles";

const AboutContainer = styled.section`
    ${section}
    flex-direction: column;
    scroll-snap-align: center;

    .about--content {
        display: flex;
        background-color: #ededed;
        border-radius: 15px;
        flex-direction: column;
        padding: 50px;
        height: 60vh;
    }

    h1 {
        ${title}
        margin-left: 70px;
    }

    p {
        font-size: 20rem;
        margin: 20px;
        text-align: justify;
    }
`;

const About = () => {
    return (
        <AboutContainer id="about">
            <div className="about--content">
                <h1>Sobre mim</h1>
                <p>Olá! É um prazer conhecê-lo. Me chamo Alan Mateus e tenho 17 anos. Sou um desenvolvedor Front-End apaixonado por programação desde a minha infância. Comecei com o básico, aprendendo HTML, CSS e JavaScript. Ao longo do tempo, tive a oportunidade de conhecer outras linguagens, como Java, C++ e Python. No entanto, foi o JavaScript que mais me chamou a atenção e decidi me aprofundar ainda mais nele.</p>
                <p>Atualmente, estou dedicando meu tempo para estudar a fundo o framework React. Acredito que a experiência de desenvolvimento web fica ainda mais incrível com essa ferramenta poderosa. Além disso, o React é uma das tecnologias mais populares no mercado de trabalho, o que me motiva a aprender cada vez mais sobre ele. Tenho certeza de que essa escolha me proporcionará muitas oportunidades no futuro.</p>
            </div>
        </AboutContainer>
    );
}

export default About;
