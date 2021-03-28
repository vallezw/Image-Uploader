import React, { useMemo, useRef } from 'react';
import { useDropzone } from 'react-dropzone';

import { sendRequest } from '../../Utils/sendRequest'
import goingUpImage from '../../Images/going_up.svg'


const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
};
  
const activeStyle = {
    borderColor: '#2196f3'
};
  
const acceptStyle = {
    borderColor: '#00e676'
};
  
const rejectStyle = {
    borderColor: '#ff1744'
};

const textStyle = {
  fontFamily: "Roboto",
  fontWeight: "300",
  fontSize: "14px"
}

const divStyle = {
  float:"left",
  position:"absolute",
  marginTop: "56px",
  marginRight: "10px",
  padding:"20px",
  color:"#FFFFFF",
  cursor: "pointer"
}


export default function StyledDropzone(props) {
    const {
      getRootProps,
      isDragActive,
      isDragAccept,
      isDragReject
    } = useDropzone({accept: 'image/jpeg, image/png, image/gif', onDrop: (file) => {
      sendRequest(file[0], props.handleLoading, props.handleResponse)
    }});
  
    const style = useMemo(() => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }), [
      isDragActive,
      isDragReject,
      isDragAccept
    ]);

    const inputFile = useRef(null) 

    const handleChange = event => {
      const fileUploaded = event.target.files[0];
      sendRequest(fileUploaded, props.handleLoading, props.handleResponse)
    }

    const onDivClick = () => {
      inputFile.current.click();
  }
  
    return (
      <div className="container">
        <div {...getRootProps({style})}>
          <p style={textStyle}>Drag 'n' drop your image here</p>
          <div style={divStyle} onClick={onDivClick}>
            <input type='file' id='file' ref={inputFile} style={{display: 'none'}} onChange={handleChange}/>
          </div>
          <img src={goingUpImage} alt="goingUpImage" style={{width: "150px"}} />
        </div>
      </div>
    );
}