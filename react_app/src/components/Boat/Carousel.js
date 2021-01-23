import React from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 180px;
    margin-right: 180px;
`;

const CarouselImageContainer = styled.div`
    padding: 15px;
    height: 100%;
    width: 100%;
`;

const CarouselImage = styled.div`
    border-radius: 14px;
    height: 200px;
    width: 100%;

    background-size: cover;
    background-position: center;
`;
const Header = styled.span`
    font-size: 1rem;
    color: #999;
    font-weight: 700;
    margin-right: 20px;
    margin-top: 10px;
`;
export default function Carousel({ photos }) {
    return (
        <>
            {photos[2] ? (
                <CarouselContainer>
                    {photos &&
                        photos.slice(1).map((photo) => (
                            <CarouselImageContainer>
                                <CarouselImage
                                    style={{
                                        backgroundImage: `url(${photo.mediaUrl})`,
                                    }}
                                ></CarouselImage>
                            </CarouselImageContainer>
                        ))}
                </CarouselContainer>
            ) : null}
        </>
    );
}
