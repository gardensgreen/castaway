import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLikes } from "../../services/users";
import styled from "styled-components";
import BoatCard from "../Home/BoatCard";
import { Link } from "react-router-dom";

import LoadingDots from "../Loader/LoadingDots";

export default function Likes() {
    const { userId } = useParams();
    const [likes, setLikes] = useState([]);

    const PageTitle = styled.h1`
        margin-top: 175px;
        text-align: center;
        margin-right: 30px;
    `;

    const BoatList = styled.ul`
        display: flex;
        flex-wrap: wrap;
        max-width: 100%;
        justify-content: center;
        margin: 0;

        height: 100%;
        margin-top: 35px;
        overflow-x: hidden;
    `;

    const CardContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 90%;
        margin-right: 30px;
        margin-bottom: 30px;
        border-radius: 4px;
        box-shadow: rgba(18, 18, 20, 0.1) 0px 0px 1px,
            rgba(18, 18, 20, 0.2) 0px 2px 4px;
        text-decoration: none;
    `;

    const BoatLink = styled(Link)`
        text-decoration: none;
        color: inherit;
        width: 45%;
    `;
    const CardImage = styled.div`
        border-radius: 3px;
        height: 200px;
        width: 100%;

        background-size: cover;
        background-position: center;
    `;

    const FeaturesBar = styled.div`
        display: flex;
        margin: 10px 10px;
    `;

    const CardHeaderContainer = styled.div`
        display: flex;
        justify-content: space-between;
        width: 95%;
        height: 100%;
        align-items: center;
        margin-top: 10px;
    `;
    const CardHeader = styled.span`
        font-size: 1.2em;
        font-weight: 700;
        margin: 0px 20px;
    `;

    const AmenityIcon = styled.i`
        color: #666;
        margin-right: 6px;
    `;

    const InfoHolder = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 10px;
        border-top: 1px solid #c4c4c4;
    `;
    const PeopleSpan = styled.span`
        font-size: 1rem;
        font-weight: 700;
        margin: 10px 10px;
    `;
    const PriceSpan = styled.span`
        font-size: 1rem;
        font-weight: 700;
        margin: 10px 10px;
    `;

    useEffect(() => {
        (async () => {
            let fetchedLikes = await getLikes(userId);
            setLikes(fetchedLikes);
        })();
    });

    return (
        <>
            <PageTitle>Liked Boats</PageTitle>
            <BoatList>
                {likes ? (
                    likes.map((like) => (
                        <BoatLink to={`/boats/${like?.id}`}>
                            <CardContainer>
                                <CardImage
                                    style={{
                                        backgroundImage: `url(${like.photos[0].mediaUrl})`,
                                    }}
                                />
                                <CardHeaderContainer>
                                    <CardHeader>
                                        {like.name.length <= 20
                                            ? like.name
                                            : like.name.slice(0, 20) + ".."}
                                    </CardHeader>
                                </CardHeaderContainer>

                                <InfoHolder>
                                    <PeopleSpan>
                                        <AmenityIcon className="fas fa-users fa-1x"></AmenityIcon>
                                        {like.totalOccupancy}
                                    </PeopleSpan>
                                    <FeaturesBar></FeaturesBar>
                                    <PriceSpan>${like.price}/day</PriceSpan>
                                </InfoHolder>
                            </CardContainer>
                        </BoatLink>
                    ))
                ) : (
                    <LoadingDots></LoadingDots>
                )}
            </BoatList>
        </>
    );
}
