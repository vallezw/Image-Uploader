import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import UploadPage from './Components/Pages/UploadPage'
import UploadedImage from './Components/Pages/UploadedImagePage';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UploadPage} />
        <Route path="/upload/:image_url" component={UploadedImage} />
      </Switch>
    </Router>
  );
}

export default App;
