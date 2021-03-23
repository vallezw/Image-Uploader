import React, { Component, Fragment } from 'react'

import './Css/Image.css'
import './Css/Image.scss'

export default class UploadedImage extends Component {
    state = {
      showModal: false,
      caption: '',
      modalSrc: '',
    };
  
    render() {
        const image_url = this.props.image_url

        return (
                <Fragment>
                    <div className="box">
                        <img
                        id="myImg"
                        src={image_url}
                        onClick={() => {
                            this.setState({ showModal: true, caption: "Uploaded", modalSrc: image_url});
                        }}
                        alt="Uploaded"
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
                </Fragment>
        );
    }
  }