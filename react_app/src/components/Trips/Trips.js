import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrips } from "../../services/users";
import styled from "styled-components";
import ReservationCard from "./ReservationCard";

export default function Trips({}) {
    const { userId } = useParams();
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        (async () => {
            let fetchedReservations = await getTrips(userId);
            setReservations(fetchedReservations);
        })();
    }, []);

    const ReservationsPageContainer = styled.div`
        margin-top: 195px;
        margin-left: 305px;
    `;

    const ReservationsPageHeader = styled.h1`
        font-size: 1.4rem;
        font-weight: 600;
        color: #333;
    `;

    const ReservationsPageSubHeader = styled.h2`
        font-size: 1.2rem;
        font-weight: 500;
        color: #666;
    `;

    const ReservationsContainer = styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    `;

    return (
        <ReservationsPageContainer>
            <ReservationsPageHeader>Upcoming Plans</ReservationsPageHeader>
            <ReservationsPageSubHeader>
                You have upcoming trips. Manage and view your bookings here.
            </ReservationsPageSubHeader>
            <ReservationsContainer>
                {reservations
                    ? reservations.map((reservation) => (
                          <ReservationCard
                              key={reservation.id}
                              reservation={reservation}
                          ></ReservationCard>
                      ))
                    : null}
            </ReservationsContainer>
        </ReservationsPageContainer>
    );
}
