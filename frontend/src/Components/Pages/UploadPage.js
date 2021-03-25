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
            <h1>TEST</h1>
            <h1>API_URL: {window._env_.API_URL}</h1>
            <h1>CLIENT_URL: {window._env_.CLIENT_URL}</h1>
            <ImageUploadCard />
            <div className="footerContainer">
                <Footer />
            </div>
        </div>
    )
}

export default UploadPage
