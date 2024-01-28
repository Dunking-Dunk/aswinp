import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { useTexture, Html } from '@react-three/drei'
import gsap from 'gsap'
import Carousel from '../components/Carousel'

const data = [{
    title: 'PolkaMusic (Currently SuperMeta) - Research & Content writer',
    image: '/polka.webp',
    para: ['Contributed to Vote To Earn - decentralized Music ranking system and @xhashtagio', 'Researching on voting types for decentralized ranking system', 'Brainstormed on adding features in Layer 1 of PolkaMusic', 'Wrote technical researched content on various topics published as whitepaper, Medium article and Tweets, poem'],
    link: 'https://aswinwriter.notion.site/aswinwriter/b1dc9ad72d504d2997ad16e129acf125?v=4e35a9d96b904cffa6c7ffda5fa9cab0 '
},
{
    title: 'GuardianLink - Content Writer',
    image: '/guardianlink.webp',
    para: ['Written researched articles & created a planner for creating a exclusive Academy page for the beginner level #Web3 noobs', 'Curated short-form contents for Guest post, influencers, Twitter & Telegram community', 'Managed few NFT Twitter handles like @JumpTradeNFT & @Guardian_NFT for the better outreach, Tweets, and engagement', 'Helped with blue-tick verification and paid ads for the influencer marketing'],
    link: 'https://aswinwriter.notion.site/aswinwriter/b1dc9ad72d504d2997ad16e129acf125?v=4e35a9d96b904cffa6c7ffda5fa9cab0'
}
    , {
    title: 'Bluewind Media - Web3 Marketing Associate',
    image: '/bluewind.webp',
    para: ["Managed two clients for their content marketing in socials", "Managed Twitter handle of @shunya_fi & @bharatverse_xyz"],
    link: 'https://aswinwriter.notion.site/aswinwriter/b1dc9ad72d504d2997ad16e129acf125?v=4e35a9d96b904cffa6c7ffda5fa9cab0 '
},
{
    title: 'On The Block Media - Growth & Content Lead',
    image: '/ontheblock.webp',
    para: ["Managed India’s biggest e-commerce brand, Flipkart’s official Web3 account, @0xFireDrops", "Curated threads, influencer posts and copies for the campaign, #GetFlipped"],
    link: 'https://aswinwriter.notion.site/aswinwriter/b1dc9ad72d504d2997ad16e129acf125?v=4e35a9d96b904cffa6c7ffda5fa9cab0'
},
{
    title: 'Permissionless - Growth & Content Marketing Lead',
    image: '/permissionless.webp',
    para: ["Helped with content, strategy and Web3 influencers partnerships", "Wrote copies for the handle, @async_network & @prmsnsls", "Contributed to the IIT Bommbay for the content", "Helped Permissionless to get a entry in ETHIndia event through DevFolio"],
    link: 'https://aswinwriter.notion.site/aswinwriter/b1dc9ad72d504d2997ad16e129acf125?v=4e35a9d96b904cffa6c7ffda5fa9cab0'
},
{
    title: 'Aurora India - Content Marketing Manager',
    image: '/aurora.webp',
    para: ["Helped with content, influencer tie-ups, & AMAs for the Indian guild of Aurora blockchain - @aurora_india01", "Curated articles for the medium page"],
    link: 'https://aswinwriter.notion.site/aswinwriter/b1dc9ad72d504d2997ad16e129acf125?v=4e35a9d96b904cffa6c7ffda5fa9cab0'
},
{
    title: 'Drypto - Head of Content & Community',
    image: '/drypto.webp',
    para: ["Helped with overall content, socials and vision document plan for the unbiased Web3 analysis platform, Drypto network"],
    link: 'https://aswinwriter.notion.site/aswinwriter/b1dc9ad72d504d2997ad16e129acf125?v=4e35a9d96b904cffa6c7ffda5fa9cab0 '
},
{
    title: 'Shardible (Content Marketing Lead)',
    image: '/shardible.webp',
    para: ["Managed and helped with content for the bluetick verified handle, @shardible", "Played a key role in infleuncer promotion and paid campaigns for the NFT launch", "Successfully generated 3 ETH+ through community allocation and opensea marketplace"],
    link: 'https://aswinwriter.notion.site/aswinwriter/b1dc9ad72d504d2997ad16e129acf125?v=4e35a9d96b904cffa6c7ffda5fa9cab0 '
},
{
    title: 'Magpie (Marketing Lead)',
    image: '/magpie.webp',
    para: ["Created a Twitter thread according to the content calendar", "Did a case-study for the DeBank campaigns", "Aggregated mass whale address list to braodcast activities in the ecosystem", "Helping with finding long-term KOLs for the subdao - Campie"],
    link: 'https://aswinwriter.notion.site/aswinwriter/b1dc9ad72d504d2997ad16e129acf125?v=4e35a9d96b904cffa6c7ffda5fa9cab0 '
},
]




const ScreenCarousel = forwardRef((props, ref) => {
    const carRef = useRef()
    const containerRef = useRef()
    const screenRef = useRef()
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
        }, '-=0.2').to(carRef.current.position, {
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

        document.querySelector('#home__canvas')?.setAttribute('data-img', data[active].image)
        gsap.to(containerRef.current, {
            transform: `translateX(${active * -100
                }%)`
        })

        // gsap.to(screenRef.current.position,
        //     {
        //         x: 0,
        //         z: 3.9
        //     }
        // )

        // gsap.to(screenRef.current.position,
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

            < mesh position={[2, -2.1, 5]} rotation={[0, -0.3, 0]} {...props} ref={ref} castShadow>
                <planeGeometry args={[8, 6]} />
                <meshStandardMaterial map={textures[active]} roughness={1} metalness={0.9} />
            </mesh >
        </group>

    )
})

export default ScreenCarousel