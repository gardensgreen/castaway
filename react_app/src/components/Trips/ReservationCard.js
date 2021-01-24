import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { Link } from "react-router-dom";

const ReservationCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 825px;
    height: 300px;
    background-color: #eeeeee;
    margin: 10px 0;
`;
const ReservationCardInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ReservationCardHeader = styled.span`
    margin-top: 15px;
    margin-left: 15px;
    font-size: 1rem;
    font-weight: 600;
`;

const ReservationAddressText = styled.span`
    margin-top: 5px;
    margin-left: 15px;
    font-size: 1rem;
    font-weight: 500;
    color: #444;
`;

const ReservationDetailText = styled.span`
    margin-top: 5px;
    margin-left: 15px;
    font-size: 1rem;
    font-weight: 600;
    color: #555;
`;

const ActionButton = styled.button`
    width: 160px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin-top: 25px;
    margin-right: 25px;
    height: 55px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 10px;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    background-image: linear-gradient(
        to right,
        #3f51b5,
        #4481eb,
        #04befe,
        #3f86ed
    );
    box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);

    &:hover {
        background-position: 100% 0;
        moz-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
    }

    &:focus {
        outline: none;
    }
`;

const BoatCard = styled.div`
    margin-top: 15px;
    display: flex;
`;

const BoatImage = styled.div`
    width: 300px;
    height: 200px;
    background-size: cover;
    background-position: center;
`;

const BoatInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const ClickArea = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const BoatName = styled.span`
    margin-left: 10px;
    font-size: 1.2rem;
    font-weight: 700;
`;

const BoatType = styled.span`
    margin-top: 5px;
    margin-left: 10px;
    font-size: 1rem;
    font-weight: 500;
`;

const BoatPrice = styled.span`
    margin-top: 15px;
    margin-left: 10px;
    font-size: 0.8rem;
    font-weight: 700;
`;

export default function ReservationCard({ reservation }) {
    return (
        <ReservationCardContainer>
            <ReservationCardInfoContainer>
                <ReservationCardHeader>
                    {moment(reservation.startDate).format("MMMM Do, YYYY") +
                        " - " +
                        moment(reservation.endDate).format("MMMM Do, YYYY")}
                </ReservationCardHeader>
                <ReservationAddressText>
                    {reservation.boat.address}
                </ReservationAddressText>
                <ReservationDetailText>
                    ${reservation.total + " "} -
                    {" " +
                        moment(reservation.endDate).diff(
                            reservation.startDate,
                            "days"
                        )}{" "}
                    days - {" " + reservation.boat.totalOccupancy + " "} guests
                </ReservationDetailText>
                <ClickArea to={`/boats/${reservation.boat.id}`}>
                    <BoatCard>
                        <BoatImage
                            style={{
                                backgroundImage: `url(${reservation.boat.photos[0].mediaUrl})`,
                            }}
                        />
                        <BoatInfo>
                            <BoatName>{reservation.boat.name}</BoatName>
                            <BoatType>{reservation.boat.boatType}</BoatType>
                            <BoatPrice>${reservation.price}/day</BoatPrice>
                        </BoatInfo>
                    </BoatCard>
                </ClickArea>
            </ReservationCardInfoContainer>
            <ActionButton>Cancel Trip</ActionButton>
        </ReservationCardContainer>
    );
}
