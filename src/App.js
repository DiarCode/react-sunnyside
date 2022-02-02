import Clients from './components/Clients';
import Footer from './components/Footer';
import Home from './components/Home';
import Images from './components/Images';
import Posts from './components/Posts';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <Home/>
      <Posts/>
      <Clients/>
      <Images/>
      <Footer/>
    </div>
  );
}

export default App;
