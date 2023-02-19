import React from "react";
import styled from "styled-components";

interface IPropsContact {
    paddingTop: number;
}

const ContactContainer = styled.section`
    padding-top: ${({ paddingTop }: IPropsContact) => paddingTop}px;
    height: 100vh;
`;

const Contact = ({ paddingTop }: IPropsContact) => {
    return (
        <ContactContainer id="contact" paddingTop={paddingTop}>
            <h2>Olá, meu nome é</h2>
            <h1>Alan Mateus.</h1>
        </ContactContainer>
    );
}

export default Contact;

