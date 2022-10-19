import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { below } from "../../styles/breakpoints";
import Burguer from "./Hamburguer";

const NavBar = () => {
    return (
        <>
            <Nav>
                <Margin>
                    <Link href="/">
                        <Logo>
                            <Image
                                src="/logo.svg"
                                width="80"
                                height="55"
                                alt="logo"
                            />
                        </Logo>
                    </Link>

                    <Burguer />
                </Margin>
            </Nav>
        </>
    );
};

export default NavBar;

const Nav = styled.nav`
    position: fixed;
    width: 100vw;
    height: 70px;

    padding: 10px 20px;

    background: hsla(42, 0%, 50%, 0);
    z-index: 14;
    transition: 0.5s;
    backdrop-filter: blur(3px);

    :hover {
        transition: 0.2s;
        background: hsla(42, 0%, 0%, 0.5);
    }

    display: flex;
    align-items: center;
`;

const Margin = styled.div`
    max-width: 1200px;
    width: 100%;

    margin: 10px auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    ${below.med`
        
    `};
`;

const Logo = styled.div`
    cursor: pointer;
    .img {
        object-fit: cover;
    }
`;
