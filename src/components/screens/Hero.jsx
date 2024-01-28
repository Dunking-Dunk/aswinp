import React, { useEffect } from "react";
import styled from "styled-components";

import ArrowDown from '../ArrowDown'
import HeroName from '../HeroName'

const HeroScreen = () => {

    return (<Container id="hero__screen">
        <HeroContainer>
            <HeroName />
            <HeroText id="fade-in-animation">Your Web3 Marketing Saviour</HeroText>
            <ArrowContainer id="fade-in-animation">
                <ArrowDown />
            </ArrowContainer>
        </HeroContainer>
    </Container>)
}

export default HeroScreen

const Container = styled.div`
position: relative;
    width:100%;
    height: 100vh;
`

const HeroContainer = styled.div`
width: 100%;
height: 100%;
position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`

const HeroText = styled.h3`
    font-size: 3.6rem;
    font-weight: 200;
    color: var(--secondary-color);
    text-transform: uppercase;
    word-spacing: -0.1rem; 
`
const ArrowContainer = styled.div`
    @media (max-width: 600px) {
        margin-bottom: 5rem;
    }
`