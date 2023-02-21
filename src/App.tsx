import React from "react";
import Header from "./components/Header";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import { Helmet } from "react-helmet";

const NAV_HEIGHT: number  = 70;

const App = () => {
  return (
    <>
        <Helmet>
            <meta charSet="utf-8"/>
            <title></title>
            <link  rel="stylesheet" href="style.css" />
        </Helmet>
        <Header navHeight={NAV_HEIGHT} />
        <main>
            <Home paddingTop={NAV_HEIGHT} />
            <About paddingTop={NAV_HEIGHT} />
            <Skills />
            <Contact paddingTop={NAV_HEIGHT} />
        </main>
    </>
  );
}

export default App;
