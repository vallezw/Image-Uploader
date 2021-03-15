import React from 'react'

import './Css/Image.css'

function UploadedImage(props) {
    return (
        <div>
            <img src={"http://localhost:5000/upload/" + props.image_url} alt="Uploaded image" />
        </div>
    )
}

export default UploadedImage
