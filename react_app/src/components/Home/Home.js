import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllBoats } from "../../services/boats";
import LoadingDots from "../Loader/LoadingDots";
import BoatCard from "./BoatCard";
import Map from "./Map";
import { useSearch } from "../../SearchContext";

const HomeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
    padding-top: 0px;
    padding-right: 0px;
    margin-right: 0px;
    margin-top: 175px;
`;

const BoatList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    max-width: 60%;
    height: 100%;

    overflow-x: hidden;
`;

const NoBoatsTitle = styled.h1`
    font-size: 1.5em;
    font-weight: 700;
    margin-left: 100px;
`;

const NoBoatsSubTitle = styled.h2`
    font-size: 1em;
    font-weight: 500;
    margin-left: 100px;
`;
export default function Home({ user }) {
    const searchTerm = useSearch();
    const [boats, setBoats] = useState();
    useEffect(() => {
        (async () => {
            const fetchedBoats = await getAllBoats();

            setBoats(fetchedBoats);
        })();
    }, []);

    window.document.title = "Castaway | Boat Rentals";

    return (
        <>
            {searchTerm === "Miami, FL, USA" ? (
                <>
                    {boats ? (
                        <HomeContainer>
                            <BoatList>
                                {boats &&
                                    boats.map((boat) => (
                                        <BoatCard
                                            key={boat.id}
                                            boat={boat}
                                            user={user}
                                        />
                                    ))}
                            </BoatList>
                            <Map boats={boats} />
                        </HomeContainer>
                    ) : (
                        <LoadingDots />
                    )}
                </>
            ) : (
                <HomeContainer>
                    <div>
                        <NoBoatsTitle>
                            No Castaway Results for "{searchTerm}"
                        </NoBoatsTitle>
                        <NoBoatsSubTitle>
                            Try searching for "Miami" or moving/zooming on the
                            map.
                        </NoBoatsSubTitle>
                    </div>
                    <Map />
                </HomeContainer>
            )}
        </>
    );
}
