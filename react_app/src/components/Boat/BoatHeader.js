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

const BoatDetailsContainer = styled.div`
    display: flex;
`;
const BoatType = styled.div`
    background-image: linear-gradient(
        to right,
        #3f86ed,
        #04befe,
        #4481eb,
        #3f51b5
    );
    width: 120px;
    font-size: 12px;

    font-weight: 600;
    height: 25px;
    text-align: center;
    padding-top: 10px;
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 0px;
    color: #fff;

    margin-top: 15px;
    margin-bottom: 15px;
    border: none;
    background-size: 300% 100%;
    border-radius: 10px;

    font-weight: 700;
    margin-right: 10px;
`;

const BoatDetail = styled.div`
    background-image: linear-gradient(
        to right,
        #3f86ed,
        #04befe,
        #4481eb,
        #3f51b5
    );
    width: 120px;
    font-size: 12px;

    font-weight: 600;
    height: 25px;
    text-align: left;
    padding-top: 10px;
    padding-bottom: 0px;
    color: #fff;

    margin-top: 15px;
    margin-bottom: 15px;
    border: none;
    background-size: 300% 100%;
    border-radius: 10px;

    font-weight: 700;
    margin-right: 10px;
`;

const BoatDetailLabel = styled.span`
    margin-left: 15px;
`;

const FeaturesBar = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;

    margin-top: 10px;
`;

const AmenityIcon = styled.i`
    justify-content: center;
    color: #888;
    margin-right: 16px;
    color: #3f51b5;
`;
const PeopleSpan = styled.span`
    font-size: 0.8rem;
    font-weight: 700;
    color: #111;
    margin: 0 20px 0 -5px;
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
                <BoatDetailsContainer>
                    <BoatType>{boat?.boatType}</BoatType>
                    <BoatDetail>
                        <i class="boat-detail-icon fas fa-ruler-combined"></i>
                        <BoatDetailLabel>{boat?.length} ft</BoatDetailLabel>
                    </BoatDetail>
                    <BoatDetail>
                        <i class="boat-detail-icon fas fa-bed"></i>
                        <BoatDetailLabel>
                            {boat?.totalBedrooms} bed
                        </BoatDetailLabel>
                    </BoatDetail>
                    <BoatDetail>
                        {" "}
                        <i class="boat-detail-icon fas fa-toilet"></i>
                        <BoatDetailLabel>
                            {boat?.totalBathrooms} bath
                        </BoatDetailLabel>
                    </BoatDetail>
                </BoatDetailsContainer>
                <FeaturesBar>
                    <AmenityIcon
                        style={{ color: "#222" }}
                        className="fas fa-users fa-1x"
                    ></AmenityIcon>
                    <PeopleSpan>{boat && boat.totalOccupancy}</PeopleSpan>
                    {amenities &&
                        amenities.map((a, idx) => {
                            switch (a) {
                                case "hasTv":
                                    return (
                                        <AmenityIcon
                                            key={idx}
                                            className="fas fa-tv fa-1.5x"
                                        ></AmenityIcon>
                                    );

                                case "hasKitchen":
                                    return (
                                        <AmenityIcon
                                            key={idx}
                                            className="fas fa-sink fa-1.5x"
                                        ></AmenityIcon>
                                    );

                                case "hasAirConditioning":
                                    return (
                                        <AmenityIcon
                                            key={idx}
                                            className="fas fa-fan fa-1.5x"
                                        ></AmenityIcon>
                                    );

                                case "hasInternet":
                                    return (
                                        <AmenityIcon
                                            key={idx}
                                            className="fas fa-wifi fa-1.5x"
                                        ></AmenityIcon>
                                    );

                                case "hasHeating":
                                    return (
                                        <AmenityIcon
                                            key={idx}
                                            className="fas fa-fire fa-1.5x"
                                        ></AmenityIcon>
                                    );

                                default:
                                    return null;
                            }
                        })}
                </FeaturesBar>
                {/* <Summary>{boat?.summary}</Summary> */}
            </BoatInfoContainer>
        </HeaderContainer>
    );
}
