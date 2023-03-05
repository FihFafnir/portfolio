import React from "react";
import Header from "./components/Header";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { Helmet, HelmetProvider } from "react-helmet-async";

const App = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Alan Mateus - Portfólio</title>
                    <link rel="stylesheet" href="style.css" />
                </Helmet>
            </HelmetProvider>
            <Header />
            <main>
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </>
    );
};

export default App;
