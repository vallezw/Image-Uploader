import React from 'react'
import '../../App.css'
import Footer from '../ComponentUtils/Footer'

import ImageUploadCard from '../ComponentUtils/ImageUploadCard'

import Navbar from '../ComponentUtils/Headers/Navbar'

import '../ComponentUtils/Css/Background.css'

function UploadPage() {
    return (
        <div className="allContainer">
            <Navbar />
            <ImageUploadCard />
            <div className="footerContainer">
                <Footer />
            </div>
        </div>
    )
}

export default UploadPage
