import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


// Components
import StyledDropzone from './StyledDropzone'
import UploadButton from './UploadButton'
import Loading from './Loading';

import '../../App.css'

const useStyles = makeStyles({
  root: {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius: "7px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  headerText: {
      fontFamily: "roboto",
      fontWeight: "300",
      fontSize: 20,
      textAlign: "center",
      paddingBottom: 0,
      lineHeight: "0em"
  },
  subheaderText: {
    fontFamily: "roboto",
    fontWeight: "300",
    fontSize: 11,
    color: "grey",
    textAlign: "center",
    lineHeight: "0.7em",
    paddingBottom: "20px"
  }
});


export default function ImageUploadCard() {
  const classes = useStyles();

  // History for pushing to a new link after uploading image
  const history = useHistory(); 

  const [loading, setLoading] = useState(false)


  const handleLoading = () => {
    setLoading(true)
  }

  const handleResponse = (value) => {
    // TODO: React router auf uploaded page führen
    console.log(value)
    setTimeout(() => {
      setLoading(false)
      history.push(value.data.filePath)
      Swal.fire({
        icon: 'success',
        title: "Your image was uploaded!",
        showConfirmButton: false,
        timer: 1500
      })
      //swal("Your file was succesfully uploaded", "You can share your file all over the internet now!", "success")
      
    }, 2000)
    
  }


  return (
    <div>
      {!loading? 
        <div className="cardContainer"> 
          <Card className={classes.root}>
            <CardContent>
              <p className={classes.headerText}>Upload your image</p>
              <p className={classes.subheaderText}>File should be Jpeg, Png, ...</p>
              <StyledDropzone handleLoading={handleLoading} handleResponse={handleResponse} />
              <UploadButton handleLoading={handleLoading} handleResponse={handleResponse} />
            </CardContent>
          </Card>
        </div>
      :
        <div className="loadingContainer">
          <Loading />
        </div>
      }
    </div>
  );
}



