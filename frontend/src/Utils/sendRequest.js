import axios from 'axios'

export async function sendRequest(file, handleLoading, handleResponse) {
    if (file === undefined || !file.name.match(/.(jpg|jpeg|png|gif)$/i)){
      alert('This is not an image!');
      // TODO: make a proper error message
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
  