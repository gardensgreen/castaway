import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getBoat } from "../../services/boats";
import BoatHeader from "./BoatHeader";
import BoatMap from "./BoatMap";
import Carousel from "./Carousel";

export default function Boat() {
    const { id } = useParams();
    const [boat, setBoat] = useState(null);

    const BoatHeaderContainer = styled.div`
        display: flex;
        margin-right: 100px;
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

    useEffect(() => {
        (async () => {
            const fetchedBoat = await getBoat(id);
            setBoat(fetchedBoat);
        })();
    }, [id]);

    return (
        <div>
            <Carousel imageUrl={boat && boat.photos[0].mediaUrl}></Carousel>
            <BoatHeaderContainer>
                <BoatHeader boat={boat}></BoatHeader>
                <ActionButton className="animate__animated animate__jackInTheBox">
                    Reserve Now
                </ActionButton>
            </BoatHeaderContainer>
            <BoatMap boat={boat} />
        </div>
    );
}
