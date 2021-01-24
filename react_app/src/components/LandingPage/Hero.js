import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Particle from "react-particles-js";

const Particles = styled(Particle)`
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -2;
`;

const HeroBackground = styled.div`
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -3;
    background-color: #abe9cd;
    background-image: linear-gradient(315deg, #3eadcf 0%, #abe9cd 74%);
`;
const HeroImage = styled.img`
    width: 55%;
    height: 55%;
    margin-left: -5%;
    margin-right: 10%;
    margin-bottom: 20px;
`;

const HeroContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 10%;
    padding-right: 10%;
    max-width: 100%;
    margin-top: 175px;
    z-index: -2;
`;

const HeroHeader = styled.h1`
    font-weight: 600;
    font-size: 5rem;
    line-height: 5rem;
    width: 750px;
    color: #3f51b5;

    margin-top: 5px;
`;

const HeroSubHeader = styled.h2`
    font-weight: 400;
    font-size: 1.25rem;
    margin-top: 5px;
    width: 400px;
    color: #666;
    margin-bottom: 2em;
`;

const ActionButton = styled.button`
    width: 160px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin-top: 10px;
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

const HeroContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Description = styled.p`
    border-left: 6px solid #3f51b5;
    padding: 5px 10px;
    margin-left: 5px;
    color: #666;
`;

export default function Hero() {
    const history = useHistory();

    return (
        <>
            <HeroContainer>
                <HeroContentContainer>
                    <Description className="animate__animated animate__slideInLeft">
                        A simple yet powerful boat rental platform.
                    </Description>
                    <HeroHeader className="animate__animated animate__fadeIn main__header">
                        Embark on your next journey.
                    </HeroHeader>
                    <HeroSubHeader className="animate__animated animate__fadeIn sub__header">
                        Find your adventure on a coast near you.
                    </HeroSubHeader>
                    <ActionButton
                        onClick={(e) => history.push("/home")}
                        className="animate__animated animate__jackInTheBox"
                    >
                        Get Started
                    </ActionButton>
                    {/* <SignupModal
                        setAuthenticated={setAuthenticated}
                        openModal={openSignupModal}
                        handleClose={handleCloseSignupModal}
                    /> */}
                </HeroContentContainer>
                <HeroImage
                    className="animate__animated animate__tada animate_infinite"
                    src="./vacation2.png"
                />
            </HeroContainer>
            <HeroBackground />
            <Particles
                className="particles"
                params={{
                    particles: {
                        color: {
                            value: "#3f86ed",
                        },
                        number: {
                            value: 30,
                        },
                        size: {
                            value: 4,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                    },
                }}
            />
        </>
    );
}
