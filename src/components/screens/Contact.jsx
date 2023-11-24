import React, { useEffect } from "react";
import styled from "styled-components";

import MusicalStrings from '../MusicalStrings'
import ShrinkAnimation from '../ShrinkAnimation'
import ScreenHeader from "../ScreenHeader";

const ContactScreen = () => {

    return <Container id='contact__screen'>
        <ScreenHeader index='04//04' title='contact' />
        <Title>INTRESTED IN WORKING TOGTHER ?</Title>
        <ShrinkAnimation>
            <Button><Text>DROP ME A LINE</Text></Button>
        </ShrinkAnimation>
        <MusicalStrings style={{ top: '5%' }} />
        <MusicalStrings style={{ top: '40%' }} />
    </Container>
}

export default ContactScreen

const Container = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15rem 10rem;
    position: relative;
    z-index: 1;
    @media (max-width: 1200px){
        padding: 15rem 1rem;
    }

    @media (max-width: 600px) {
    padding:  0rem;
    justify-content: center;
}

`

const Title = styled.h2`
font-size: 12.8rem;
font-weight: 900;
margin-bottom: 10rem;
color: var(--secondary-color);
@media (max-width: 1200px){
    font-size: 11.2rem;
    }
 
    @media (max-width: 600px) {
    margin-bottom: 5rem;
}
`

const Button = styled.button`
    width: 50rem;
    height: 8rem;
    background: transparent;
    border: 0.4rem solid var(--secondary-color);
    border-radius: 2rem;
    position: relative;
    overflow: hidden;


    &::before {
        content: '';
        display: flex;
        border-radius: 50%;
        background: #00aeff;
        width: 5rem;
        height: 5rem;
        position: absolute;
        left: 2rem;
        top: 1rem;
        transition: 0.5s ease-in-out;
    }
    &:hover::before { 
        width: 100rem;
        height: 100rem;
        left: -100px;
        top: -100px;
        border-radius: 0;
    }
`

const Text = styled.h5`
        font-size: 4rem;
    font-weight: 600;
    text-transform: uppercase ;
    color: var(--secondary-color);
    z-index: 2;
    position: absolute;
    top: 1.5rem;
    left: 10rem;
`