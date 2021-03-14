import React from 'react'
import '../../App.css'

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
            </div>
        </div>
    )
}

export default UploadPage
