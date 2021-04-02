import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grow from '@material-ui/core/Grow';

// Components
import StyledDropzone from './StyledDropzone'
import UploadButton from './UploadButton'
import Loading from './LoadingAnimation/Loading';

import '../../App.css'

const useStyles = makeStyles({
  root: {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius: "7px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    display: "grid",
    placeItems: "center"
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


export default function ImageUploadCard(props) {
  const classes = useStyles();
  const checked = true
  return (
    <div>
      {!props.loading? 
        <div className="cardContainer"> 
         <Grow in={checked}>
          <Card className={classes.root}>
            <CardContent>
              <p className={classes.headerText}>Upload your image</p>
              <p className={classes.subheaderText}>File should be Jpeg, Png, ...</p>
              <StyledDropzone handleLoading={props.handleLoading} handleResponse={props.handleResponse} />
              <UploadButton handleLoading={props.handleLoading} handleResponse={props.shandleResponse} />
            </CardContent>
          </Card>
          </Grow>
        </div>
      :
        <div className="loadingContainer">
          <Loading />
        </div>
      }
    </div>
  );
}



