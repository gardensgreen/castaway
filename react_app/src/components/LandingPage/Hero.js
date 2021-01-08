import React from "react";
import styled from "styled-components";

const BackgroundOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    min-width: 100%;
    min-height: 80%;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: -1;
`;

const BackgroundImage = styled.image`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    min-width: 100%;
    min-height: 80%;
    background-image: url("https://wallup.net/wp-content/uploads/2016/01/260688-landscape-boat-water-sea-sunset.jpg");
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
