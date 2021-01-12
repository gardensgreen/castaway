import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllBoats } from "../../services/boats";
import BoatCard from "./BoatCard";

const HomeContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 30px;
`;

const BoatList = styled.li`
    display: flex;
    flex-wrap: wrap;
    min-width: 100%;
`;
export default function Home() {
    const [boats, setBoats] = useState();

    useEffect(() => {
        (async () => {
            const fetchedBoats = await getAllBoats();

            setBoats(fetchedBoats);
        })();
    }, []);

    return (
        <HomeContainer>
            <BoatList>
                {boats &&
                    boats.map((boat) => <BoatCard key={boat.id} boat={boat} />)}
            </BoatList>
        </HomeContainer>
    );
}
