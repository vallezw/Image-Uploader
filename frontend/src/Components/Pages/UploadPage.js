import React, { useState } from 'react'
import '../../App.css'
import Footer from '../ComponentUtils/Footer'

import ImageUploadCard from '../ComponentUtils/ImageUploadCard'

import Navbar from '../ComponentUtils/Headers/Navbar'

import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import { sendRequest } from '../../Utils/sendRequest'

import '../ComponentUtils/Css/Background.css'

function UploadPage() {


     // History for pushing to a new link after uploading image
  const history = useHistory(); 

  const [loading, setLoading] = useState(false)


  const handleLoading = () => {
    setLoading(true)
  }

  const handleResponse = (value) => {
    // Router push to uploadd page
    setTimeout(() => {
      setLoading(false)
      history.push(value.data.filePath)
      Swal.fire({
        icon: 'success',
        title: "Your image was uploaded!",
        showConfirmButton: false,
        timer: 1500
      })
    }, 2000)    
  }

    const handlePaste = (event) => {
        const fileUploaded = event.clipboardData.files[0]
        sendRequest(fileUploaded, handleLoading, handleResponse)
    }

    return (
        <div className="allContainer" onPaste={handlePaste}>
            <Navbar />
            <ImageUploadCard handleLoading={handleLoading} handleResponse={handleResponse} loading={loading}/>
            <div className="footerContainer">
                <Footer />
            </div>
        </div>
    )
}

export default UploadPage
