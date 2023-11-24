import React from "react";
import Styled, { keyframes } from 'styled-components'

const ArrowDown = () => {

    return (
        <svg width="110" height="200" viewBox="0 0 110 113" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M109 56.5C109 87.1773 84.7982 112 55 112C25.2018 112 1 87.1773 1 56.5C1 25.8227 25.2018 1 55 1C84.7982 1 109 25.8227 109 56.5Z" strokeWidth="2" />
            <AnimateSvg id='arrowupdown'>
                <Path d="M53.2322 83.7678C54.2085 84.7441 55.7915 84.7441 56.7678 83.7678L72.6777 67.8579C73.654 66.8816 73.654 65.2986 72.6777 64.3223C71.7014 63.346 70.1184 63.346 69.1421 64.3223L55 78.4645L40.8579 64.3223C39.8816 63.346 38.2986 63.346 37.3223 64.3223C36.346 65.2986 36.346 66.8816 37.3223 67.8579L53.2322 83.7678ZM52.5 31V82H57.5V31H52.5Z" style={{ zIndex: 5 }} />
            </AnimateSvg>
        </svg>
    )
}

export default ArrowDown

const upAndDown = keyframes`
 from {
    transform:translateY(0px) ;
 }
 to {
    transform: translateY(40px);
 }
`

const AnimateSvg = Styled.g`
animation: ${upAndDown} 1.5s alternate linear infinite;
`
const Path = Styled.path`
color: var(--secondary-color);
stroke: var(--secondary-color);
`