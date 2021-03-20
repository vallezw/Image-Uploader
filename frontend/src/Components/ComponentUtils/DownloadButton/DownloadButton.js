import React from 'react'
import ButtonHover from './ButtonHover'

import '../Css/DownloadButton.css'

function DownloadButton() {

    const handleClick = () => {
        console.log("test");
    }

    return (
        <div className="buttonContainer">
            <ButtonHover onClick={handleClick}/>
        </div>
    )
}

export default DownloadButton
