import styled from "styled-components";

const Footer = () => {
    return (
        <>
            <Section></Section>
        </>
    );
};

export default Footer;

const Section = styled.section`
    width: 100%;
    height: 500px;

    background-image: linear-gradient(
        90deg,
        hsla(270, 100%, 40%, 1),
        hsla(260, 100%, 66%, 1)
    );
    color: hsla(0, 0%, 90%, 1);
`;
