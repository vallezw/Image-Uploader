import React from 'react'
import './Css/SocialMedia.css'

const URL = window.location.href

const TEXT = `Hey, look at this cool picture I uploaded!`

function SocialMediaShareButtons() {
    return (
        
            <div className="btn_wrap">
                <span className="socialSpan">Share</span>
                <div class="shareWrap">
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${URL}`}><i class="fab fa-facebook-f"></i></a>
                    <a href={`https://twitter.com/intent/tweet?url=${URL}&text=${TEXT}`}><i class="fab fa-twitter"></i></a>
                    <a href={`whatsapp://send?text=${TEXT}` + ` ${URL}`} data-action="share/whatsapp/share"><i class="fab fa-whatsapp large"></i></a>
                    <i class="fas fa-copy"></i>
                    <i class="fas fa-download"></i>
                </div>
            </div>
        
    )
}

export default SocialMediaShareButtons
