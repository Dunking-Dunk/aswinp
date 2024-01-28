import React, { forwardRef } from "react";
import styled from 'styled-components'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ShrinkAnimation from './ShrinkAnimation'
import ScreenHeader from "./ScreenHeader";
import { Link } from "react-router-dom";

const Carousel = forwardRef((props, ref) => {

    return (
        <Wrapper >
            <ScreenHeader index='03//04' title='featured' style={{ top: '0%', color: '#ffffff' }} />
            <Container ref={ref}>
                {props.data.map((data, index) => {
                    return (
                        <CarouselContainer key={index}>
                            <Title>{data.title}</Title>
                            {data.para.map((para) => <Para>{para}</Para>)}
                            <ShrinkAnimation>
                                <Button href={data.link}>More</Button>
                            </ShrinkAnimation>

                        </CarouselContainer>
                    )
                })
                }
            </Container>
            <CarouselButton style={{ left: '10rem' }} justify='flex-start' onClick={(e) => props.handleClickLeft(e)}>
                <FaChevronLeft />
            </CarouselButton>
            <Header>
                <HeaderLink href='https://aswinwriter.medium.com'>Medium</HeaderLink>
                <HeaderLink href='https://opensea.io/Blazingracer'>NFT</HeaderLink>
            </Header>
            <CarouselButton style={{ right: '10rem' }} justify='flex-end' onClick={(e) => props.handleClickRight(e)}>
                <FaChevronRight />
            </CarouselButton>
        </Wrapper>

    )
})

export default Carousel

const Wrapper = styled.div`
    margin-top: 5rem;
    width: 100vw;
height: 100vh;
position: relative;

@media (max-width: 600px) {
    margin-top: 0;
}
`

const Container = styled.div`
display: flex;
flex-wrap: nowrap;
width: 100%;
height: 100%;
align-items: center;
`

const CarouselContainer = styled.div`
  flex: 0 0 auto; 
width: 100%;
height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10rem 10rem;
    @media (max-width: 1200px) {
        padding: 10rem 5rem;
}
@media (max-width: 600px) {
        padding: 15rem 2rem;
}
`

const Title = styled.h3`
    font-size: 8rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #ffffff;
    line-height: 9rem;
    margin-bottom: 5rem;

    @media (max-width: 600px){
        font-size: 6rem;
        margin-bottom: 2rem;
    }
`

const Para = styled.p`  
    display: grid;
    gap: 15px;
    grid-template-columns: 1fr 100%;
    align-items: center;
    margin-left: 5rem;
    font-size: 2rem;
    width: 50%;
    color: #ffffff;
    margin-bottom: 1rem;
    @media (max-width: 1200px) {
        width: 80%;
}


&::before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;

}   

@media (max-width: 600px){
        margin-left: 2rem;
    }

`

const Button = styled.a`
    cursor: pointer;
    border: 0.1rem solid #ffffff;
    width: 18rem;
    height: 5rem;
    border-radius: 0rem;
    margin: 5rem 0rem 0rem 5rem;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    background: transparent;
    transition: 0.5s ease;
    text-decoration: none;

    &:hover {
        border-radius: 2rem;
        transform: scale(1.1);
    }

    @media (max-width: 600px){
        margin: 2rem 0 0 2rem;
    }
`

const CarouselButton = styled.button`

    width: 10rem;
    height: 5rem;
    background: var(--secondary-color);
    position: absolute;
    bottom: 20%;
    left: ${(props) => props.left};
    cursor: pointer;
    outline: none;
    border-radius: 1rem;
    border: 0.1rem solid var(--primary-color);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.justify};
    font-weight: 800;
    padding:0 2rem;
    transition: 0.35s ease-in-out;
    color: var(--primary-color);
   
    &:hover {
        width: 20rem;
    }

    @media (max-width: 600px){
        bottom: 10%;
    }
`


const Header = styled.div`
position: absolute;
bottom: 15%;
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
const HeaderLink = styled.a`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
font-weight: 500;
    color: var(--primary-color);
    cursor: pointer;
    transition: 0.35s ease-in-out;
    &:hover {
        transform: translateY(-10px);
    }
`