import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import LoginModal from "../auth/LoginModal";
import { getBoat } from "../../services/boats";
import BoatDescription from "./BoatDescription";
import BoatHeader from "./BoatHeader";
import BoatHost from "./BoatHost";
import BoatMap from "./BoatMap";
import Carousel from "./Carousel";
import ReservationModal from "./ReservationModal";
import LoadingDots from "../Loader/LoadingDots";

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

export default function Boat({ setAuthenticated, authenticated }) {
    const { id } = useParams();
    const [anchorEl, setAnchorEl] = useState(null);
    const [boat, setBoat] = useState(null);
    const [openReservationModal, setOpenReservationModal] = useState(false);
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const open = Boolean(anchorEl);

    useEffect(() => {
        (async () => {
            if (id) {
                const fetchedBoat = await getBoat(id);
                setBoat(fetchedBoat);
            }
        })();
    }, [id]);

    const handleCloseReservationModal = () => setOpenReservationModal(false);

    const handleCloseLoginModal = () => {
        setOpenLoginModal(false);
    };

    const handleReserve = (e) => {
        e.preventDefault();
        if (!authenticated) {
            setOpenLoginModal(true);
        } else {
            setOpenReservationModal(true);
        }
    };

    return (
        <>
            {boat ? (
                <div>
                    <Carousel imageUrl={boat?.photos[0].mediaUrl}></Carousel>
                    <BoatHeaderContainer>
                        <BoatHeader boat={boat}></BoatHeader>
                        <div>
                            <ActionButton
                                onClick={handleReserve}
                                className="animate__animated animate__jackInTheBox"
                            >
                                Reserve Now
                            </ActionButton>
                            <LoginModal
                                setAuthenticated={setAuthenticated}
                                openModal={openLoginModal}
                                handleClose={handleCloseLoginModal}
                            />
                            <ReservationModal
                                boatPrice={boat?.price}
                                boatName={boat?.name}
                                boatId={boat?.id}
                                openModal={openReservationModal}
                                handleClose={handleCloseReservationModal}
                            />
                        </div>
                    </BoatHeaderContainer>
                    <SummaryContainer>
                        <BoatDescription
                            summary={boat?.summary}
                        ></BoatDescription>
                    </SummaryContainer>
                    <HostContainer>
                        <BoatHost host={boat?.owner}></BoatHost>
                    </HostContainer>

                    <BoatMap boat={boat} />
                </div>
            ) : (
                <LoadingDots></LoadingDots>
            )}
        </>
    );
}
