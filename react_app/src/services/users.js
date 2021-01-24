export const getTrips = async (userId) => {
    let response = await fetch(`/users/${userId}/reservations`, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response.json();
};
