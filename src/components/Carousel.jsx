import React, { forwardRef } from "react";
import styled from 'styled-components'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = forwardRef((props, ref) => {

    return (
        <Wrapper >
            <Container ref={ref}>
                {props.data.map((data, index) => {
                    return (
                        <CarouselContainer key={index}>
                            <Title>{data.title}</Title>
                            <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ratione perspiciatis eveniet minima accusamus recusandae ipsam nisi, suscipit explicabo in tenetur maxime iure deleniti sit debitis fuga quisquam rem expedita.</Para>
                        </CarouselContainer>
                    )
                })
                }
            </Container>
            <CarouselButton style={{ left: '10rem' }} justify='flex-start' onClick={(e) => props.handleClickLeft(e)}>
                <FaChevronLeft />
            </CarouselButton>
            <CarouselButton style={{ right: '10rem' }} justify='flex-end' onClick={(e) => props.handleClickRight(e)}>
                <FaChevronRight />
            </CarouselButton>
        </Wrapper>

    )
})

export default Carousel

const Wrapper = styled.div`
top: 0;
left: 0;
    width: 100vw;
height: 100vh;
position: relative;
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
        padding: 50rem 5rem;
}
@media (max-width: 600px) {
        padding: 15rem 5rem;
}
`

const Title = styled.h3`
    font-size: 10rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #ffffff;
`

const Para = styled.p`
    font-size: 2rem;
    width: 50%;
    color: #ffffff;
    @media (max-width: 1200px) {
        width: 80%;
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
`