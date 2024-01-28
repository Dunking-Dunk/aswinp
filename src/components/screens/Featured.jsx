import React from "react";
import styled from "styled-components";
import ScreenHeader from "../ScreenHeader";

const FeaturedScreen = () => {
    return <Container id="featured__screen">
        {/* <ScreenHeader index='03//04' title='featured' style={{ top: '15%', color: '#ffffff' }} /> */}
    </Container>
}

export default FeaturedScreen

const Container = styled.div`
    height: 140vh;
    width: 100%;
    position: relative;
    pointer-events: none;
`

const Title = styled.h1`
    
`
