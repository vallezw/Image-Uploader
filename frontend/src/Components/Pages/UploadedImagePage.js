import React from 'react'
import { useParams } from 'react-router'

// Components
import UploadedImage from '../ComponentUtils/UploadedImage'
import Header from '../ComponentUtils/Headers/HeaderUploaded'
import Footer from '../ComponentUtils/Footer'
import SocialMediaShareButtons from '../ComponentUtils/SocialMediaShareButtons'

function UploadedImagePage() {
    
    // Get the uploaded image url by url
    const { image_url } =  useParams()

    return (
        <div>
            <Header />
            <UploadedImage image_url={image_url}/>
            <SocialMediaShareButtons />
            <Footer />
        </div>
    )
}

export default UploadedImagePage
