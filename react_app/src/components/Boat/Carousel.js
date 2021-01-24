import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 30px 100px;
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

    margin-top: 30px;
`;
export default function Carousel({ photos }) {
    const [media, setMedia] = useState([]);

    useEffect(() => {
        if (photos) {
            setMedia(photos.slice(1));
        }
    }, []);
    return (
        <>
            {media.length > 1 ? (
                <CarouselContainer>
                    <Header>MEDIA</Header>
                    {media &&
                        media.map((photo) => (
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
