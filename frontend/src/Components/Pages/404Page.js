import React from 'react'
import Navbar from '../ComponentUtils/Headers/Navbar'

import image from '../../Images/404.svg'

function FZF() {
    return (
        <div className="allContainer">
            <Navbar />

            <img src={image} alt="goingUpImage" className="FZFImage"/>
        </div>
    )
}

export default FZF
