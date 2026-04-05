import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Phone, ArrowRight, ShieldAlert } from 'lucide-react';
import './Auth.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    termsAgreed: false
  });
  const getPasswordStrength = (pwd) => {
    let score = 0;
    if (pwd.length > 5) score += 1;
    if (pwd.length > 8) score += 1;
    if (/[A-Z]/.test(pwd)) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;

    let label = 'Weak';
    let color = 'var(--accent-red)';
    if (score >= 4) { label = 'Very Strong'; color = 'var(--primary-green)'; }
    else if (score === 3) { label = 'Strong'; color = '#00E676'; }
    else if (score === 2) { label = 'Fair'; color = '#FFC107'; }

    return { score, label, color };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!formData.termsAgreed) {
      setError("You must agree to the Terms & Conditions");
      return;
    }
    // Mock success
    navigate('/login');
  };

  return (
    <div className="auth-page">
      <div className="auth-container card signup-card">
        <div className="auth-box">
          <h2 className="section-title text-center">Create an Account</h2>
          <p className="section-subtitle text-center">Join 2 Lakh+ smart investors on FinNest.</p>
          
          <form onSubmit={handleSubmit} className="auth-form signup-form">
            <div className="form-row">
              <div className="form-group w-50">
                <label className="form-label">Full Name*</label>
                <div className="input-with-icon">
                  <User className="input-icon" size={18} />
                  <input 
                    type="text" 
                    name="fullName"
                    className="form-input has-icon" 
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group w-50">
                <label className="form-label">Mobile Number*</label>
                <div className="input-with-icon">
                  <Phone className="input-icon" size={18} />
                  <input 
                    type="tel" 
                    name="phone"
                    className="form-input has-icon" 
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email Address*</label>
              <div className="input-with-icon">
                <Mail className="input-icon" size={18} />
                <input 
                  type="email" 
                  name="email"
                  className="form-input has-icon" 
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group w-50">
                <label className="form-label">Password*</label>
                <div className="input-with-icon">
                  <Lock className="input-icon" size={18} />
                  <input 
                    type="password" 
                    name="password"
                    className="form-input has-icon" 
                    placeholder="Create Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {formData.password && (
                  <div className="pwd-strength mt-2">
                    <div className="strength-bar-container">
                      <div 
                        className="strength-bar" 
                        style={{ width: `${(passwordStrength.score / 5) * 100}%`, backgroundColor: passwordStrength.color }}
                      ></div>
                    </div>
                    <span className="strength-label" style={{ color: passwordStrength.color }}>
                      {passwordStrength.label}
                    </span>
                  </div>
                )}
              </div>
              <div className="form-group w-50">
                <label className="form-label">Confirm Password*</label>
                <div className="input-with-icon">
                  <ShieldAlert className="input-icon" size={18} />
                  <input 
                    type="password" 
                    name="confirmPassword"
                    className="form-input has-icon" 
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            {error && <div className="error-msg">{error}</div>}

            <div className="checkbox-group mb-4">
              <input 
                type="checkbox" 
                id="terms" 
                name="termsAgreed"
                checked={formData.termsAgreed}
                onChange={handleInputChange} 
              />
              <label htmlFor="terms">I agree to the <a href="#" className="link">Terms of Service</a> & <a href="#" className="link">Privacy Policy</a></label>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Create Account <ArrowRight size={18} />
            </button>
          </form>
          
          <p className="auth-switch text-center mt-4">
            Already have an account? <Link to="/login" className="link">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
