import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ThemeContext } from '../components/DarkMode'
import ShrinkAnimation from "./ShrinkAnimation";


const Header = () => {
    const { theme, toggleMode } = useContext(ThemeContext)

    useEffect(() => {
        // modalRef.current.style.top = '-100%';
    }, [])


    return (
        <HeaderContainer id='fade-in-animation'>
            <Wrapper>

                <LeftContainer>
                    <Logo to='/'>ASWIN</Logo>
                </LeftContainer>
                <CenterContainer>
                    <ShrinkAnimation>
                        <HeaderLink href='#hero__screen'>Home</HeaderLink>
                    </ShrinkAnimation>
                    <ShrinkAnimation>
                        <HeaderLink href='#about__screen'>about</HeaderLink>
                    </ShrinkAnimation>
                    <ShrinkAnimation>
                        <HeaderLink href='#featured__screen'>featured</HeaderLink>
                    </ShrinkAnimation>
                    <ShrinkAnimation >
                        <HeaderLink href='#contact__screen'> contact</HeaderLink>
                    </ShrinkAnimation>

                </CenterContainer>
                <RightContainer>
                    <ShrinkAnimation>
                        <DarkIcon src={theme === 'dark' ? './dark.png' : './light.png'} onClick={toggleMode} />
                    </ShrinkAnimation>

                </RightContainer>
            </Wrapper>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
        height: 8rem;
    width: 100%;
    position: absolute;
    z-index: 5;
`
const Wrapper = styled.div`
padding: 0rem 4rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
   
`

const LeftContainer = styled.div`
height: 100%;
align-items: center;
justify-content: center;
flex: 1;
`
const Logo = styled(Link)`
height: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
    font-size: 3.6rem;
    font-weight: 500;
    padding-right: 4rem;
    text-decoration: none;
    color: var(--secondary-color);

`

const CenterContainer = styled.div`
height: 100%;
flex: 4;
display: flex;
align-items: center;
justify-content: center;
padding: 0 4rem;
transition: 0.2s ease-in;

@media (max-width: 1200px) {
position: fixed;
width: 50%;
left: -100%;
top: 0;
flex-direction: column;
background-color: white;
z-index: 5;
padding: 0rem;
}
`

export const HeaderLink = styled.a`
    font-size: 1.4rem;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0rem 3rem;
   cursor: pointer;
   position: relative;
   text-decoration: none;
    color: var(--secondary-color);
    line-height: 1.05;
;
    
   &::before{
    content: '';
    display: block;
    position: absolute;
    bottom: -2px;
    width: 100%;
    height: 1px;
    background-color:  var(--secondary-color);

    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.5s ease-out;
   }

   &:hover:before {
          transform: scaleX(1);
          transform-origin: bottom left;
   }

   @media (max-width: 1200px) {
    padding: 0 1rem;
    border-bottom: 0.1rem black solid;
  }
`

const RightContainer = styled.div`
    height: 100%;
    flex: 1;
  gap: 2rem;
    align-items: center;
    justify-content: flex-end;
    display: flex;
    `


const MobileContainer = styled.div`
    width: 100%;
    height: 8rem;
  display: none;

    @media (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Menu = styled.div`
width: 3rem;
height: 3rem;
cursor: pointer;
display: none;

@media (max-width: 1200px) {
display: block;
  }
`


const DarkIcon = styled.img`
cursor: pointer;
width: 4rem;
height: 4rem;
`