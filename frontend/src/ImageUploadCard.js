import React, {Fragment, useMemo, useRef, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import {useDropzone} from 'react-dropzone';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import goingUpImage from './Images/going_up_rm.png'

import { ClimbingBoxLoader } from 'react-spinners';


const useStyles = makeStyles({
  root: {
    paddingLeft: "40px",
    paddingRight: "40px",
    borderRadius: "7px"
  },
  imageStyle: {
      width: "150px"
  },
  headerText: {
      fontFamily: "roboto",
      fontWeight: "lighter",
      fontSize: 20,
      textAlign: "center",
      paddingBottom: 0
  },
  subheaderText: {
    fontFamily: "roboto",
    fontWeight: "lighter",
    fontSize: 11,
    color: "grey",
    textAlign: "center"
  },
  button: {
    margin: 10,
    marginTop: 20,
    left: "14%"
  },
});

// For Dropzone:
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

export default function ImageUploadCard() {
  const classes = useStyles();

  const [loading, setLoading] = useState(false)


  const handleLoading = () => {
    setLoading(true)
  }

  return (
    <div>
      {!loading? 
      <Card className={classes.root}>
        <CardContent>
          <p className={classes.headerText}>Upload your image</p>
          <p className={classes.subheaderText}>File should be Jpeg, Png, ...</p>
          <StyledDropzone handleLoading={handleLoading} />
          <UploadButton handleLoading={handleLoading} />
        </CardContent>
      </Card>
      :
      <ClimbingBoxLoader
          color={'#6C63FF'}
          size={15}
          loading={loading} 
        />
      }
    </div>
  );
}

function StyledDropzone(props) {
    const classes = useStyles();

    const {
      getRootProps,
      isDragActive,
      isDragAccept,
      isDragReject
    } = useDropzone({accept: 'image/*', onDrop: (file) => {
      send_request(file[0], props.handleLoading)
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
          <p>Drag 'n' drop your image here</p>
          <img src={goingUpImage} alt="goingUpImage" className={classes.imageStyle} />
        </div>
      </div>
    );
}

function UploadButton(props) {
    const classes = useStyles();

    const inputFile = useRef(null) 

    const onButtonClick = () => {
        inputFile.current.click();
    }

    const handleChange = event => {
      const fileUploaded = event.target.files[0];
      send_request(fileUploaded, props.handleLoading)
    }

    return(
        <Fragment>
            <input type='file' id='file' ref={inputFile} style={{display: 'none'}} onChange={handleChange}/>
            
            <Button
            variant="outlined"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
            onClick={onButtonClick}
        >
            Choose Image
        </Button>
      </Fragment>
    )
}


async function send_request(file, handleLoading) {
  console.log(file);
  
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

    console.log(res.data)
  }
  catch(err) {
    console.error(err);
  }
}
