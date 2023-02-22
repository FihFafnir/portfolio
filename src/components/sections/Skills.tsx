import React from "react";
import styled from "styled-components";
import {
    DiHtml5,
    DiCss3,
    DiJavascript,
    DiReact,
    DiNodejs,
    DiGit,
    DiGithubBadge
} from "react-icons/di";
import { SiTypescript, SiStyledcomponents } from "react-icons/si";
import { BlurredBackground } from "../GenericComponents";

const ICON_SIZE:number = 4;

const SkillsContainer = styled.section`
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;

    .skillsContent {
        display: flex;
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
    }

    .iconContainer {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        background-color: #ddd;
        width: 16%;
        height: 16vw;
        margin: -15px -10px 15px -10px;
        transform: scale(.60);
        transition: all ease 1s;
        border-radius: 5px;
    }

    .iconContainer:hover {
        background-color: #333;
        transform: scale(1);
        height: 340px;
        color: #eee;
        box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
        z-index: 3;
    }

    .blurredBackground {
        z-index: 1;
    }

    .iconContainer:hover ~ .blurredBackground {
        opacity: 1;
        height: 100vh;
    }

    .icon {
        size: 4em;
        transition: transform ease 1s;
    }

    .iconContainer:hover > .icon {
        transform: translateY(-90px);
    }

    .iconContent {
        position: absolute;
        top: 120px;
        text-align: justify;
        font-size: 11pt;
        width: 80%;
        height: 0;
        opacity: 0;
    }

    .iconContainer:hover > .iconContent {
        height: min-content;
        opacity: 1;
        transition: opacity 1s ease 0.5s;
    }

    // Laptop CSS

    @media only screen and (max-width: 992px) {
        .iconContainer {
            width: 25%;
            height: 25vw;
        }
    }

    // Tablet CSS

    @media only screen and (max-width: 768px) {
        height: 100%;
        padding-top: 120px;

        .iconContainer {
            width: 33%;
            height: 33vw;
        }
    }

    // Mobile CSS

    @media only screen and (max-width: 600px) {
        .iconContainer {
            width: 50%;
            height: 50vw;
        }
    }
`;

const Skills = () => {
    return (
        <SkillsContainer id="skills">
            <div className="skillsContent">
                <div className="iconContainer">
                    <DiHtml5
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="FF5722"
                    />
                    <p className="iconContent">HTML (Hypertext Markup Language) é uma linguagem de marcação usada para criar a estrutura e conteúdo de páginas da web.</p>
                </div>
                <div className="iconContainer">
                    <DiCss3
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="2196F3"
                    />
                    <p className="iconContent">CSS (Cascading Style Sheets) é uma linguagem usada para estilizar e formatar páginas da web escritas em HTML e define a aparência visual dos elementos na página, como fontes, cores e layout.</p>
                </div>
                <div className="iconContainer">
                    <DiJavascript
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="EDBB36"
                    />
                    <p className="iconContent">JavaScript é uma linguagem de programação que é usada para adicionar interatividade e dinamismo a páginas da web, bem como para criar aplicativos web completos e outras soluções de software.</p>
                </div>
                <div className="iconContainer">
                    <SiTypescript
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="3178C6"
                    />
                    <p className="iconContent">TypeScript é uma extensão do JavaScript que adiciona tipagem estática e outras funcionalidades para ajudar na construção de aplicações mais robustas e escaláveis.</p>
                </div>
                <div className="iconContainer">
                    <DiReact
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="61DBFB"
                    />
                    <p className="iconContent">React é uma biblioteca JavaScript usada para construir interfaces de usuário (UI) em aplicações web, permitindo a criação de componentes reutilizáveis e atualizações em tempo real.</p>
                </div>
                <div className="iconContainer">
                    <SiStyledcomponents
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="DE778F"
                    />
                    <p className="iconContent">Styled Components é uma biblioteca JavaScript que permite escrever estilos em CSS dentro dos próprios componentes React. Ela utiliza a técnica de CSS-in-JS, que torna mais fácil o gerenciamento de estilos.</p>
                </div>
                <div className="iconContainer">
                    <DiNodejs
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="66A060"
                    />
                    <p className="iconContent">Node.js é um ambiente de tempo de execução (runtime) JavaScript que permite desenvolver aplicações do lado do servidor e ferramentas de linha de comando.</p>
                </div>
                <div className="iconContainer">
                    <DiGit
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="F05033"
                    />
                    <p className="iconContent">Git é um sistema de controle de versão distribuído, usado para rastrear mudanças no código fonte durante o desenvolvimento de software.</p>
                </div>
                <div className="iconContainer">
                    <DiGithubBadge
                        className="icon"
                        size={ICON_SIZE + "em"}
                    />
                    <p className="iconContent">GitHub é uma plataforma web de hospedagem de código-fonte e gerenciamento de projetos baseada no sistema de controle de versão Git.</p>
                </div>
                <BlurredBackground />
            </div>
        </SkillsContainer>
    );
}

export default Skills;
