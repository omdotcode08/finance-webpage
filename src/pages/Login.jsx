import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail, Smartphone, ArrowRight, ShieldCheck } from 'lucide-react';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1); // 1: Login, 2: 2FA, 3: Success
  const [formData, setFormData] = useState({ email: '', password: '', mpin: '', otp: '' });
  const [loginMethod, setLoginMethod] = useState('password'); // 'password' or 'mpin'
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!formData.email && loginMethod === 'password') {
      setError('Email is required');
      return;
    }
    setError('');
    setStep(2);
    // Start countdown timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handle2FASubmit = (e) => {
    e.preventDefault();
    if (formData.otp === '482916') {
      setError('');
      setStep(3);
    } else {
      setError('Incorrect OTP. 2 attempts remaining.');
      // Shake effect can be added via a class conditionally
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container card">
        {step === 1 && (
          <div className="auth-box">
            <h2 className="section-title text-center">Welcome Back</h2>
            <p className="section-subtitle text-center">Secure login to your FinNest account.</p>
            
            <div className="login-tabs">
              <button 
                className={`tab-btn ${loginMethod === 'password' ? 'active' : ''}`}
                type="button"
                onClick={() => setLoginMethod('password')}
              >
                Password
              </button>
              <button 
                className={`tab-btn ${loginMethod === 'mpin' ? 'active' : ''}`}
                type="button"
                onClick={() => setLoginMethod('mpin')}
              >
                MPIN
              </button>
            </div>

            <form onSubmit={handleLoginSubmit} className="auth-form">
              {loginMethod === 'password' ? (
                <>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
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
                  <div className="form-group">
                    <label className="form-label">Password</label>
                    <div className="input-with-icon">
                      <Lock className="input-icon" size={18} />
                      <input 
                        type={showPassword ? 'text' : 'password'} 
                        name="password"
                        className="form-input has-icon" 
                        placeholder="Enter 8+ characters"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                      <button 
                        type="button" 
                        className="toggle-password" 
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="form-group">
                  <label className="form-label">6-Digit MPIN</label>
                  <div className="input-with-icon">
                    <Smartphone className="input-icon" size={18} />
                    <input 
                      type="password" 
                      name="mpin"
                      className="form-input has-icon text-center tracking-widest" 
                      placeholder="• • • • • •"
                      maxLength={6}
                      value={formData.mpin}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}
              
              {error && <div className="error-msg">{error}</div>}
              
              <div className="auth-actions">
                <a href="#" className="forgot-link">Forgot {loginMethod === 'password' ? 'Password' : 'MPIN'}?</a>
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-3">
                Continue <ArrowRight size={18} />
              </button>
            </form>
            
            <div className="divider"><span>OR</span></div>
            
            <button type="button" className="btn btn-outline w-100 google-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Login with Google
            </button>
            
            <p className="auth-switch">Don't have an account? <Link to="/signup">Sign up</Link></p>
          </div>
        )}

        {step === 2 && (
          <div className={`auth-box ${error ? 'shake' : ''}`}>
            <h2 className="section-title text-center">Two-Factor Auth</h2>
            <p className="section-subtitle text-center">OTP sent to your registered mobile ******89</p>
            <p className="text-center text-sm mb-4">Hint: Use 482916</p>
            
            <form onSubmit={handle2FASubmit} className="auth-form">
              <div className="form-group text-center">
                <input 
                  type="text" 
                  name="otp"
                  className="form-input otp-input" 
                  placeholder="0 0 0 0 0 0"
                  maxLength={6}
                  value={formData.otp}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              {error && <div className="error-msg text-center mb-3">{error}</div>}
              
              <div className="timer text-center mb-4">
                {timeLeft > 0 ? (
                  <span className="text-muted">Resend OTP in 00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</span>
                ) : (
                  <button type="button" className="resend-btn" onClick={() => setTimeLeft(30)}>Resend OTP</button>
                )}
              </div>
              
              <button type="submit" className="btn btn-primary w-100">
                Verify Securely
              </button>
              <button 
                type="button" 
                className="btn btn-outline w-100 mt-3"
                onClick={() => setStep(1)}
              >
                Back to Login
              </button>
            </form>
          </div>
        )}

        {step === 3 && (
          <div className="auth-box success-box text-center">
            <div className="success-icon mb-4">
              <ShieldCheck size={64} className="text-green mx-auto" />
            </div>
            <h2 className="section-title">Verified Successfully</h2>
            <p className="section-subtitle">Welcome back, Rohan!</p>
            
            <div className="glass-panel text-left p-4 mb-4">
              <div className="mb-2"><strong>Last Login:</strong> Today, 10:45 AM</div>
              <div className="mb-2"><strong>Device:</strong> Mac OS, Chrome</div>
              <div><strong>IP Address:</strong> 192.168.1.1</div>
            </div>
            
            <button type="button" className="btn btn-primary w-100" onClick={() => navigate('/')}>
              Go to Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
