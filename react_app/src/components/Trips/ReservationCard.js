import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";

import MomentUtils from "@date-io/moment";

const ReservationCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    width: 60%;
    height: 300px;
    background-color: #eeeeee;
`;

const ReservationCardHeader = styled.span`
    margin-top: 15px;
    margin-left: 15px;
    font-size: 1rem;
    font-weight: 600;
`;

const ReservationAddressText = styled.span`
    margin-top: 15px;
    margin-left: 15px;
    font-size: 1rem;
    font-weight: 500;
    color: #444;
`;

export default function ReservationCard({ reservation }) {
    return (
        <ReservationCardContainer>
            <ReservationCardHeader>
                {moment(reservation.startDate).format("MMMM Do, YYYY") +
                    " - " +
                    moment(reservation.endDate).format("MMMM Do, YYYY")}
            </ReservationCardHeader>
            <ReservationAddressText>
                {reservation.boat.address}
            </ReservationAddressText>
        </ReservationCardContainer>
    );
}
