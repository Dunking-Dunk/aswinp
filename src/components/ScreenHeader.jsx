import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components'
import gsap from 'gsap'

const ScreenHeader = ({ index, title, style }) => {
    const [ref, setRef] = useState()

    useEffect(() => {

        gsap.from(ref,
            {
                scrollTrigger: {
                    trigger: ref,
                    start: '-1000 top',

                },
                left: '-100%',
                ease: 'power1.in',
                duration: 1
            })

    }, [ref])

    return (
        <Container style={style} id="fade-in-right" ref={setRef}>
            <Para>{index} - SCROLL</Para>
            <Title>{title}</Title>
        </Container>
    )
}

export default ScreenHeader

const Container = styled.div`
    position: absolute;
    left: 5rem;
    top: 5rem;

    gap: 5rem;
    color: var(--secondary-color);
    z-index: 2;
    
@media (max-width: 600px) {
    left: -20px;
    top: 5rem;
    transform: rotate(-90deg);
}
`

const Title = styled.h3`
    font-size: 3.6rem;
    font-weight: 700;
    
    text-transform: uppercase;
`

const Para = styled.p`
font-weight: 200;
    font-size: 1.6rem;
    
    
`
