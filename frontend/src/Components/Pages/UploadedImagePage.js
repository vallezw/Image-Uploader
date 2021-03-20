import React from 'react'
import { useParams } from 'react-router'

// Components
import UploadedImage from '../ComponentUtils/UploadedImage'
import Footer from '../ComponentUtils/Footer'
import Navbar from '../ComponentUtils/Headers/Navbar'
import UploadedImageUrl from '../ComponentUtils/UploadedImageUrl'

function UploadedImagePage() {
    
    // Get the uploaded image url by url
    const { image_url } =  useParams()

    return (
        <div className="allContainer">
            <Navbar />
            <UploadedImage image_url={image_url}/>
            <UploadedImageUrl />
            <Footer />
        </div>
    )
}

export default UploadedImagePage
