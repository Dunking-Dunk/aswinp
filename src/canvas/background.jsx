import { shaderMaterial, useTexture } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import React, { forwardRef, useContext, useEffect, useRef, useState } from "react";

import { ThemeContext } from "../components/DarkMode";


const Background = forwardRef((props, ref) => {
    const { theme
    } = useContext(ThemeContext)
    let [anim, setAnim] = useState(0)
    const [mouse, setMouse] = useState({
        x: 0,
        y: 0
    })
    const backgroundRef = useRef()

    const handleMouse = (e) => {
        if (e.touches) {
            setMouse({ x: e.touches[0].clientX - (window.innerWidth * 0.5), y: (window.innerHeight * 0.5) - e.touches[0].clientY - 25 })
        } else {
            setMouse({ x: e.clientX - (window.innerWidth * 0.5), y: (window.innerHeight * 0.5) - e.clientY - 25 })
        }

    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouse, false)
        window.addEventListener("touchmove", handleMouse, false)
        return () => {
            window.removeEventListener('mousemove', handleMouse, false)
            window.removeEventListener('touchMove', handleMouse, false)
        }
    }, [])

    function easeInOutSine(x) {
        return -(Math.cos(Math.PI * x) - 1) / 2;
    }


    useFrame((state) => {
        const shrink = document.querySelector('#home__canvas').getAttribute('data-shrink')
        if (shrink === 'true' && anim < 0.6) {
            setAnim(anim += 0.01)
        }
        if (shrink === 'false' && anim > 0) {
            setAnim(anim -= 0.01)
        }

        backgroundRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
        backgroundRef.current.uniforms.uMouse.value = new THREE.Vector2(
            mouse.x,
            mouse.y
        );

        backgroundRef.current.uniforms.uShrink.value = easeInOutSine(anim)
        backgroundRef.current.uniforms.uTheme.value = theme === 'light' ? 1 : 0
    })

    const BackgroundShaderMaterial = new shaderMaterial({
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uTheme: { value: 0 },
        uShrink: { value: 0 },
        uImage: { value: 0 }
    },
        `
        varying vec2 vUv;
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          vUv = uv;
        }
        `,
        `
        float PI = 3.1415926;
        uniform float uTime;
        uniform vec2 uMouse;
        varying vec2 vUv;
        uniform float uShrink;
        uniform float uTheme;
        uniform sampler2D uImage;

        void main( ) {
            vec2 uv = vUv ;
       
            vec2 mouse = uMouse;
            mouse.x *= 0.5;
            
            vec2 p = uv - (mouse  * 0.001) ;
         
            // Compute a simple gradient
            vec3 col = vec3(0., vUv).zxy;
    
            // Reduce intensity of gradient more to the corners
            col *= 1. * smoothstep(1.- uShrink ,0., length(p - vec2(0.5)));
    

            vec3 mixColor = mix(col  , vec3(uTheme), .1);
            vec4 color = texture2D(uImage, uv);
            gl_FragColor = vec4(mixColor,1.0);
          }
        `)

    extend({ BackgroundShaderMaterial })

    return (
        <mesh castShadow ref={ref} {...props}>
            <planeGeometry args={[20, 10]} />
            <backgroundShaderMaterial ref={backgroundRef} />
        </mesh>

    )
})

export default Background