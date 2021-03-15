import axios from 'axios'

import swal from 'sweetalert';


export async function sendRequest(file, handleLoading, handleResponse) {
    if (file === undefined || !file.name.match(/.(jpg|jpeg|png|gif)$/i)){
      swal("Seems like your file wasn't an image", "Try again with a file ending like jpeg, png, etc", "error")
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
  
      console.log("handle response");
      handleResponse(res)
      
    }
    catch(err) {
      console.error(err);
    }
  }
  