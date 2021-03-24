import axios from 'axios'

//import swal from 'sweetalert';
import Swal from 'sweetalert2/dist/sweetalert2.js'


export async function sendRequest(file, handleLoading, handleResponse) {
    if (file === undefined || !file.name.match(/.(jpg|jpeg|png|gif)$/i)){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Seems like you didn\'t submit an image.',
      })
      
      return
    }
  
    const formData = new FormData()
    formData.append("file", file)
  
    // Change loading state in root component
    handleLoading()
  
    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
  
      handleResponse(res)
      
    }
    catch(err) {
      console.error(err);
    }
  }
  