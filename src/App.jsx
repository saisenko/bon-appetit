import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import MenuPage from './pages/MenuPage/MenuPage';
import ChefsPage from './pages/ChefsPage/ChefsPage';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bon-appetit" element={<MainPage />} />
        <Route path="/bon-appetit/menu" element={<MenuPage />} />
        <Route path="/bon-appetit/chefs" element={<ChefsPage />} />
        <Route path="/bon-appetit/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
