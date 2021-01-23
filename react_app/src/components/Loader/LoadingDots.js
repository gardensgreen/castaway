import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

const DotWrapper = styled.div`
    display: flex;

    justify-content: center;
    padding-top: 30vh;
    width: 100vw;
    height: 100vh;
    margin-top: 200px;
`;

const Dot = styled.div`
    background-color: #3f51b5;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: 0 5px;
    /* Animation */
    animation: ${BounceAnimation} 0.5s linear infinite;
    animation-delay: ${(props) => props.delay};
`;
class LoadingDots extends Component {
    render() {
        return (
            <DotWrapper>
                <Dot delay="0s" />
                <Dot delay=".01s" />
                <Dot delay=".02s" />
            </DotWrapper>
        );
    }
}
export default LoadingDots;
