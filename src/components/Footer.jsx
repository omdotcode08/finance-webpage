import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MessageCircle, Briefcase, Globe, Camera } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <ShieldCheck size={28} className="logo-icon" />
              <span>FinNest</span>
            </Link>
            <p className="footer-desc">
              FinNest is a SEBI registered investment advisor offering secure, reliable, and modern financial services to grow your wealth.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><MessageCircle size={20} /></a>
              <a href="#" className="social-icon"><Briefcase size={20} /></a>
              <a href="#" className="social-icon"><Globe size={20} /></a>
              <a href="#" className="social-icon"><Camera size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">Platform</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/marketing">Marketing</Link></li>
              <li><Link to="/crm">CRM Dashboard</Link></li>
              <li><Link to="/revenue">Revenue</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">Legal & Security</h4>
            <ul>
              <li><Link to="/security">Security</Link></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">SEBI Disclosures</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <p>1800-123-4567</p>
            <p>support@finnest.com</p>
            <p>FinNest Towers, BKC, Mumbai - 400051</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} FinNest Financial Services. All rights reserved.</p>
          <p className="disclaimer">
            Disclaimer: Investments in securities market are subject to market risks, read all the related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
