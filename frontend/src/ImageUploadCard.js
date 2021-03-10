import React, {useMemo} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import {useDropzone} from 'react-dropzone';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import goingUpImage from './Images/going_up_rm.png'


const useStyles = makeStyles({
  root: {
    paddingLeft: "40px",
    paddingRight: "40px"
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
    left: "17%"
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
  return (
    <Card className={classes.root}>
      <CardContent>
        <p className={classes.headerText}>Upload your image</p>
        <p className={classes.subheaderText}>File should be Jpeg, Png, ...</p>
        <StyledDropzone />

        <UploadButton />
      </CardContent>
    </Card>
  );
}

function StyledDropzone(props) {
    const classes = useStyles();

    const {
      getRootProps,
      isDragActive,
      isDragAccept,
      isDragReject
    } = useDropzone({accept: 'image/*', onDrop: (file) => {console.log(file);}});
  
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

function UploadButton() {
    const classes = useStyles();

    return(
        <Button
        variant="outlined"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Choose Image
      </Button>
    )
}