import React from "react";

const ShrinkAnimation = (props) => {
    const handleMouseOver = () => {
        document.querySelector('#home__canvas').setAttribute('data-shrink', true)
    }

    const handleMouseLeave = () => {
        document.querySelector('#home__canvas').setAttribute('data-shrink', false)
    }


    return (
        <div {...props} style={{ display: 'flex', ...props.style }} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            {props.children}
        </div>
    )
}

export default ShrinkAnimation