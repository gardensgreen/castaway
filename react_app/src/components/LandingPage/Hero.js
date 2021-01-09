import React from "react";
import styled from "styled-components";
import Animation from "./Animation";
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
    width: 50%;
    height: 50%;
    margin-left: 25%;
    margin-right: 10%;
    margin-top: -3%;
`;

const HeroContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 10%;
    margin-right: 10%;

    z-index: -2;

    padding: 100px;
`;

const HeroHeader = styled.h1`
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 2.5rem;
    width: 400px;
    color: #3f51b5;
`;

const HeroSubHeader = styled.h2`
    font-weight: 400;
    font-size: 1.25rem;
    margin-top: 5px;
    width: 400px;
    color: #555;
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
`;

export default function Hero() {
    return (
        <>
            <HeroContainer>
                <HeroContentContainer>
                    <HeroHeader>Embark on your next journey.</HeroHeader>
                    <HeroSubHeader>
                        Find your adventure at the nearest marina near you.
                    </HeroSubHeader>
                    <ActionButton>Get Started</ActionButton>
                </HeroContentContainer>
                <HeroImage
                    className="animate__animated animate__tada"
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
