import React from "react";
import Skill from "./Skill";
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
import SkillsContainer from "./styles";

const ICON_SIZE: number = 64;

const Skills = () => {
    return (
        <SkillsContainer id="skills" >
            <h1>Habilidades</h1>
            <div className="skills--content">
                <Skill description="HTML (Hypertext Markup Language) é uma linguagem de marcação usada para criar a estrutura e conteúdo de páginas da web.">
                    <DiHtml5
                        className="icon"
                        size={ICON_SIZE + "rem"}
                        color="FF5722"
                    />
                </Skill>
                <Skill description="CSS (Cascading Style Sheets) é uma linguagem usada para estilizar e formatar páginas da web escritas em HTML e define a aparência visual dos elementos na página, como fontes, cores e layout.">
                    <DiCss3
                        className="icon"
                        size={ICON_SIZE + "rem"}
                        color="2196F3"
                    />
                </Skill>
                <Skill description="JavaScript é uma linguagem de programação que é usada para adicionar interatividade e dinamismo a páginas da web, bem como para criar aplicativos web completos e outras soluções de software.">
                    <DiJavascript
                        className="icon"
                        size={ICON_SIZE + "rem"}
                        color="EDBB36"
                    />
                </Skill>
                <Skill description="TypeScript é uma extensão do JavaScript que adiciona tipagem estática e outras funcionalidades para ajudar na construção de aplicações mais robustas e escaláveis.">
                    <SiTypescript
                        className="icon"
                        size={ICON_SIZE + "rem"}
                        color="3178C6"
                    />
                </Skill>
                <Skill description="React é uma biblioteca JavaScript usada para construir interfaces de usuário (UI) em aplicações web, permitindo a criação de componentes reutilizáveis e atualizações em tempo real.">
                    <DiReact
                        className="icon"
                        size={ICON_SIZE + "rem"}
                        color="61DBFB"
                    />
                </Skill>
                <Skill description="Styled Components é uma biblioteca JavaScript que permite escrever estilos em CSS dentro dos próprios componentes React. Ela utiliza a técnica de CSS-in-JS, que torna mais fácil o gerenciamento de estilos.">
                    <SiStyledcomponents
                        className="icon"
                        size={ICON_SIZE + "rem"}
                        color="DE778F"
                    />
                </Skill>
                <Skill description="Node.js é um ambiente de tempo de execução (runtime) JavaScript que permite desenvolver aplicações do lado do servidor e ferramentas de linha de comando.">
                    <DiNodejs
                        className="icon"
                        size={ICON_SIZE + "rem"}
                        color="66A060"
                    />
                </Skill>
                <Skill description="Git é um sistema de controle de versão distribuído, usado para rastrear mudanças no código fonte durante o desenvolvimento de software.">
                    <DiGit
                        className="icon"
                        size={ICON_SIZE + "rem"}
                        color="F05033"
                    />
                </Skill>
                <Skill description="GitHub é uma plataforma web de hospedagem de código-fonte e gerenciamento de projetos baseada no sistema de controle de versão Git.">
                    <DiGithubBadge
                        className="icon"
                        size={ICON_SIZE + "rem"}
                    />
                </Skill>
                <div className="blurredBackground"></div>
            </div>
        </SkillsContainer>
    );
}

export default Skills;
