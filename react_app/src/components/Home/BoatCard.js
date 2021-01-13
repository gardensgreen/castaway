import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    margin-right: 30px;
    margin-bottom: 30px;
    border-radius: 4px;
    box-shadow: rgba(18, 18, 20, 0.1) 0px 0px 1px,
        rgba(18, 18, 20, 0.2) 0px 2px 4px;
    text-decoration: none;
`;

const CardImage = styled.div`
    border-radius: 3px;
    height: 200px;
    width: 100%;
    background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Mr8cajK9fFcq7qq2Mye76QHaEo%26pid%3DApi&f=1");
    background-size: cover;
    background-position: center;
`;

const FeaturesBar = styled.div`
    display: flex;
    margin: 10px 10px;
`;

const CardHeader = styled.span`
    font-size: 1.2em;
    font-weight: 700;
    margin: 0px 20px;
    margin-top: 10px;
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

const getAmenitiesList = (boat) => {
    let al = [];
    for (let a in boat.amenities) {
        if (boat.amenities[a] === true) al.push(a);
    }
    return al;
};

export default function BoatCard({ boat }) {
    const [amenities, setAmenities] = useState([]);

    useEffect(() => {
        const amenitiesList = getAmenitiesList(boat);
        setAmenities(amenitiesList);
        console.log(amenities);
    }, []);

    return (
        <CardContainer>
            <CardImage />
            <CardHeader>
                {boat.name.length <= 20
                    ? boat.name
                    : boat.name.slice(0, 20) + ".."}
            </CardHeader>

            <InfoHolder>
                <PeopleSpan>
                    <AmenityIcon className="fas fa-users fa-1x"></AmenityIcon>
                    {boat.totalOccupancy}
                </PeopleSpan>
                <FeaturesBar>
                    {amenities &&
                        amenities.map((a, idx) => {
                            switch (a) {
                                case "hasTv":
                                    return (
                                        <AmenityIcon
                                            key={idx}
                                            className="fas fa-tv fa-1x"
                                        ></AmenityIcon>
                                    );

                                case "hasKitchen":
                                    return (
                                        <AmenityIcon
                                            key={idx}
                                            className="fas fa-sink fa-1x"
                                        ></AmenityIcon>
                                    );

                                case "hasAirConditioning":
                                    return (
                                        <AmenityIcon
                                            key={idx}
                                            className="fas fa-fan fa-1x"
                                        ></AmenityIcon>
                                    );

                                case "hasInternet":
                                    return (
                                        <AmenityIcon
                                            key={idx}
                                            className="fas fa-wifi fa-1x"
                                        ></AmenityIcon>
                                    );

                                case "hasHeating":
                                    return (
                                        <AmenityIcon
                                            key={idx}
                                            className="fas fa-fire fa-1x"
                                        ></AmenityIcon>
                                    );

                                default:
                                    return null;
                            }
                        })}
                </FeaturesBar>
                <PriceSpan>${boat.price}/day</PriceSpan>
            </InfoHolder>
        </CardContainer>
    );
}
