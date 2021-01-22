import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllBoats } from "../../services/boats";
import LoadingDots from "../Loader/LoadingDots";
import BoatCard from "./BoatCard";
import Map from "./Map";

const HomeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
    padding-top: 0px;
    padding-right: 0px;
    margin-right: 0px;
`;

const BoatList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    max-width: 60%;
    height: 100vh;
    overflow: scroll;
    overflow-x: hidden;
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
        <>
            {boats ? (
                <HomeContainer>
                    <BoatList>
                        {boats &&
                            boats.map((boat) => (
                                <BoatCard key={boat.id} boat={boat} />
                            ))}
                    </BoatList>
                    <Map boats={boats} />
                </HomeContainer>
            ) : (
                <LoadingDots></LoadingDots>
            )}
        </>
    );
}
