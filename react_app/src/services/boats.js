export const getAllBoats = async () => {
    const response = await fetch("/api/boats/", {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return await response.json();
};

export const getBoat = async (boatId) => {
    const response = await fetch(`/api/boats/${boatId}`, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return await response.json();
};

export const likeBoat = async (boatId) => {
    const response = await fetch(`/api/boats/${boatId}/likes`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
    });

    return await response.json();
};

export const reserveBoat = async (boatId, startDate, endDate, total) => {
    const response = await fetch(`/api/boats/${boatId}/reservations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            start_date: startDate,
            end_date: endDate,
            total,
        }),
    });

    return await response.json();
};
