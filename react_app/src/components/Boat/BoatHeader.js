import React, { useState, useEffect } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 30px 100px;
`;

const Header = styled.span`
    font-size: 1rem;
    color: #999;
    font-weight: 700;
    margin-right: 20px;
    margin-top: 10px;
`;

const BoatInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const BoatTitle = styled.span`
    font-size: 2rem;
    color: #222;
    font-weight: 700;
`;

const BoatAddress = styled.span`
    font-size: 1.3rem;
    color: #777;
    font-weight: 700;
`;

const FeaturesBar = styled.div`
    display: flex;
    flex-flow: row wrap;

    margin-top: 10px;
`;

const AmenityIcon = styled.i`
    justify-content: center;
    color: #888;
    margin-right: 16px;
`;

const getAmenitiesList = (boat) => {
    let al = [];
    if (boat) {
        for (let a in boat.amenities) {
            if (boat.amenities[a] === true) al.push(a);
        }
    }
    return al;
};

export default function BoatHeader({ boat }) {
    const [amenities, setAmenities] = useState([]);

    useEffect(() => {
        const amenitiesList = getAmenitiesList(boat);
        setAmenities(amenitiesList);
    }, [boat]);
    return (
        <HeaderContainer>
            <Header>THE BOAT</Header>
            <BoatInfoContainer>
                <BoatTitle>{boat && boat.name.toUpperCase()}</BoatTitle>
                <BoatAddress>{boat && boat.address.toUpperCase()}</BoatAddress>
                <FeaturesBar>
                    {amenities &&
                        amenities.map((a, idx) => {
                            switch (a) {
                                case "hasTv":
                                    return (
                                        <AmenityIcon
                                            style={{ color: "#FF99AA" }}
                                            key={idx}
                                            className="fas fa-tv fa-1.5x"
                                        ></AmenityIcon>
                                    );

                                case "hasKitchen":
                                    return (
                                        <AmenityIcon
                                            style={{ color: "#99FFCC" }}
                                            key={idx}
                                            className="fas fa-sink fa-1.5x"
                                        ></AmenityIcon>
                                    );

                                case "hasAirConditioning":
                                    return (
                                        <AmenityIcon
                                            style={{ color: "#99DDFF" }}
                                            key={idx}
                                            className="fas fa-fan fa-1.5x"
                                        ></AmenityIcon>
                                    );

                                case "hasInternet":
                                    return (
                                        <AmenityIcon
                                            style={{ color: "#D580FF" }}
                                            key={idx}
                                            className="fas fa-wifi fa-1.5x"
                                        ></AmenityIcon>
                                    );

                                case "hasHeating":
                                    return (
                                        <AmenityIcon
                                            style={{ color: "#FF9999" }}
                                            key={idx}
                                            className="fas fa-fire fa-1.5x"
                                        ></AmenityIcon>
                                    );

                                default:
                                    return null;
                            }
                        })}
                </FeaturesBar>
            </BoatInfoContainer>
        </HeaderContainer>
    );
}
