import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getBoat } from "../../services/boats";
import BoatDescription from "./BoatDescription";
import BoatHeader from "./BoatHeader";
import BoatHost from "./BoatHost";
import BoatMap from "./BoatMap";
import Carousel from "./Carousel";

const BoatHeaderContainer = styled.div`
    display: flex;
    margin-right: 100px;
    justify-content: space-between;
`;

const HostContainer = styled.div`
    display: flex;
    margin-right: 100px;
    justify-content: space-between;
`;

const SummaryContainer = styled.div`
    display: flex;
    margin-right: 100px;
    margin-top: 20px;
    justify-content: space-between;
`;

const ActionButton = styled.button`
    width: 160px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin-top: 40px;
    height: 55px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 10px;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    background-image: linear-gradient(
        to right,
        #3f51b5,
        #4481eb,
        #04befe,
        #3f86ed
    );
    box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);

    &:hover {
        background-position: 100% 0;
        moz-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
    }

    &:focus {
        outline: none;
    }
`;

export default function Boat() {
    const { id } = useParams();
    const [boat, setBoat] = useState(null);

    useEffect(() => {
        (async () => {
            console.log(id);
            if (id) {
                const fetchedBoat = await getBoat(id);
                setBoat(fetchedBoat);
            }
        })();
    }, [id]);

    return (
        <div>
            <Carousel imageUrl={boat?.photos[0].mediaUrl}></Carousel>
            <BoatHeaderContainer>
                <BoatHeader boat={boat}></BoatHeader>
                <div>
                    <ActionButton className="animate__animated animate__jackInTheBox">
                        Reserve Now
                    </ActionButton>
                </div>
            </BoatHeaderContainer>
            <SummaryContainer>
                <BoatDescription summary={boat?.summary}></BoatDescription>
            </SummaryContainer>
            <HostContainer>
                <BoatHost host={boat?.owner}></BoatHost>
            </HostContainer>

            <BoatMap boat={boat} />
        </div>
    );
}
