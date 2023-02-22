import React from "react";
import Header from "./components/Header";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import { Helmet, HelmetProvider } from "react-helmet-async";

const NAV_HEIGHT: number  = 70;

const App = () => {
  return (
    <>
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8"/>
                <title></title>
                <link  rel="stylesheet" href="style.css" />
            </Helmet>
        </HelmetProvider>
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
