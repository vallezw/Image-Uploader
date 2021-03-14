import React from 'react'
import '../../App.css'
import Footer from '../ComponentUtils/Footer'

import Header from '../ComponentUtils/Header'
import ImageUploadCard from '../ComponentUtils/ImageUploadCard'

function UploadPage() {
    return (
        <div>
            <div className="container">
                <Header />
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
