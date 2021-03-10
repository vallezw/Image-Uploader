import './App.css';

// Components
import ImageUploadCard from './ImageUploadCard'
import Header from './Header'

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
