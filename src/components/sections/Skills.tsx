import React, { useState } from "react";
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

const ICON_SIZE:number = 4;

interface ISkillsContainerProps {
    screenWidth: number;
}

const SkillsContainer = styled.section`
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
        height: ${({ screenWidth }: ISkillsContainerProps) => screenWidth * 0.16}px;
        margin: -15px -10px 15px -10px;
        transform: scale(.60);
        transition: all ease 1s;
        border-radius: 5px;
        z-index: 1;
    }

    .iconContainer:hover {
        background-color: #333;
        transform: scale(1);
        height: 300px;
        color: #eee;
        box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
        z-index: 3;
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
        width: 100%;
        height: 0;
        transition: all ease 1s;
    }

    .darkBackground {
        position: fixed;
        top: 0;
        left: 0;
        border: 1px solid #f00;
        background-color: rgba(0,0,0,.5);
        opacity: 0;
        width: 100%;
        height: 130%;
        z-index: 0;
        transition: opacity ease 1s;
    }

    .iconContainer:hover ~ .darkBackground {
        opacity: 1:
        z-index: 1;
    }

    // Laptop CSS

    @media only screen and (max-width: 992px) {
        .iconContainer {
            width: 25%;
            height: ${({ screenWidth }: ISkillsContainerProps) => screenWidth*0.25}px;
        }
    }

    // Tablet CSS

    @media only screen and (max-width: 768px) {
        height: 100%;
        padding-top: 120px;

        .iconContainer {
            width: 33%;
            height: ${({ screenWidth }: ISkillsContainerProps) => screenWidth*0.33}px;
        }
    }

    // Mobile CSS

    @media only screen and (max-width: 600px) {
        .iconContainer {
            height: ${({ screenWidth }: ISkillsContainerProps) => screenWidth*0.5}px;
        }
    }
`;

const Skills = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    window.addEventListener("resize", () => {
        const newScreenWidth: number = window.innerWidth;

        setScreenWidth(newScreenWidth);
    });

    return (
        <SkillsContainer id="skills" screenWidth={screenWidth}>
            <div className="skillsContent">
                <div className="iconContainer">
                    <DiHtml5
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="FF5722"
                    />
                    <p className="iconContent">HTML é a linguagem de marcação usada para criar e exibir conteúdo na web. Com ela, é possível definir a estrutura de uma página web, bem como adicionar texto, imagens, links e outros elementos interativos. É a base fundamental para o desenvolvimento de websites.</p>
                </div>
                <div className="iconContainer">
                    <DiCss3
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="2196F3"
                    />
                    <p className="iconContent">CSS é uma linguagem de estilo usada para controlar a apresentação visual de páginas web. Ela permite alterar o layout, cores, fontes, tamanhos e outros aspectos visuais de um site. É essencial para criar uma experiência visual agradável e consistente na web.</p>
                </div>
                <div className="iconContainer">
                    <DiJavascript
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="EDBB36"
                    />
                    <p className="iconContent">JavaScript é uma linguagem de programação de alto nível que é usada principalmente para criar interações dinâmicas em páginas web. É executada no lado do cliente, permitindo a criação de funções e comportamentos mais avançados, como animações, validações de formulário e atualizações em tempo real. É uma das principais linguagens de programação utilizadas para o desenvolvimento de aplicações web.</p>
                </div>
                <div className="iconContainer">
                    <SiTypescript
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="3178C6"
                    />
                    <p className="iconContent">TypeScript é uma linguagem de programação de alto nível que é baseada em JavaScript. Ela adiciona recursos de tipagem estática, interfaces e outros recursos de linguagem para melhorar a qualidade do código e a produtividade do desenvolvedor. É usado principalmente para o desenvolvimento de grandes aplicações web e é compatível com a maioria dos frameworks e bibliotecas JavaScript existentes.</p>
                </div>
                <div className="iconContainer">
                    <DiReact
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="61DBFB"
                    />
                    <p className="iconContent">React é uma biblioteca JavaScript usada para criar interfaces de usuário dinâmicas em páginas web. Ela permite a criação de componentes reutilizáveis e escaláveis, que podem ser atualizados em tempo real sem a necessidade de recarregar a página. É amplamente utilizado em aplicações web modernas, como redes sociais e aplicativos de comércio eletrônico.</p>
                </div>
                <div className="iconContainer">
                    <SiStyledcomponents
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="DE778F"
                    />
                    <p className="iconContent">Styled Components é uma biblioteca JavaScript que permite escrever estilos em CSS dentro dos próprios componentes React. Ela utiliza a técnica de CSS-in-JS, que torna mais fácil o gerenciamento de estilos em grandes projetos, além de permitir a criação de componentes com estilos mais encapsulados e reutilizáveis. É amplamente utilizado em aplicações React modernas.</p>
                </div>
                <div className="iconContainer">
                    <DiNodejs
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="66A060"
                    />
                    <p className="iconContent">Node.js é um ambiente de tempo de execução JavaScript de código aberto, baseado no mecanismo de JavaScript V8 do Google. Ele permite que o JavaScript seja executado fora de um navegador, o que o torna adequado para a construção de aplicações web do lado do servidor. Ele é amplamente utilizado para criar APIs, aplicativos de rede em tempo real, aplicações de linha de comando e outras aplicações de backend em JavaScript.</p>
                </div>
                <div className="iconContainer">
                    <DiGit
                        className="icon"
                        size={ICON_SIZE + "em"}
                        color="F05033"
                    />
                    <p className="iconContent">Git é um sistema de controle de versão distribuído, usado para rastrear mudanças no código fonte durante o desenvolvimento de software. Ele permite que os desenvolvedores trabalhem em equipe, gerenciem diferentes versões do código e resolvam conflitos de forma eficiente. É amplamente utilizado na indústria de desenvolvimento de software para controle de versão de código fonte.</p>
                </div>
                <div className="iconContainer">
                    <DiGithubBadge
                        className="icon"
                        size={ICON_SIZE + "em"}
                    />
                    <p className="iconContent">GitHub é uma plataforma web de hospedagem de código-fonte e gerenciamento de projetos baseada no sistema de controle de versão Git. Ela permite que os desenvolvedores colaborem em projetos de software, rastreiem e resolvam problemas e criem documentação de software. É amplamente utilizado para hospedar projetos de código aberto e como ferramenta de colaboração entre equipes de desenvolvimento.</p>
                </div>
                <div className="darkBackground" ></div>
            </div>
        </SkillsContainer>
    );
}

export default Skills;
