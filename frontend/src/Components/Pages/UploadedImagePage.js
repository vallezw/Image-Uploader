import React from 'react'
import { useParams } from 'react-router'

function UploadedImagePage() {
    
    // Get the uploaded image url by url
    const { image_url } =  useParams()

    return (
        <div>
         <h1>{image_url}</h1>   
        </div>
    )
}

export default UploadedImagePage
