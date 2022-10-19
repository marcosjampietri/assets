import { useState } from "react";
import styled from "styled-components";
import { animated, useSpring, useTransition, config } from "react-spring";

import { Margin } from "../../styles/globalSC";
import { useInView } from "react-intersection-observer";
import { BiCheck } from "react-icons/bi";

const Numbers = () => {
    const optn = {
        threshold: [0.3],
        triggerOnce: true,
    };
    const [refV, inView] = useInView(optn);

    const { n1, n2, n3, n4 } = useSpring({
        n1: inView ? 300 : 0,
        n2: inView ? 85 : 0,
        n3: inView ? 10 : 0,
        n4: inView ? 210 : 0,
        delay: 700,
        config: config.molasses,
    });
    const transitions = useTransition(inView, {
        from: { y: 200, opacity: 0 },
        enter: { y: 0, opacity: 1 },
        leave: { y: 0, opacity: 0 },
        config: config.molasses,
    });

    const prices = [
        {
            name: "Off-Peak",
            price: "39.90",
            includes: ["Full Equipment", "Unlimited Time"],
            path: "",
            tx: "Lorem ipsum dolor sit amet.",
            n: n1,
        },
        {
            name: "Core",
            price: "49.90",
            includes: ["Full Equipment", "Unlimited Time", "Lorem", "Ipsum"],
            path: "",
            tx: "Lorem ipsum dolor sit amet.",
            n: n2,
        },
        {
            name: "Pro",
            price: "79.90",
            includes: [
                "Full Equipment",
                "Unlimited Time",
                "Lorem",
                "Ipsum",
                "Dolor",
                "Amet",
            ],
            path: "",
            tx: "Lorem ipsum dolor sit amet.",
            n: n3,
        },
    ];

    const [activePlan, setactivePlan] = useState(1);

    return (
        <Section ref={refV} id="Prices">
            <Margin>
                <Title>
                    <p style={{ fontFamily: "Bebas Neue" }}>OUR PLANS</p>
                    <h2>Choose the best fit for you</h2>
                </Title>
                {transitions((styles, item) =>
                    item ? (
                        <Box style={{ ...styles }}>
                            {prices.map((item, i) => (
                                <Price
                                    key={i}
                                    htmlFor={`#${i}`}
                                    className={`${
                                        activePlan == i ? "active" : null
                                    }`}
                                >
                                    <Select>
                                        <input
                                            type="radio"
                                            name="option"
                                            value={i}
                                            checked={activePlan == i}
                                            id={`#${i}`}
                                            onChange={() => {
                                                setactivePlan(i);
                                            }}
                                        />
                                        <div>{`${
                                            activePlan == i ? "" : ""
                                        }`}</div>
                                    </Select>
                                    <h3>{item.name}</h3>
                                    <p>{item.tx}</p>
                                    <span>
                                        <span>£{item.price}</span>
                                        <sub> / Month</sub>
                                    </span>
                                    <Includes>
                                        {item.includes.map((inc, i) => (
                                            <li key={i}>
                                                <BiCheck />
                                                <p>{inc}</p>
                                            </li>
                                        ))}
                                    </Includes>
                                </Price>
                            ))}
                        </Box>
                    ) : null
                )}
            </Margin>
        </Section>
    );
};

export default Numbers;

const Section = styled.section`
    width: 100vw;
    // min-height: 100vh;
    padding: 70px 0px;

    background: white;

    display: flex;
    align-items: center;
`;

const Title = styled.div`
    width: 100%;
    margin-bottom: 40px;

    background: hsla(348, 100%, 0%, 0);
    color: white;

    display: flex;
    align-content: center;
    flex-direction: column;

    p,
    h2 {
        text-align: center;
        margin-bottom: 1em;
    }

    p {
        letter-spacing: 2px;
        color: red;
    }

    h2 {
        font-size: clamp(27px, 5vw, 40px);
        font-weight: 600;
        color: hsla(0, 0%, 30%, 1);
    }
`;
const Box = styled(animated.div)`
    width: 100%;
    height: 500px;
    padding: 10px;

    background: hsla(348, 0%, 100%, 1);

    display: flex;
    justify-content: center;
    align-items: center;

    .active {
        transition: 0.5s;
        transform: scale(1.15);
        z-index: 2;
        background: hsla(348, 0%, 0%, 1);

        outline: 2px solid hsla(348, 100%, 50%, 1);
        outline-offset: 8px;
        box-shadow: 2px 5px 15px 15px hsla(0, 0%, 0%, 0.3);

        h3 {
            transition: 0.5s;
            color: hsla(0, 0%, 100%, 1);
        }

        p {
            transition: 0.5s;
            color: hsla(0, 0%, 70%, 1);
        }

        div {
            transition: 0.5s;
            background: hsla(148, 70%, 40%, 1);
        }
        span {
            span {
            }
            sub {
                transition: 0.5s;
                color: hsla(348, 0%, 70%, 1);
            }
        }

        ul {
            li {
                transition: 0.5s;
                color: hsla(0, 0%, 30%, 1);
                border-bottom: 1px solid hsla(0, 0%, 20%, 1);
                p {
                }
                svg {
                }
            }
        }
    }
`;

const Price = styled.label`
    transition: 0.5s;
    flex: 1 1 33%;
    width: 33%;
    height: 100%;
    margin: 0px 1vw;
    padding: 10px 5px;

    background: hsla(348, 0%, 95%, 1);
    outline: 2px solid hsla(348, 100%, 50%, 0);
    outline-offset: 0px;
    box-shadow: 2px 5px 15px 15px hsla(0, 0%, 0%, 0);

    h3,
    p {
        text-align: center;
        margin-bottom: 0.8em;
    }

    h3 {
        font-family: Bebas Neue;
        font-weight: 100;
        color: hsla(0, 0%, 20%, 1);
        letter-spacing: 2px;
        font-size: 22px;
        line-height: 0.8em;
    }

    p {
        font-family: Montserrat, Sans-Serif;
        font-weight: 400;
        font-size: 14px;
        color: hsla(0, 0%, 50%, 1);
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin: 2vw 0px;
        span {
            margin: 0px 5px;
            font-weight: 600;
            font-size: clamp(20px, 5vw, 40px);
            color: hsla(348, 100%, 50%, 1);
        }
        sub {
            color: hsla(348, 0%, 50%, 1);
        }
    }
`;

const Select = styled.div`
    width: 100px;
    margin-bottom: 10px;
    padding: 10px;

    border-radius: 5px;
    background: hsla(348, 0%, 50%, 1);

    opacity: 0;

    display: flex;
    justify-content: center;

    // input {
    //      :checked {
    // }}

    div {
        margin: 0px 10px;
        fonte-size: 10px;
    }
`;

const Includes = styled(animated.ul)`
    li {
        position: relative;
        height: 40px;
        border-bottom: 1px solid hsla(0, 0%, 80%, 1);

        // margin: 15px 0px;
        color: hsla(0, 0%, 50%, 1);

        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            font-size: 12px;
            width: 100%;
            margin: 0px;
        }

        svg {
            position: absolute;

            font-size: clamp(0px, 2vw, 20px);
            margin: 0px 1vw 0px 1vw;
            fill: red;
        }
    }
`;
