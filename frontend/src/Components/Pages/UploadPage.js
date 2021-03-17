import React from 'react'
import '../../App.css'
import Footer from '../ComponentUtils/Footer'

import Header from '../ComponentUtils/Headers/Header'
import ImageUploadCard from '../ComponentUtils/ImageUploadCard'

import Navbar from '../ComponentUtils/Headers/Navbar'

import '../ComponentUtils/Css/Background.css'

function UploadPage() {
    return (
        <div className="allContainer">
            <div className="container">
                <Navbar />
                <div className="cardContainer"> 
                    <ImageUploadCard />
                </div>
                <div className="footerContainer">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default UploadPage
