import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import LandingPage from './pages/LandingPage.jsx';
import ResumeRocketPage from './pages/ResumeRocketPage.jsx';
import WhatDoPage from './pages/WhatDoPage.jsx';
import AlliedMechanicalPage from './pages/AlliedMechanicalPage.jsx';
import './styles/App.css'
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <BrowserRouter>
        <Navbar /> {/* Navbar is placed outside of Routes to appear on all pages */}
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/resume-rocket" element={<ResumeRocketPage/>} />
            <Route path="/whatdo" element={<WhatDoPage/>} />
            <Route path="/allied-mechanical-job-costing-tool" element={<AlliedMechanicalPage/>} />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
        <div id="copyright-bottom-thing">@2025 Copyright</div>
    </BrowserRouter>
  );
}

export default App;
