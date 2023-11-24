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
            <ScreenHeader index='02//04' title='About' />
            <MusicalStrings style={{ top: '0' }} />
            <AuthorContainer>
                <AuthorImage alt="i am the author aswin p" src='./aswin.webp' />
                <DetailContainer>
                    <DetailPara className="reveal-text">
                        I’m Aswin, means bringing light to darkness ✨I told you right! Currently on the verge of finishing up my undergrad in engineering specialized in electrical & electronics. You in shock? Lol. What the hell are you doing here? Maybe your question. Does life give us a manual book to follow it under the guidelines? If not, then that’s my answer.
                    </DetailPara>
                    <ShrinkAnimation>
                        <LinkContainer>
                            <SocialLink to='/'>Instagram</SocialLink>
                            <SocialLink to='/'>Facebook</SocialLink>
                            <SocialLink to='/'>Twitter</SocialLink>
                            <SocialLink to='/'>Linkedin</SocialLink>
                        </LinkContainer>
                    </ShrinkAnimation>
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
@media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`
const AuthorImage = styled.img`
    justify-self: center;
    height: 75rem;
    z-index: 1;
    @media (max-width: 1200px) {
        height: 60rem;
    }
    @media (max-width: 600px) {
        height: 60rem;
}
`

const DetailContainer = styled.div`
display: flex;
flex-direction: column;
@media (max-width: 600px) {
        align-items: center;
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
    margin-top: 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    @media (max-width: 1200px) {
        margin-top: 2rem;
        width: 80%;
}   
@media (max-width: 600px) {
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
padding: 2rem 4rem;

&:hover {
    transform: translateY(-10px);
}
`