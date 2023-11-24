import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ShrinkAnimation from "./ShrinkAnimation";

const Footer = () => {
    return (
        <Container>
            <Para>@ 2023 - ALL RIGHT RESERVER</Para>
            <ShrinkAnimation style={{ justifyContent: 'center' }}>
                <LinkContainer>
                    <SocialLink to='/'>Instagram</SocialLink>
                    <SocialLink to='/'>Facebook</SocialLink>
                    <SocialLink to='/'>Twitter</SocialLink>
                    <SocialLink to='/'>Linkedin</SocialLink>
                </LinkContainer>
            </ShrinkAnimation>
            <Para>DESIGN AND DEVELOPED BY UNFAZED</Para>
        </Container>
    )
}
export default Footer;

const Container = styled.div`
position: relative;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
padding: 4rem;
@media (max-width: 1200px) {
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-between;
   gap: 4rem;
   padding: 2rem 2rem
}
`

const Para = styled.p`
    font-size: 2rem;
    font-weight: 500;
    color: var(--secondary-color);
`


const LinkContainer = styled.div`
align-self: center;
    width: 70rem;
    height: 5rem;
    background-color: var(--secondary-color);
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    @media (max-width: 600px) {
        width: 60rem;
}
`

const SocialLink = styled(Link)`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
height: 100%;
text-decoration: none;
color: var(--primary-color);
font-size: 1.5rem;
text-transform: capitalize;
transition: 0.3s ease;

&:hover {
    transform: translateY(-10px);
}
`