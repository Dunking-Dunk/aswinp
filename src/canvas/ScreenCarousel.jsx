import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { useTexture, Html } from '@react-three/drei'
import gsap from 'gsap'
import Carousel from '../components/Carousel'

const data = [{
    title: 'hursun',
    image: 'https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
},
{
    title: 'suresh',
    image: 'https://images.unsplash.com/photo-1682685797365-41f45b562c0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}
    , {
    title: 'Banu',
    image: 'https://images.unsplash.com/photo-1700554373662-7f0c2a1ad581?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}
]




const ScreenCarousel = forwardRef((props, ref) => {
    const carRef = useRef()
    const containerRef = useRef()
    const [htmlRef, setHtmlRef] = useState()
    const [active, setActive] = useState(0)
    const [lastActive, setLastActive] = useState(0)
    const textures = useTexture(data.map(texture => texture.image))


    useEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#featured__screen',
                start: 'top center',
                end: 'bottom top',
                scrub: 3,
            },
        });

        tl.to(carRef.current.position, {
            y: 0,
        }).to(htmlRef, {

            opacity: 1
        }).to(carRef.current.position, {
            y: -10,
        }).to(htmlRef, {
            opacity: 0
        })



    }, [carRef, htmlRef])

    const handleClickRight = (e) => {
        const containers = containerRef.current.children

        e.stopPropagation()
        if (active < containers.length - 1) {
            setActive(active + 1)
        } if (active === containers.length - 1) {
            setActive(0)
        }
    }

    const handleClickLeft = (e) => {
        const containers = containerRef.current.children

        e.stopPropagation()
        if (active > 0) {
            setActive(active - 1)
        } if (active === 0) {
            setActive(containers.length - 1)
        }

    }

    useEffect(() => {
        const meshes = carRef.current.children.filter((child) => child.type === 'Mesh')

        document.querySelector('#home__canvas')?.setAttribute('data-img', data[active].image)
        gsap.to(containerRef.current, {
            transform: `translateX(${active * -100
                }%)`
        })

        // gsap.to(meshes[lastActive].position,
        //     {
        //         x: 0,
        //         z: 3.9
        //     }
        // )

        // gsap.to(meshes[active].position,
        //     {
        //         x: 0,
        //         z: 4
        //     }
        // )

        setLastActive(active)
    }, [active])

    return (
        <group ref={carRef} position={[0, -10, 0]}>
            <Html as='div' fullscreen ref={setHtmlRef} style={{ opacity: 0 }}>
                <Carousel handleClickLeft={handleClickLeft} handleClickRight={handleClickRight} data={data} ref={containerRef} />
            </Html>

            < mesh position={[0, 0, 0.1]} {...props} ref={ref} castShadow>
                <planeGeometry args={[9, 10]} />
                <meshStandardMaterial map={textures[active]} roughness={0.6} metalness={1} />
            </mesh >
        </group>

    )
})

export default ScreenCarousel