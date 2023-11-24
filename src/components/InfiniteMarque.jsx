import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

const InfiniteMarque = () => {
    const containerRef = useRef()

    useEffect(() => {
        gsap.to(containerRef.current, {
            scrollTrigger: {
                trigger: '#about__screen',
                start: 'top top',
                end: 'bottom -20% ',
                scrub: 4,
            },
            left: '-100%',
            duration: 20,
        })

    }, [])


    return (
        <Container ref={containerRef}>
            <Text>Medium Top Writer </Text>
            <Text> Unbiased Guy </Text>
            <Text>Poetry</Text>
            <Text>Self</Text>
            <Text>Society</Text>
            <Text>Spirituality</Text>
            <Text>Science</Text>
            <Text>Medium Top Writer </Text>
            <Text> Unbiased Guy </Text>
            <Text>Poetry</Text>
            <Text>Self</Text>
            <Text>Society</Text>
            <Text>Spirituality</Text>
            <Text>Science</Text>
        </Container>
    )
}

export default InfiniteMarque

const Container = styled.div`
position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    bottom: -10rem;
    width: 500vw;
    border-top:0.5rem solid var(--secondary-color) ;
    border-bottom:0.5rem solid var(--secondary-color) ;
    height: 10rem;

    @media (max-width: 1200px) {
    width: 1000rem;
}
`

const Text = styled.h3`
font-size: 8rem;
font-weight: 700;
color: var(--secondary-color);
padding: 0rem 2rem;
text-transform: uppercase;

`