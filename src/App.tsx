import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Sections from "./components/Sections";
import Footer from "./components/Footer";

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
            <Sections />
            <Footer />
        </>
    );
};

export default App;
