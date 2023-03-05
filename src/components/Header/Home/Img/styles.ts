import styled from "styled-components";
import { applyInDevices } from "../../../styles";

const ImgContainer = styled.div`
    position: absolute;
    width: 35%;
    right: 0;
    top: 0;
    height: fit-content;
    opacity: 0.8;

    img {
        width: 100%;
        border-radius: 0 0 0 30%;
        box-shadow: 0px 0px 50px 5px rgba(255,255,255,.3);
    }

    // Mobile CSS

    ${
        applyInDevices(600, `
            top: 120px;
            right: 20px;
            img {
                border-radius: 30%;
            }
        `)
    }
`;

export default ImgContainer;
