import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { animated, useTransition, config } from "react-spring";
import useScrollTo from "react-spring-scroll-to-hook";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { Margin } from "../../styles/globalSC";

const Hero = () => {
    const { scrollTo }: any = useScrollTo(config.slow);

    const [picIndex, setpicIndex] = useState(0);
    const [auto, setauto] = useState(true);
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        if (auto) {
            const t = setInterval(
                () => setpicIndex((state) => (state + 1) % backPic.length),
                10000
            );
            return () => clearTimeout(t);
        } else {
            const t = setTimeout(() => setauto(true), 12000);
            return () => clearTimeout(t);
        }
    }, [auto]);

    if (disable) {
        setTimeout(setDisable, 1200);
    }

    const VW = window.innerWidth;

    const slidePic = useTransition(picIndex, {
        key: picIndex,
        from: {
            x: 0,
            x2: 0,
            opacity: 0,
            y: 100,
            scale: 1,
            zIndex: 1,
        },
        enter: {
            x: 0,
            x2: 0,
            opacity: 1,
            y: 0,
            scale: 1.2,
            zIndex: 2,
        },
        leave: {
            x: -VW,
            x2: VW,
            y: 0,
            opacity: 0,
            scale: 1.2,
            zIndex: 2,
        },
        config: config.molasses,
    });

    const backPic = [
        {
            url: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2164&q=80",
            pos: "70% 70px",
            cta: "Start Membership",
        },
        {
            url: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2282&q=80",
            pos: "20% center",
            cta: "Opening Times",
        },
        {
            url: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80",
            pos: "center bottom",
            cta: "Equipament",
        },
        {
            url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
            pos: "30% center",
            cta: "Our Location",
        },
    ];

    return (
        <Section>
            {slidePic(({ x, x2, y, scale, zIndex }, index) => (
                <>
                    <Slice1
                        style={{
                            x,
                            // y,
                            scale,
                            zIndex,
                            backgroundImage: `url(${backPic[index].url}), linear-gradient(90deg, black, transparent 70%)`,
                            backgroundPosition: `${backPic[index].pos}`,
                        }}
                    ></Slice1>
                    <Slice2
                        style={{
                            x: x2,
                            // y,
                            scale,
                            zIndex,
                            backgroundImage: `url(${backPic[index].url}), linear-gradient(90deg, black, transparent 70%)`,
                            backgroundPosition: `${backPic[index].pos}`,
                        }}
                    ></Slice2>
                </>
            ))}
            <Margin style={{ zIndex: "2" }}>
                <Title>
                    <p className="ttl">
                        GET MORE BENEFIT BY JOINING MEMBERSHIP
                    </p>
                    <h1>A New Art of Fitness in London</h1>
                    <h4>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.
                    </h4>
                    {slidePic(({ opacity }, index) => (
                        <Button
                            style={{ opacity, position: "absolute" }}
                            onClick={() =>
                                scrollTo(document.querySelector("#Prices"))
                            }
                        >
                            {backPic[index].cta} {" > "}{" "}
                        </Button>
                    ))}
                    <Dots>
                        {[...Array(backPic.length)].map((_, dotIndex) => (
                            <div
                                className={`${
                                    dotIndex == picIndex ? "active" : ""
                                }`}
                                key={dotIndex}
                                onClick={() => {
                                    setpicIndex(dotIndex);
                                    setauto(false);
                                }}
                            />
                        ))}
                    </Dots>
                </Title>
            </Margin>
        </Section>
    );
};

export default Hero;

const Section = styled.section`
    position: relative;
    width: 100vw;
    min-height: 100vh;
    padding: 0px 10px;
    overflow: hidden;
    background: black;

    display: flex;
    align-items: center;

    filter: drop-shadow(5px -6px 30px hsla(0, 0%, 100%, 1));
`;

const Carroussel = styled(animated.div)`
    position: absolute;
    width: 100vw;
    min-height: 100vh;

    background-size: cover;
    background-blend-mode: overlay;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Slice1 = styled(Carroussel)`
    clip-path: polygon(0 0, 0% 100%, 100% 0);
`;

const Slice2 = styled(Carroussel)`
    clip-path: polygon(0 100%, 100% 100%, 100% 0);
`;

const Title = styled.div`
    position: relative;
    width: 100%;
    max-width: 600px;

    background: hsla(348, 100%, 0%, 0);
    color: white;

    display: flex;
    align-content: center;
    flex-direction: column;

    p,
    h1 {
        letter-spacing: 2px;
        margin-bottom: 0.5em;
    }

    .ttl {
        font-family: Bebas Neue;
        color: hsla(338, 100%, 50%, 1);
        font-size: clamp(14px, 1.2vw, 24px);
    }

    h4 {
        font-weight: 100;
        line-height: 1.2em;
        font-size: clamp(14px, 1.5vw, 18px);
        color: hsla(0, 0%, 90%, 1);
    }
    h1 {
        font-size: clamp(32px, 10vw, 70px);
        font-weight: 800;
        line-height: 0.95em;
        //transform: scaleX(1.2) translate(7.5%);
    }
`;

const Button = styled(animated.button)`
    position: absolute;
    left: 0px;
    bottom: -60%;
    width: 100%;
    max-width: 300px;
    margin: 50px auto;
    padding: 20px 20px;
    white-space: nowrap;

    text-transform: uppercase;

    background: hsla(348, 100%, 50%, 1);
    color: white;
    font-size: clamp(16px, 1vw, 24px);
    border-radius: 5px;
`;

const Dots = styled.div`
    position: absolute;
    left: 0px;
    bottom: -50%;
    width: 100%;
    z-index: 10;

    display: flex;

    div {
        flex: 0 0 58px;
        height: 5px;
        margin-right: 20px;
        transform: scale(1);
        background: hsla(348, 0%, 50%, 0.5);
        transition: 0.5s;
    }
    .active {
        transition: 0.02s;
        transform: scale(1.2);
        background: hsla(348, 100%, 50%, 1);
    }
`;
