import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

// Pages
import Home from './pages/Home';
import RevenueModel from './pages/RevenueModel';
import MarketingStrategy from './pages/MarketingStrategy';
import CrmStrategy from './pages/CrmStrategy';
import Security from './pages/Security';
import Login from './pages/Login';
import Signup from './pages/Signup';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/revenue" element={<RevenueModel />} />
            <Route path="/marketing" element={<MarketingStrategy />} />
            <Route path="/crm" element={<CrmStrategy />} />
            <Route path="/security" element={<Security />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;
