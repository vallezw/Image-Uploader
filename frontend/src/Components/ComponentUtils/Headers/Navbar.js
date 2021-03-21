import React from 'react'

import '../Css/Navbar.css'

function Navbar() {
    return (
        <header>
            <a class="logo" href="/"><p className="logo">Image Uploader</p></a>
            <nav>
                <ul class="nav__links">
                    <li><a href="http://github.com/vallezw/Image-Uploader">About</a></li>
                </ul>
            </nav>
            <a class="cta" href="/">Upload</a>
        </header>
    )
}

export default Navbar
