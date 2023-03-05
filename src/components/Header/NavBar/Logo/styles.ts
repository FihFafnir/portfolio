import styled from "styled-components";

interface ILogoContainerProps {
    black: boolean;
}

const LogoContainer = styled.a`
    font-size: 20rem;
    margin-left: 20rem;
    color: ${({ black }: ILogoContainerProps) => black ? "#fff" : "#000"};
    text-decoration: none;
    font-weight: bolder;
`;

export default LogoContainer;
