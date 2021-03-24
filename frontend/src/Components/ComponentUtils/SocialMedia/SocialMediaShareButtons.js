import React from 'react'
import './Css/SocialMedia.css'

const URL = window.location.href

const SERVER_URL = "http://localhost:5000/download/" + URL.split(':3000/upload/')[1]
// TODO: Make it not hardcoded
const TEXT = `Hey, look at this cool image I uploaded!`

function SocialMediaShareButtons() {
    return (
        
            <div className="btn_wrap">
                <span className="socialSpan">Share</span>
                <div class="shareWrap">
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${URL}`} className="iconButton"><i class="fab fa-facebook-f"></i></a>
                    <a href={`https://twitter.com/intent/tweet?url=${URL}&text=${TEXT}`} className="iconButton"><i class="fab fa-twitter"></i></a>
                    <a href={`whatsapp://send?text=${TEXT}` + ` ${URL}`} data-action="share/whatsapp/share" className="iconButton"><i class="fab fa-whatsapp"></i></a>
                    <button onClick={() => {navigator.clipboard.writeText(URL)}} className="iconButton" ><i class="fas fa-copy"></i></button>
                    <a download="UploadedImage" href={SERVER_URL} className="iconButton"><i class="fas fa-download"></i></a>
                </div>
            </div>
        
    )
}

export default SocialMediaShareButtons
