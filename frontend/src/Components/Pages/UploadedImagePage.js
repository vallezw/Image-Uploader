import React from 'react'
import { useParams } from 'react-router'
import Header from '../ComponentUtils/Header'

function UploadedImagePage() {
    
    // Get the uploaded image url by url
    const { image_url } =  useParams()

    return (
        <div>
            <Header />
            <img src={"http://localhost:5000/upload/" + image_url} alt="Uploaded image" />
        </div>
    )
}

export default UploadedImagePage
