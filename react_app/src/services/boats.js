export const getAllBoats = async () => {
    const response = await fetch("/api/boats/", {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return await response.json();
};
