import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin-right: 30px;
    margin-bottom: 30px;
    border-radius: 3px;
    border: 1px solid black;
`;

const CardImage = styled.div`
    border-radius: 3px;
    height: 300px;
    width: 400px;
    background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Mr8cajK9fFcq7qq2Mye76QHaEo%26pid%3DApi&f=1");
    background-size: cover;
    background-position: center;
`;

const FeaturesBar = styled.div`
    display: flex;
`;

const CardHeader = styled.span`
    font-size: 1.4em,
    font-weight: 500
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
    }, []);

    return (
        <CardContainer>
            <CardImage />
            <CardHeader>{boat.summary}</CardHeader>
            <FeaturesBar>
                {amenities &&
                    amenities.map((a, idx) => {
                        switch (a) {
                            case "hasTv":
                                return (
                                    <i
                                        key={idx}
                                        className="fab fa-tv fa-1x"
                                    ></i>
                                );

                            case "hasKitchen":
                                return (
                                    <i
                                        key={idx}
                                        className="fab fa-kitchen fa-1x"
                                    ></i>
                                );

                            case "hasAirConditioning":
                                return (
                                    <i
                                        key={idx}
                                        className="fab fa-air fa-1x"
                                    ></i>
                                );

                            case "hasInternet":
                                return (
                                    <i
                                        key={idx}
                                        className="fab fa-info fa-1x"
                                    ></i>
                                );

                            case "hasHeating":
                                return (
                                    <i
                                        key={idx}
                                        className="fab fa-fire fa-1x"
                                    ></i>
                                );

                            default:
                                return null;
                        }
                    })}
            </FeaturesBar>
        </CardContainer>
    );
}
