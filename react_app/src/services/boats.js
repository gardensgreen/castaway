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
