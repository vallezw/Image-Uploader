import React from 'react'
import './Css/SocialMedia.css'

function SocialMediaShareButtons() {
    return (
        <div>
            <div class="btn_wrap">
                <span className="socialSpan">Share</span>
                <div class="container">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fas fa-copy"></i>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaShareButtons