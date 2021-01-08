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

const BackgroundImage = styled.image`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    min-width: 100%;
    min-height: 80%;
    background-image: url("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fscsyachting.com%2Fwp-content%2Fuploads%2F2019%2F03%2Fyacht-people.jpg&f=1&nofb=1");
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
