import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Home from "./Home";

const Header = () => {
    return (
        <header>
            <NavBar />
            <Home />
        </header>
    );
}

export default Header;
