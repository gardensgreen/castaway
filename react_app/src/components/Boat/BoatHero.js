import React from "react";
import styled from "styled-components";

const Image = styled.div`
    width: 100%;
    height: 610px;
    z-index: 3;
    background-position: center;
    background-size: cover;
    margin: 0;
    margin-top: 155px;
    padding: 0;
`;
export default function BoatHero({ imageUrl }) {
    return (
        <>
            {imageUrl ? (
                <Image style={{ backgroundImage: `url(${imageUrl})` }} />
            ) : null}
        </>
    );
}
