import React from "react";
import styled from "styled-components";

const BackgroundOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    min-width: 100%;
    min-height: 80%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: -1;
`;

const BackgroundImage = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    min-width: 100%;
    min-height: 80%;
    background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsandpeoplecommunication.files.wordpress.com%2F2012%2F10%2F2-1-model-inside.jpg&f=1&nofb=1");
    background-position: center;
    background-size: cover;
    z-index: -2;
`;
export default function Hero() {
    return (
        <>
            <BackgroundImage />
            <BackgroundOverlay />
        </>
    );
}
