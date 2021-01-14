import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBoat } from "../../services/boats";

export default function Boat() {
    const { id } = useParams();
    const [boat, setBoat] = useState(null);

    useEffect(() => {
        (async () => {
            const fetchedBoat = await getBoat(id);
            setBoat(fetchedBoat);
        })();
    }, [id]);

    return <div></div>;
}
