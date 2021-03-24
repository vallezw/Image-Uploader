import React, { useMemo } from 'react';
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
  
    return (
      <div className="container">
        <div {...getRootProps({style})}>
          <p style={textStyle}>Drag 'n' drop your image here</p>
          <img src={goingUpImage} alt="goingUpImage" style={{width: "150px"}} />
        </div>
      </div>
    );
}