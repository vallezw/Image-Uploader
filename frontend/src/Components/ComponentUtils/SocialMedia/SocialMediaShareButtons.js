import React, { Component } from 'react'
import './Css/SocialMedia.css'

export default class SocialMediaShareButtons extends Component {
    render() {
        const path = this.props.image_url
        const URL = `${window._env_.CLIENT_URL}/upload/${path}`
        const SERVER_URL = `${window._env_.API_URL}/download/${path}`
        const TEXT = `Hey, look at this cool image I uploaded!`
        return (
            <div className="btn_wrap">
                <span className="socialSpan">Share</span>
                <div className="shareWrap">
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${URL}`} className="iconButton"><i className="fab fa-facebook-f"></i></a>
                    <a href={`https://twitter.com/intent/tweet?url=${URL}&text=${TEXT}`} className="iconButton"><i className="fab fa-twitter"></i></a>
                    <a href={`whatsapp://send?text=${TEXT}%0a${URL}`} data-action="share/whatsapp/share" className="iconButton"><i className="fab fa-whatsapp"></i></a>
                    <button onClick={() => {navigator.clipboard.writeText(URL)}} className="iconButton" ><i className="fas fa-copy"></i></button>
                    <a download="UploadedImage" href={SERVER_URL} className="iconButton"><i className="fas fa-download"></i></a>
                </div>
            </div>
    )
    }
}

