import React, { useState, useEffect } from "react";
import { animated, useTransition, config } from "react-spring";
import useScrollTo from "react-spring-scroll-to-hook";
import styled from "styled-components";

import { BiArrowToTop } from "react-icons/bi";

const Top = () => {
    const [scrolling, setScrolling] = useState(true);

    useEffect(() => {
        window.onscroll = () => {
            setScrolling(true);
        };
    }, [scrolling]);

    if (scrolling) {
        setTimeout(() => {
            setScrolling(false);
        }, 5000);
    }

    const transitions = useTransition(scrolling, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: scrolling,
        delay: 100,
        config: config.slow,
    });

    const { scrollTo }: any = useScrollTo(config.slow);

    return (
        <>
            {transitions((styles, item) =>
                item ? (
                    <TopSt style={styles} onClick={scrollTo}>
                        <BiArrowToTop />
                    </TopSt>
                ) : null
            )}
        </>
    );
};

export default Top;

const TopSt = styled(animated.button)`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;

    svg {
        width: 80%;
        height: 80%;
        padding: 10%;

        fill: black;
        stroke: white;
    }

    cursor: pointer;
    color: white;
    border: none;
    outline: 2px solid hsla(34, 25%, 0%, 0.3);
    outline-offset: 5px;
    background-color: hsla(34, 25%, 55%, 1);

    z-index: 60;
`;
