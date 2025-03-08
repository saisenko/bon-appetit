import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import MenuPage from './pages/MenuPage/MenuPage';
import ChefsPage from './pages/ChefsPage/ChefsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import Login from "./components/auth/login/login.jsx";
import SignUp from "./components/auth/register/register.jsx";
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from "./contexts/authContext/index.jsx";

function App() {
  return (
      <AuthProvider>
          <Routes>
            <Route path="/bon-appetit/login" element={<Login />} />
            <Route path="/bon-appetit/register" element={<SignUp />} />
            <Route
                path="/bon-appetit/home"
                element={<ProtectedRoute element={MainPage} />}
            />
            <Route
                path="/bon-appetit/menu"
                element={<ProtectedRoute element={MenuPage} />}
            />
            <Route
                path="/bon-appetit/chefs"
                element={<ProtectedRoute element={ChefsPage} />}
            />
            <Route
                path="/bon-appetit/about"
                element={<ProtectedRoute element={AboutPage} />}
            />
            <Route path="*" element={<Login />} />
          </Routes>
      </AuthProvider>
  );
}

export default App;
