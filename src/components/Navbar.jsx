import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShieldCheck, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <ShieldCheck size={32} className="logo-icon" />
          <span>FinNest</span>
        </Link>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={closeMenu} className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"}>Home</NavLink>
          <NavLink to="/revenue" onClick={closeMenu} className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"}>Revenue</NavLink>
          <NavLink to="/marketing" onClick={closeMenu} className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"}>Marketing</NavLink>
          <NavLink to="/crm" onClick={closeMenu} className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"}>CRM Platform</NavLink>
          <NavLink to="/security" onClick={closeMenu} className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"}>Security</NavLink>
          
          <div className="nav-actions-mobile">
            <Link to="/login" className="btn btn-outline" onClick={closeMenu}>Login</Link>
            <Link to="/signup" className="btn btn-primary" onClick={closeMenu}>Start Investing</Link>
          </div>
        </div>

        <div className="nav-actions-desktop">
          <Link to="/login" className="btn btn-outline">Login</Link>
          <Link to="/signup" className="btn btn-primary">Start Investing</Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
