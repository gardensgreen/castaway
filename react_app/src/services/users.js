export const getTrips = async (userId) => {
    let response = await fetch(`/api/users/${userId}/reservations`, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response.json();
};

export const getLikes = async (userId) => {
    let response = await fetch(`/api/users/${userId}/likes`, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response.json();
};
