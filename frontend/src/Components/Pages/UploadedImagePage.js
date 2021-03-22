import React from 'react'
import { useParams } from 'react-router'

import './Css/UploadedImagePage.css'

// Components
import UploadedImage from '../ComponentUtils/UploadedImage'
import Footer from '../ComponentUtils/Footer'
import Navbar from '../ComponentUtils/Headers/Navbar'
import UploadedImageUrl from '../ComponentUtils/UploadedImageUrl'
import DownloadButton from '../ComponentUtils/DownloadButton/DownloadButton'
import SocialMediaShareButtons from '../ComponentUtils/SocialMedia/SocialMediaShareButtons'

function UploadedImagePage() {
    
    // Get the uploaded image url by url
    const { image_url } =  useParams()

    return (
        <div className="allContainer">
            <Navbar />
            <UploadedImage image_url={image_url}/>
            <SocialMediaShareButtons />
            <div className="rowContainer">
                <DownloadButton />                
            </div>
            <Footer />
        </div>
    )
}

export default UploadedImagePage
