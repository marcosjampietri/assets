import styled from "styled-components";
import { animated, useSpring, useTransition, config } from "react-spring";

import { Margin } from "../../styles/globalSC";
import { useInView } from "react-intersection-observer";

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

    const n = [
        {
            tx: "Workouts Completed each month by our amazing family",
            n: n1,
        },
        {
            tx: "Workout Videos created every month for our community",
            n: n2,
        },
        {
            tx: "Years of Experience helping people achieve their goal",
            n: n3,
        },
        {
            tx: "New members join our family to achieve the goal",
            n: n4,
        },
    ];

    return (
        <Section ref={refV}>
            <Margin>
                {transitions((styles, item) =>
                    item ? (
                        <RedBox style={{ ...styles }}>
                            <Title>
                                <p style={{ fontFamily: "Bebas Neue" }}>
                                    ABOUT US
                                </p>
                                <h2>
                                    Keep healthy, feel wealthy, learn together,
                                    grow together
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Aliquam vitae tincidunt
                                    turpis. Fusce posuere tempus orci, sit amet
                                    sollicitudin lectus ullamcorper eu. Duis
                                    malesuada ultrices mattis.
                                </p>
                            </Title>
                            {n.map((Num, i) => (
                                <Item key={i}>
                                    <Number>
                                        <animated.div>
                                            {Num.n.to((n) => n.toFixed(0))}
                                        </animated.div>
                                        <span>{i == 0 ? "M +" : " + "}</span>
                                    </Number>

                                    <h3>{Num.tx}</h3>
                                </Item>
                            ))}
                        </RedBox>
                    ) : null
                )}
            </Margin>
        </Section>
    );
};

export default Numbers;

const Section = styled.section`
    width: 100vw;
    min-height: 100vh;
    margin: 0px auto;
    padding: 70px 0px 0px;

    background: white;

    display: flex;
    align-items: center;
`;
const RedBox = styled(animated.div)`
    height: 100%;
    min-height: 80vh;
    margin: 10px;
    padding: 30px;

    background: hsla(348, 100%, 50%, 1);

    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;

    div {
        margin: 2vh 0px;
    }
`;
const Title = styled.div`
    width: 100%;

    background: hsla(348, 100%, 0%, 0);
    color: white;

    display: flex;
    align-content: center;
    flex-direction: column;

    p,
    h2 {
        letter-spacing: 2px;
    }

    p {
        max-width: 600px;
        margin-bottom: 20px;
    }
    h2 {
        margin-bottom: 20px;
        font-size: clamp(28px, 5vw, 40px);
        font-weight: 600;
    }
`;

const Item = styled.div`
    flex: 1 1 200px;
    padding: 0px 10px;

    h3 {
        font-family: Montserrat, Sans-Serif;
        font-weight: 100;
        font-size: 16px;
        letter-spacing: 2px;
        color: white;
    }
`;
const Number = styled(animated.div)`
    font-family: Bebas Neue;
    color: white;
    font-size: 75px;
    white-space: nowrap;

    display: flex;
    span,
    div {
        margin: 0px 0px;
    }
`;
