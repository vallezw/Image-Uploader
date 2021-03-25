import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import UploadPage from './Components/Pages/UploadPage'
import UploadedImage from './Components/Pages/UploadedImagePage';
import FZF from './Components/Pages/404Page.js'

function App() {
  return (
    <Router>
      <h1>API_URL: {window._env_.API_URL}</h1>
      <Switch>
        <Route path="/" exact component={UploadPage} />
        <Route path="/upload/:image_url" component={UploadedImage} />
        <Route component={FZF} />
      </Switch>
    </Router>
  );
}

export default App;
