import React from "react";
import Header from "./components/Header";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import { createGlobalStyle } from "styled-components";

const NAV_HEIGHT: number  = 70;

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    * {
        margin: 0;
        font-family: "Roboto", sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: #f8f8f8;
    }
`;;

const App = () => {
  return (
    <main>
        <GlobalStyle />
        <Header navHeight={NAV_HEIGHT} />
        <Home paddingTop={NAV_HEIGHT} />
        <About paddingTop={NAV_HEIGHT} />
        <Skills />
        <Contact paddingTop={NAV_HEIGHT} />
    </main>
  );
}

export default App;
