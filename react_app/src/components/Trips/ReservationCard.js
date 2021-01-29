import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { Link } from "react-router-dom";
import { deleteReservation } from "../../services/reservations";

const ReservationCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1025px;
    height: 100%;
    background-color: #eeeeee;
    margin: 10px 0;
    box-shadow: rgba(18, 18, 20, 0.1) 0px 0px 1px,
        rgba(18, 18, 20, 0.2) 0px 2px 4px;
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
    margin-left: 10px;
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
    width: 130px;
    font-size: 16px;
    font-weight: 600;
    color: #3f51b5;
    cursor: pointer;
    margin-top: 15px;
    margin-right: 25px;
    height: 45px;
    text-align: center;
    border: 1px solid #3f51b5;
    background-size: 300% 100%;
    border-radius: 10px;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;

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
    background-color: #fafafa;
    width: 1025px;
`;

const BoatImage = styled.div`
    width: 300px;
    height: 200px;
    background-size: cover;
    background-position: center;
`;

const BoatInfo = styled.div`
    margin-top: 20px;
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
    font-weight: 800;
    text-transform: uppercase;
    color: #3f51fb;
`;

const BoatPrice = styled.span`
    margin-top: 65px;
    margin-left: 10px;
    font-size: 1rem;
    font-weight: 700;
`;

export default function ReservationCard({ reservation }) {
    const handleCancelRes = async (e) => {
        e.preventDefault();
        let deletedBoat = await deleteReservation(reservation.id);
        if (!deletedBoat.error) {
            window.location.reload();
        }
    };
    return (
        <ReservationCardContainer>
            <ReservationCardInfoContainer>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <ReservationCardHeader>
                            {moment(reservation.startDate).format(
                                "MMMM Do, YYYY"
                            ) +
                                " - " +
                                moment(reservation.endDate).format(
                                    "MMMM Do, YYYY"
                                )}
                        </ReservationCardHeader>
                        <ReservationDetailText>
                            ${reservation.total + " "} -
                            {" " +
                                moment(reservation.endDate).diff(
                                    reservation.startDate,
                                    "days"
                                )}{" "}
                            days - {" " + reservation.boat.totalOccupancy + " "}{" "}
                            guests
                        </ReservationDetailText>
                    </div>
                    <ActionButton onClick={handleCancelRes}>
                        Cancel Trip
                    </ActionButton>
                </div>
                <ClickArea to={`/boats/${reservation.boat.id}`}>
                    <BoatCard>
                        <BoatImage
                            style={{
                                backgroundImage: `url(${reservation.boat.photos[0].mediaUrl})`,
                            }}
                        />
                        <BoatInfo>
                            <BoatName>{reservation.boat.name}</BoatName>
                            <ReservationAddressText>
                                {reservation.boat.address}
                            </ReservationAddressText>
                            <BoatType>{reservation.boat.boatType}</BoatType>
                            <BoatPrice>${reservation.price}/day</BoatPrice>
                        </BoatInfo>
                    </BoatCard>
                </ClickArea>
            </ReservationCardInfoContainer>
        </ReservationCardContainer>
    );
}
