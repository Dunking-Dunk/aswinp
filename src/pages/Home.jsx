import React from "react";
import styled from "styled-components";

import Hero from "../components/screens/Hero";
import About from '../components/screens/About'
import Featured from '../components/screens/Featured'
import Contact from '../components/screens/Contact'
// import HomeCanvas from "../canvas/Home";

const HomeScreen = () => {
    return (
        <Container>
            <Hero />
            <About />
            <Featured />
            <Contact />
        </Container>
    )
}

export default HomeScreen

const Container = styled.div`
width:100%;
height:100%;
    padding: 0rem 2rem;
`