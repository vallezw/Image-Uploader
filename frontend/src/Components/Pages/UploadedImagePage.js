import React from 'react'
import { useParams } from 'react-router'

import './Css/UploadedImagePage.css'

// Components
import UploadedImage from '../ComponentUtils/UploadedImage'
import Footer from '../ComponentUtils/Footer'
import Navbar from '../ComponentUtils/Headers/Navbar'
import UploadedImageUrl from '../ComponentUtils/UploadedImageUrl'
import DownloadButton from '../ComponentUtils/DownloadButton/DownloadButton'

function UploadedImagePage() {
    
    // Get the uploaded image url by url
    const { image_url } =  useParams()

    return (
        <div className="allContainer">
            <Navbar />
            <div className="rowContainer">
                <UploadedImage image_url={image_url}/>
                <DownloadButton />
            </div>
            <UploadedImageUrl />
            <Footer />
        </div>
    )
}

export default UploadedImagePage
