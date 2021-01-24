export async function deleteReservation(reservationId) {
    let response = await fetch(`/api/reservations/${reservationId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return await response.json();
}
