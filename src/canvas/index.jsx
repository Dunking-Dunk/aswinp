import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Styled from 'styled-components'
import Background from './background'
import { PerspectiveCamera, useHelper } from "@react-three/drei";
import gsap from "gsap";
import { EffectComposer, GodRays, Bloom, Noise, Vignette } from '@react-three/postprocessing'

import Floor from "./Floor";
import ScreenCarousel from "./ScreenCarousel";

const IndexCanvas = () => {
    const [cameraRef, setCameraRef] = useState()
    const [sunRef, set] = useState(null)
    const [screenRef, setScreenRef] = useState(null)
    const dirLight = useRef();

    useEffect(() => {
        if (cameraRef) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#featured__screen',
                    start: 'top center',
                    end: 'bottom top',
                    scrub: 3,
                },
            });

            tl.to(cameraRef.position, {
                z: 20,
            })

            tl.to(cameraRef.position, {
                z: 10,
            })
        }
    }, [cameraRef])


    return (
        <Container id="home__canvas" data-shrink={false} >
            <Canvas style={{ width: '100%', height: '100%' }}
                frameloop='always'
                dpr={[1, 1.5]}
            >

                <fog attach="fog" args={['black', 1, 100]} />
                <color attach="background" args={["black"]} />
                <PerspectiveCamera makeDefault position={[0, 0, 10]} ref={setCameraRef} />
                <ambientLight intensity={0.1} />
                <directionalLight color={"#ffffff"} intensity={1} ref={dirLight} position={[0, 0, 1]} />
                <Background ref={set} />
                <Floor />
                <ScreenCarousel ref={setScreenRef} />
                <EffectComposer disableNormalPass multisampling={1} >
                    {sunRef && screenRef && (
                        <>
                            {/* <GodRays
                                sun={screenRef}
                                exposure={0.3} decay={0.5} blur

                            /> */}

                            <GodRays
                                sun={sunRef}
                                exposure={0.3} decay={0.8} blur
                            />
                        </>
                    )}

                    <Noise opacity={0.01} />
                    <Bloom
                        luminanceThreshold={0}
                        luminanceSmoothing={1}
                        height={300}
                        opacity={3}
                    />

                </EffectComposer>
            </Canvas>
        </Container>

    )
}

export default IndexCanvas

const Container = Styled.div`
left: 0;
top: 0;
width: 100%;
height: 100%;
position: fixed;
z-index: 0;
`