import './App.css';

// Components
import ImageUploadCard from './Components/ImageUploadCard'
import Header from './Components/Header'

function App() {
  return (
    <div className="container">
    <Header />
    <div className="cardContainer"> 
      <ImageUploadCard />
    </div>
    </div>
  );
}

export default App;
