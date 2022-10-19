import styled from "styled-components";
import { animated, useSpring, useTrail, config } from "react-spring";

import { Margin } from "../../styles/globalSC";
import { useInView } from "react-intersection-observer";
import {
    CgGym,
    CgUnblock,
    CgDrop,
    CgBandAid,
    CgTime,
    CgSmartphoneChip,
} from "react-icons/cg";

const Advantages = () => {
    const optn = {
        threshold: [0.3],
        triggerOnce: true,
    };
    const [refV, inView] = useInView(optn);

    const items = [
        {
            title: "Private Bathrooms",
            icon: <CgUnblock />,
            tx: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
        },
        {
            title: "Personal Trainer",
            icon: <CgGym />,
            tx: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
        },
        {
            title: "First Aids",
            icon: <CgBandAid />,
            tx: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
        },
        {
            title: "New Equipment",
            icon: <CgSmartphoneChip />,
            tx: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
        },
        {
            title: "Free Water",
            icon: <CgDrop />,
            tx: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
        },
        {
            title: "Flexible Time",
            icon: <CgTime />,
            tx: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
        },
    ];

    const trail = useTrail(items.length, {
        opacity: inView ? 1 : 0,
        x: inView ? 0 : 200,
        config: config.slow,
    });
    const spring = useSpring({
        opacity: inView ? 1 : 0,
        // scale: inView ? 1 : 1.5,
        y: inView ? 0 : 100,
        config: config.molasses,
    });

    return (
        <Section>
            <Margin>
                <ItemsWrap ref={refV}>
                    <Title style={spring}>
                        <p style={{ fontFamily: "Bebas Neue" }}>
                            WHY CHOOSE US
                        </p>
                        <h2>Stay healthy with the pros on the matter</h2>
                    </Title>
                    {trail.map((styles, i) => (
                        <Item key={i} style={{ ...styles }}>
                            <Icon>{items[i].icon}</Icon>
                            <div>
                                <h2>{items[i].title}</h2>
                                <h3>{items[i].tx}</h3>
                            </div>
                        </Item>
                    ))}
                </ItemsWrap>
            </Margin>
        </Section>
    );
};

export default Advantages;

const Section = styled.section`
    width: 100vw;
    min-height: 100vh;
    padding: 70px 20px 0px;

    background: hsla(0, 0%, 95%, 1);

    display: flex;
    align-items: center;
`;

const Title = styled(animated.div)`
    width: 100%;

    background: hsla(348, 100%, 0%, 0);

    display: flex;
    align-items: center;
    justify-content: center;
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

const ItemsWrap = styled(animated.div)`
    width: 100%;
    height: 100%;
    min-height: 80vh;
    padding: 0px;

    overflow: hidden;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
`;

const Item = styled(animated.div)`
    width: 100%;
    min-width: 300px;
    flex: 1 0 50%;
    // min-height: 25%;
    padding: 0px 0px;
    margin: 20px 0px;

    display: flex;
    justify-content: center;
    align-content: center;

    div {
        margin: 20px;
    }

    h2 {
        font-family: Bebas Neue;
        color: hsla(0, 0%, 30%, 1);
        letter-spacing: 2px;
        font-size: 25px;
        line-height: 1.5em;
    }

    h3 {
        font-family: Montserrat, Sans-Serif;
        font-weight: 100;
        font-size: 16px;
        line-height: 1.5em;
        color: hsla(0, 0%, 50%, 1);
    }
`;

const Icon = styled.div`
    flex: 0 0 70px;
    width: 70px;
    height: 70px;

    box-shadow: 2px 2px 5px hsla(0, 0%, 50%, 0.2);
    border-radius: 5px;
    background: hsla(0, 100%, 100%, 1);
    svg {
        padding: 16px;
        width: 100%;
        height: 100%;
        path {
          fill: hsla(348, 100%, 50%, 1);
          stroke: hsla(348, 100%, 50%, 1);
        }​
    }
`;
