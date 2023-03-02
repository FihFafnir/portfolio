import React from "react";
import styled from "styled-components";
import { Title } from "../GenericComponents";

interface IAboutProps {
    paddingTop: number;
}

const AboutContainer = styled.section`
    padding-top: ${({ paddingTop }: IAboutProps) => paddingTop}px;
    height: 100vh
`;

const About = ({ paddingTop }: IAboutProps) => {
    return (
        <AboutContainer id="about" paddingTop={paddingTop}>
            <Title>Sobre mim</Title>
            <p>Olá, tenho 17 anos, e sou um desenvolvedor Front-End, derivado de uma paixão crescente que surgiu desde pequeno por programar. Comecei pelo básico – HTML, CSS, JS –, conheci e estudei outras linguagens como Java, C++ e Python. Logo, decidi me aprofundar no JavaScript e partir para NodeJS e ReactJS. No momento, estou me dedicando para estudar a fundo o framework React.</p>
        </AboutContainer>
    );
}

export default About;
