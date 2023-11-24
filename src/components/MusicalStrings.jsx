import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

const MusicalStrings = (props) => {
    const pathsRef = useRef()

    useEffect(() => {

        const paths = pathsRef.current.children
        for (let i = 0; i < paths.length; i++) {
            const pathLength = paths[i].getTotalLength();

            paths[i].setAttribute('stroke-dasharray', pathLength);
            paths[i].setAttribute('stroke-dashoffset', pathLength);

            gsap.to(paths[i], {
                scrollTrigger: {
                    trigger: pathsRef.current,
                    start: 'top center',
                },
                strokeDashoffset: 0,
                duration: 1,
                ease: "circ.in",
            })
        }

    }, [])

    const onMouseMove = (e) => {
        let x = e.clientX
        let y = e.clientY

        let width = x / window.innerWidth
        x = width * 100
    }

    return (
        <Container onMouseMove={onMouseMove} {...props}>
            <Svg viewBox="0 0 2097 409" fill="none" xmlns="http://www.w3.org/2000/Svg" ref={pathsRef}>
                <Path d="M1 373.653C106.674 321.018 454.141 199.82 579.619 262.982C736.467 341.935 795.77 390.767 963.148 366.351C1130.53 341.935 1154.36 242.902 1304.56 262.982C1454.75 283.063 1367.74 375.022 1548.97 405.143C1730.21 435.263 1831.08 217.117 2096 225.788" stroke="white" stroke-width="2" />
                <Path d="M1 261.385C106.674 208.75 454.141 87.5523 579.619 150.714C736.467 229.667 795.77 278.499 963.148 254.083C1130.53 229.667 1154.36 130.634 1304.56 150.714C1454.75 170.795 1367.74 262.754 1548.97 292.875C1730.21 322.995 1831.08 104.849 2096 113.52" stroke="white" stroke-width="2" />
                <Path d="M1 149.117C106.674 96.482 454.141 -24.7156 579.619 38.4465C736.467 117.399 795.77 166.231 963.148 141.815C1130.53 117.399 1154.36 18.3661 1304.56 38.4465C1454.75 58.5269 1367.74 150.486 1548.97 180.607C1730.21 210.728 1831.08 -7.41906 2096 1.25204" stroke="white" stroke-width="2" />
            </Svg>
        </Container>
    )
}

export default MusicalStrings

const Svg = styled.svg`
    width: 220rem;
    height: 40rem;
`

let Container = styled.div`
left: -100px;
    overflow: hidden;
    position: absolute;
    z-index: 0;

`

const Path = styled.path`
    stroke: var(--secondary-color);
`