import React from 'react'

import '../Css/Navbar.css'

import logo from '../../../Images/logo.png'

function Navbar() {
    return (
        <header>
            <div className="logo"><a className="logo" href="/"><img src={logo} className="imageNav" alt="Logo"/><p className="logo">Image Uploader</p></a></div>
            <nav>
                <ul className="nav__links">
                    <li><a href="http://github.com/vallezw/Image-Uploader">About</a></li>
                </ul>
            </nav>
            <a className="cta" href="/">Upload</a>
        </header>
    )
}

export default Navbar
