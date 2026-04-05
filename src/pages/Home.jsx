import React, { useState } from 'react';
import { TrendingUp, Shield, BarChart3, Briefcase, Calculator, Smartphone, CheckCircle, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [sipAmount, setSipAmount] = useState(5000);
  const [sipYears, setSipYears] = useState(10);
  const [returnRate, setReturnRate] = useState(12);

  // SIP Calculation logic
  const calculateSIP = () => {
    const p = sipAmount;
    const n = sipYears * 12;
    const i = returnRate / 100 / 12;
    const m = Math.round(p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i));
    const investedAmount = p * n;
    const estReturns = m - investedAmount;
    return { investedAmount, estReturns, totalValue: m };
  };

  const sipResult = calculateSIP();

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="badge">SEBI Registered Advisor</div>
            <h1 className="hero-title">Grow Your Wealth, Secure Your Future</h1>
            <p className="hero-subtitle">
              Join millions of Indians making smarter financial decisions with FinNest's zero-brokerage platform, curated mutual funds, and advanced wealth management tools.
            </p>
            <div className="hero-actions">
              <Link to="/signup" className="btn btn-primary btn-lg">Open Free Demat Account</Link>
              <Link to="/revenue" className="btn btn-outline btn-lg">Explore Our Plans</Link>
            </div>
            <div className="hero-trust">
              <span><CheckCircle size={16} className="text-green" /> 2 Lakh+ Happy Investors</span>
              <span><CheckCircle size={16} className="text-green" /> ₹500Cr+ AUM</span>
              <span><CheckCircle size={16} className="text-green" /> 99.9% Uptime</span>
            </div>
          </div>
          
          <div className="hero-widget card">
            <h3>Quick Invest Setup</h3>
            <div className="widget-form">
              <div className="form-group">
                <label className="form-label">Investment Amount (₹)</label>
                <input type="number" className="form-input" defaultValue="10000" />
              </div>
              <div className="form-group">
                <label className="form-label">Financial Goal</label>
                <select className="form-input">
                  <option>Wealth Creation</option>
                  <option>Retirement</option>
                  <option>Education</option>
                  <option>Tax Saving (ELSS)</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Time Horizon: 5 Years</label>
                <input type="range" min="1" max="30" defaultValue="5" className="slider" />
              </div>
              <button className="btn btn-primary w-100 mt-2">See Projections <ChevronRight size={16}/></button>
            </div>
          </div>
        </div>
        
        <div className="hero-glow"></div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section container">
        <div className="text-center mb-5">
          <h2 className="section-title">Everything you need for your finances</h2>
          <p className="section-subtitle mx-auto">One platform to invest, borrow, insure, and manage your wealth.</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card cursor-pointer" onClick={() => window.location.href='/crm'}>
            <div className="service-icon"><BarChart3 size={28} /></div>
            <h3>Mutual Funds</h3>
            <p>0% Commission direct mutual funds with expert curation and portfolio insights.</p>
          </div>
          <div className="service-card">
            <div className="service-icon"><TrendingUp size={28} /></div>
            <h3>Stock Trading</h3>
            <p>Advanced charting, one-click order execution, and zero delivery brokerage.</p>
          </div>
          <div className="service-card">
            <div className="service-icon"><Shield size={28} /></div>
            <h3>Insurance</h3>
            <p>Term life and health insurance covers with up to 99% claim settlement ratio.</p>
          </div>
          <div className="service-card">
            <div className="service-icon"><Briefcase size={28} /></div>
            <h3>Fixed Deposits</h3>
            <p>Earn up to 8.5% p.a. with partner banks. DICGC insured up to ₹5 Lakhs.</p>
          </div>
          <div className="service-card">
            <div className="service-icon"><Calculator size={28} /></div>
            <h3>Tax Filing</h3>
            <p>File ITR directly through the platform. Maximize your tax deductions.</p>
          </div>
          <div className="service-card">
            <div className="service-icon"><Smartphone size={28} /></div>
            <h3>Portfolio Tracker</h3>
            <p>Track all your external investments, EPF, and real estate in one view.</p>
          </div>
        </div>
      </section>

      {/* SIP CALCULATOR SECTION */}
      <section className="sip-section">
        <div className="container sip-container">
          <div className="sip-content">
            <h2 className="section-title">Small steps, massive wealth</h2>
            <p className="section-subtitle">
              Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly. See how the magic of compounding works over time.
            </p>
            <ul className="sip-features">
              <li><CheckCircle size={18} className="text-green" /> Discipline in investing</li>
              <li><CheckCircle size={18} className="text-green" /> Rupee cost averaging</li>
              <li><CheckCircle size={18} className="text-green" /> Power of compounding</li>
            </ul>
          </div>
          
          <div className="sip-calculator card">
            <div className="calc-inputs">
              <div className="calc-group">
                <div className="calc-header">
                  <span>Monthly Investment</span>
                  <span className="calc-value">₹{sipAmount.toLocaleString()}</span>
                </div>
                <input 
                  type="range" className="slider" 
                  min="500" max="100000" step="500" 
                  value={sipAmount} onChange={(e) => setSipAmount(Number(e.target.value))} 
                />
              </div>
              <div className="calc-group">
                <div className="calc-header">
                  <span>Expected Return Rate (p.a)</span>
                  <span className="calc-value">{returnRate}%</span>
                </div>
                <input 
                  type="range" className="slider" 
                  min="1" max="30" step="1" 
                  value={returnRate} onChange={(e) => setReturnRate(Number(e.target.value))} 
                />
              </div>
              <div className="calc-group">
                <div className="calc-header">
                  <span>Time Period</span>
                  <span className="calc-value">{sipYears} Years</span>
                </div>
                <input 
                  type="range" className="slider" 
                  min="1" max="40" step="1" 
                  value={sipYears} onChange={(e) => setSipYears(Number(e.target.value))} 
                />
              </div>
            </div>
            
            <div className="calc-results">
              <div className="result-row">
                <span>Invested Amount</span>
                <strong>₹{sipResult.investedAmount.toLocaleString()}</strong>
              </div>
              <div className="result-row">
                <span>Est. Returns</span>
                <strong className="text-green">₹{sipResult.estReturns.toLocaleString()}</strong>
              </div>
              <div className="result-row total">
                <span>Total Value</span>
                <strong>₹{sipResult.totalValue.toLocaleString()}</strong>
              </div>
              <Link to="/signup" className="btn btn-primary w-100 mt-4">Start this SIP</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-section container">
        <h2 className="section-title text-center">Trusted by investors worldwide</h2>
        <div className="testimonials-grid mt-5">
          <div className="testimonial-card card">
            <div className="stars"><Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/></div>
            <p className="test-text">"FinNest made it incredibly easy to start my investment journey. The zero brokerage model and clean UI are game changers."</p>
            <div className="test-author">
              <div className="avatar">A</div>
              <div>
                <h4>Anjali Sharma</h4>
                <span>Software Engineer</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card card">
            <div className="stars"><Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/></div>
            <p className="test-text">"The built-in tax filing tool combined with their ELSS mutual fund suggestions saved me thousands this year!"</p>
            <div className="test-author">
              <div className="avatar">R</div>
              <div>
                <h4>Rahul Desai</h4>
                <span>Business Owner</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card card">
            <div className="stars"><Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/></div>
            <p className="test-text">"Their CRM for wealth advisory is unmatched. My Relationship Manager always has real-time insights on my portfolio."</p>
            <div className="test-author">
              <div className="avatar">P</div>
              <div>
                <h4>Priya Patel</h4>
                <span>Doctor</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
