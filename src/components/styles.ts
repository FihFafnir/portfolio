// Box

const box = `
    display: flex;
    justify-content: center;
`;

// Title

const title = `
    font-size: 35rem;
    font-weight: 900;
`;

// Section

const section = `
    ${box}
    height: 100vh;
    scroll-snap-align: center;
`;

// BlurredBackground

const blurredBackground = `
    position: fixed;
    top: 70px;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0;
    backdrop-filter: blur(2px);
    z-index: -1;
    background-color: rgba(0, 0, 0, .6);
    transform: translateX(-100vw);
    transition: opacity ease 0.8s;
`;

// Functions

const applyInDevices = (maxWidth: number, styles: string) => `
    @media only screen and (max-width: ${maxWidth}) {${styles}}
`;

export {
    box,
    title,
    section,
    blurredBackground,
    applyInDevices
}
