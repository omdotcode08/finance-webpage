import React from 'react';
import { ShieldCheck, Lock, CheckCircle, Search, Server, UserCheck, AlertTriangle, Fingerprint, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Security.css';

const Security = () => {
  return (
    <div className="security-page container section-padding">
      <div className="text-center mb-5">
        <div className="badge">Bank-Grade Security</div>
        <h1 className="section-title">Your Trust Is Our Top Priority</h1>
        <p className="section-subtitle mx-auto">
          We employ the highest standards of security, encryption, and regulatory compliance to ensure your wealth and data are always protected.
        </p>
      </div>

      <div className="security-content">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><Lock size={24} /></div>
            <div>
              <h3>256-bit SSL/TLS Encryption</h3>
              <p>All data in transit is encrypted using military-grade AES-256 standards. Look for the padlock in your browser.</p>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon"><Fingerprint size={24} /></div>
            <div>
              <h3>Two-Factor Authentication</h3>
              <p>Mandatory 2FA via OTP or Authenticator App for every login to prevent unauthorized access.</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><ShieldCheck size={24} /></div>
            <div>
              <h3>SEBI & RBI Compliant</h3>
              <p>Fully compliant with the regulatory frameworks. We operate purely under the oversight of SEBI (INA000012345).</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><UserCheck size={24} /></div>
            <div>
              <h3>Role-Based Access</h3>
              <p>Strict access controls isolating customer data from Relationship Managers and internal support staff.</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><Search size={24} /></div>
            <div>
              <h3>KYC & AML Checks</h3>
              <p>Automated backend screening against global watchlists and real-time Aadhaar/PAN verifications.</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><Activity size={24} /></div>
            <div>
              <h3>Fraud Detection Engine</h3>
              <p>AI-driven anomaly detection flags unusual withdrawal behaviors and IP mismatches instantly.</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><AlertTriangle size={24} /></div>
            <div>
              <h3>Session Management</h3>
              <p>Auto-logout on 10 minutes of inactivity and active un-trusted device management.</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><Server size={24} /></div>
            <div>
              <h3>Audit Logging & Data at Rest</h3>
              <p>Every internal action is logged. Database disks are encrypted at rest with AWS KMS.</p>
            </div>
          </div>
        </div>

        <div className="security-widgets">
          <div className="security-score-widget card">
            <h3 className="mb-4">Account Security Check</h3>
            
            <div className="score-ring mb-4">
              <svg className="circular-chart text-warning" viewBox="0 0 36 36">
                <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="circle" strokeDasharray="78, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <text x="18" y="20.35" className="percentage">78%</text>
              </svg>
            </div>

            <ul className="checklist">
              <li className="passed"><CheckCircle size={18} /> Email Verified</li>
              <li className="passed"><CheckCircle size={18} /> Password Strength: Strong</li>
              <li className="passed"><CheckCircle size={18} /> 2FA Enabled</li>
              <li className="warning"><AlertTriangle size={18} /> No Nominee Added</li>
              <li className="failed"><CheckCircle size={18} /> PAN Not Linked</li>
            </ul>

            <Link to="/login" className="btn btn-outline w-100 mt-4">
              Test Secure Login Flow
            </Link>
          </div>
          
          <div className="bug-bounty-card glass-panel mt-4">
            <div className="d-flex align-items-center gap-3 mb-2">
              <ShieldCheck size={32} className="text-green" />
              <h3>Bug Bounty Program</h3>
            </div>
            <p className="text-sm text-muted">Think you found a vulnerability? Report it to our security team and earn rewards up to ₹5,00,000.</p>
            <a href="#" className="link text-sm mt-2 d-inline-block">View Policy <ArrowRight size={14}/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
