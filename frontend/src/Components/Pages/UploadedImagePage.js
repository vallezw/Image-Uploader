import React, { useState } from 'react'
import { useParams } from 'react-router'

import './Css/UploadedImagePage.css'

// Components
import UploadedImage from '../ComponentUtils/UploadedImage'
import Footer from '../ComponentUtils/Footer'
import Navbar from '../ComponentUtils/Headers/Navbar'
import SocialMediaShareButtons from '../ComponentUtils/SocialMedia/SocialMediaShareButtons'

import FZF from './404Page'

function UploadedImagePage() {
    
    // Get the uploaded image url by url
    const { image_url } =  useParams()
    const [imageFound, setImageFound] = useState(true)

    return (
        <div>
        {imageFound?
            <div className="allContainer">
                <Navbar />
                <div className="rootUploadWrap">
                    <UploadedImage image_url={image_url} imageNotFound={() => setImageFound(false)}/>
                    <SocialMediaShareButtons image_url={image_url}/>
                </div>
                <Footer />
            </div>
            :
            <FZF />
        }
        </div>
    )
}

export default UploadedImagePage
