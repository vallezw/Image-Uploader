import React from 'react'

import '../Css/Navbar.css'

function Navbar() {
    return (
        <header>
            <a className="logo" href="/"><p className="logo">Image Uploader</p></a>
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
