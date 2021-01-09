import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const AnimatedHeader = styled(animated.h1)`
    font-weight: 600;
`;
const Animation = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });
    return <AnimatedHeader style={props}>I will fade in </AnimatedHeader>;
};

export default Animation;
