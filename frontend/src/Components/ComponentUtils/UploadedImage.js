import React, { Component } from 'react'

import './Css/Image.css'

export default class UploadedImage extends Component {
    state = {
      showModal: false,
      caption: '',
      modalSrc: '',
    };
  
    render() {
        const image_url = this.props.image_url

        return (
            <div>
            <div>
                <img
                id="myImg"
                src={image_url}
                onClick={() => {
                    this.setState({ showModal: true, caption: "Uploaded", modalSrc: image_url});
                }}
                alt="Uploaded"
                style={{ width: '100%', maxWidth: '300px' }}
                />
            </div>
    
            <div
                id="myModal"
                className="modal"
                style={{ display: this.state.showModal ? 'block' : 'none' }}
            >
                <div>
                <span className="close" onClick={() => this.setState({ showModal: false })}>
                    &times;
                </span>
                <img className="modal-content" id="img01" src={this.state.modalSrc} alt="Uploaded"/>
                </div>
            </div>
            </div>
        );
    }
  }