import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { useHistory } from "react-router-dom";


// Components
import StyledDropzone from './StyledDropzone'
import UploadButton from './UploadButton'
import Loading from './Loading';

const useStyles = makeStyles({
  root: {
    paddingLeft: "40px",
    paddingRight: "40px",
    borderRadius: "7px"
  },
  headerText: {
      fontFamily: "roboto",
      fontWeight: "lighter",
      fontSize: 20,
      textAlign: "center",
      paddingBottom: 0,
      lineHeight: "0em"
  },
  subheaderText: {
    fontFamily: "roboto",
    fontWeight: "lighter",
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
    setLoading(false)
    history.push("/about")
    
  }


  return (
    <div>
      {!loading? 
      <Card className={classes.root}>
        <CardContent>
          <p className={classes.headerText}>Upload your image</p>
          <p className={classes.subheaderText}>File should be Jpeg, Png, ...</p>
          <StyledDropzone handleLoading={handleLoading} handleResponse={handleResponse} />
          <UploadButton handleLoading={handleLoading} handleResponse={handleResponse} />
        </CardContent>
      </Card>
      :
        <Loading />
      }
    </div>
  );
}



