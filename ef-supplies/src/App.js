import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/loginForm/loginForm.jsx';
import HomePage from './Components/Home/Home.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
