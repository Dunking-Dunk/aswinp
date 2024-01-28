import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MusicalStrings from "../MusicalStrings";
import ShrinkAnimation from "../ShrinkAnimation";
import InfiniteMarque from "../InfiniteMarque";
import ScreenHeader from "../ScreenHeader";


const AboutScreen = () => {

    return (
        <Container id="about__screen">
            <ScreenHeader index='02//04' title='About' style={{}} />
            <MusicalStrings style={{ top: '0' }} />
            <AuthorContainer>
                <AuthorImageContainer>
                    <AuthorImage alt="i am the author aswin p" src='./ashwin.webp' />
                </AuthorImageContainer>
                <DetailContainer>
                    <div style={{ marginTop: '1rem', zIndex: 1 }}>
                        <TagLine>Web3 Marketing Saviour
                        </TagLine>
                    </div>
                    <DetailPara className="reveal-text">
                        Welcome to my space! I'm Aswin, a seasoned Web3 marketer and content creator with three years of transformative experience. From shaping narratives for visionary startups to a pivotal role as a marketing manager, I bring a proven track record and a passion for driving impactful results. My expertise spans in all domains like DeFi, Play-to-Earn, CEX, NFTs, Blockchain, and DAOs, etc. Let's collaborate and explore how my expertise can fuel growth and success in your organization's journey through the dynamic Web3 universe.
                    </DetailPara>
                    <div style={{ marginBottom: '2rem' }}>
                        <Header>Follow Me On 🌏</Header>
                        <ShrinkAnimation>
                            <LinkContainer>
                                {/* <SocialLink to='/'></SocialLink> */}
                                <SocialLink to='https://t.me/polkablaze'>Telegram</SocialLink>
                                <SocialLink to='https://twitter.com/0xaswin'>Twitter</SocialLink>
                                <SocialLink to='https://www.linkedin.com/in/curiousaswin/'>Linkedin</SocialLink>
                            </LinkContainer>
                        </ShrinkAnimation>
                    </div>

                </DetailContainer>
            </AuthorContainer>
            <InfiniteMarque />
        </Container>
    )
}

export default AboutScreen

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;

    @media (max-width: 1200px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 600px) {
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
`

const AuthorContainer = styled.div`
padding-top: 15rem;
display: grid;
grid-template-columns: 1fr 2fr;
align-items: center;
gap: 2rem;
@media (max-width: 600px) {
    padding-top:10rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* @media (max-width: 600px) {
    padding-top: 5rem;
} */
`
const AuthorImageContainer = styled.div`
    justify-self: center;
    width: 50rem;
    height: 75rem;
    z-index: 1;
    border-radius: 1rem;
    overflow: hidden;
    @media (max-width: 1200px) {
        height: 60rem;
    }
    @media (max-width: 600px) {
        height: 100%;
}
`
const AuthorImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const DetailContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
@media (max-width: 600px) {

        justify-content: space-between;
}
`
const DetailPara = styled.p`
    font-size: 3.5rem;
    font-weight: 400;
    color: var(--secondary-color);
    @media (max-width: 600px) {
        font-size: 3rem;
        align-items: center;
}
`

const LinkContainer = styled.div`
    height: 5rem;
    background-color: var(--secondary-color);
    border-radius: 1rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    @media (max-width: 1200px) {
       
        width: 80%;
}   
@media (max-width: 600px) {
    margin-top: 0rem;
       width: 100%;
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
padding: 2rem 8rem;

&:hover {
    transform: translateY(-10px);
}
`

const Header = styled.h5`
    font-size: 5rem;
    font-weight: 600;
    color: var(--secondary-color);
    @media (max-width: 600px) {
    margin-top: 0rem;
       width: 100%;
}
`

const TagLine = styled.h5`
    font-size: 1.5rem;
    color: var(--primary-color);
    background-color: var(--secondary-color);
    padding: 1rem 2rem;
    border-radius: 1rem;
    width: fit-content;
    font-weight: 400;
`