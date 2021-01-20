import React from "react";
import styled from "styled-components";

const Image = styled.div`
    width: 100%;
    height: 600px;
    z-index: 3;
    background-position: center;
    background-size: cover;
    margin: 0;
    margin-top: -20px;
    padding: 0;
`;
export default function Carousel({ imageUrl }) {
    // TODO: Fix random get request sent
    return <Image style={{ backgroundImage: `url(${imageUrl})` }} />;
}
