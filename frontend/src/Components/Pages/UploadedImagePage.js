import React from 'react'
import { useParams } from 'react-router'

import UploadedImage from '../ComponentUtils/UploadedImage'
import Header from '../ComponentUtils/Header'


function UploadedImagePage() {
    
    // Get the uploaded image url by url
    const { image_url } =  useParams()

    return (
        <div>
            <Header />
            <UploadedImage image_url={image_url}/>
        </div>
    )
}

export default UploadedImagePage
