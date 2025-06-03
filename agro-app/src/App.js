import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Footer from './components/footer';
import  Shop  from './pages/shop';
import { BrowserRouter, Routes, Route } from "react-router";
import DairyShop from './pages/DairyShop'
import MeatShop from './pages/MeatShop'
import VegetableShop from './pages/VegetableShop'
import AboutPage from './pages/about';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
 <Route path="/Home" element={<Home />} />
  <Route path="/Shop" element={<Shop />} />
  <Route path="/dairy" element={<DairyShop />} />
<Route path="/meat" element={<MeatShop />} />
<Route path="/vegetables" element={<VegetableShop />} />
<Route path="/about" element={<AboutPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;