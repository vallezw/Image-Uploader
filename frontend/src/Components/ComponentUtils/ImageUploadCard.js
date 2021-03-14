import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
      paddingBottom: 0
  },
  subheaderText: {
    fontFamily: "roboto",
    fontWeight: "lighter",
    fontSize: 11,
    color: "grey",
    textAlign: "center"
  }
});


export default function ImageUploadCard() {
  const classes = useStyles();

  const [loading, setLoading] = useState(false)


  const handleLoading = () => {
    setLoading(true)
  }

  const handleResponse = (value) => {
    // TODO: React router auf uploaded page führen
    setLoading(false)
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



