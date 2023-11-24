import React from "react";
import styled from "styled-components";
import ScreenHeader from "../ScreenHeader";

const FeaturedScreen = () => {
    return <Container id="featured__screen">
        <ScreenHeader index='03//04' title='featured' style={{ top: '15%', color: '#ffffff' }} />
        <Header>
            <Link >WORKS</Link>
            <Link >NFT'S</Link>
            <Link >BLOGS</Link>
        </Header>
    </Container>
}

export default FeaturedScreen

const Container = styled.div`
    height: 120vh;
    width: 100%;
    position: relative;
    pointer-events: none;
`

const Title = styled.h1`
    
`

const Header = styled.div`
position: absolute;
bottom: 0%;
left: 50%;
    width: 50rem;
    height: 4rem;
    background: var(--secondary-color);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 1rem;
    transform: translate(-50%,-50%);
    z-index: 2;
    pointer-events: all;
    border: 0.1rem solid var(--primary-color);
    
`
const Link = styled.p`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.2rem;
font-weight: 500;
    color: var(--primary-color);
    cursor: pointer;
    transition: 0.35s ease-in-out;
    &:hover {
        transform: translateY(-10px);
    }
`