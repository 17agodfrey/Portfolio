import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import ResumeRocketPage from './pages/ResumeRocketPage.jsx';
import DateFinderPage from './pages/DateFinderPage.jsx';
import './styles/App.css'
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <BrowserRouter>
        <Navbar /> {/* Navbar is placed outside of Routes to appear on all pages */}
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/resume-rocket" element={<ResumeRocketPage/>} />
            <Route path="/datefinder" element={<DateFinderPage/>} />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
        <div id="copyright-bottom-thing">@2025 Copyright</div>
    </BrowserRouter>
  );
}

export default App;
