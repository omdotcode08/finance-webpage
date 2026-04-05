import React from 'react';
import { Search, Camera, Video, Users, Mail, Handshake, Verified } from 'lucide-react';
import './MarketingStrategy.css';

const MarketingStrategy = () => {
  return (
    <div className="marketing-page container section-padding">
      <div className="text-center mb-5">
        <div className="badge">Growth Plan</div>
        <h1 className="section-title">Marketing & Acquisition Strategy</h1>
        <p className="section-subtitle mx-auto">
          Our multi-channel approach to acquire high-intent users, build brand trust, and drive unprecedented growth.
        </p>
      </div>

      <div className="marketing-content">
        <div className="strategy-cards">
          <div className="strat-card card">
            <div className="strat-header">
              <div className="strat-icon"><Search size={24} /></div>
              <div className="impact-badge">+40% Organic Traffic</div>
            </div>
            <h3>SEO & Content Marketing</h3>
            <p>Publishing deep-dive financial blogs, investment guides, and tax-saving tips. Optimizing for high-intent keywords like "best mutual fund app".</p>
          </div>

          <div className="strat-card card">
            <div className="strat-header">
              <div className="strat-icon text-pink"><Camera size={24} /></div>
              <div className="impact-badge">+25% Gen-Z Users</div>
            </div>
            <h3>Social Media Campaigns</h3>
            <p>Bite-sized Instagram reels explaining complex financial concepts simply. LinkedIn thought leadership for targeting HNIs and professionals.</p>
          </div>

          <div className="strat-card card">
            <div className="strat-header">
              <div className="strat-icon text-red"><Video size={24} /></div>
              <div className="impact-badge">3x ROI on Spend</div>
            </div>
            <h3>Google & YouTube Ads</h3>
            <p>Targeted pre-roll ads on finance education videos. Search ads for direct competitor alternative keywords.</p>
          </div>

          <div className="strat-card card">
            <div className="strat-header">
              <div className="strat-icon text-amber"><Users size={24} /></div>
              <div className="impact-badge">30% Viral Coefficient</div>
            </div>
            <h3>Referral & Loyalty</h3>
            <p>"Refer a friend, both earn ₹500 in wallet cash". Tiered rewards for inviting multiple active trading friends.</p>
          </div>

          <div className="strat-card card">
            <div className="strat-header">
              <div className="strat-icon text-green"><Mail size={24} /></div>
              <div className="impact-badge">+15% Activation</div>
            </div>
            <h3>Email & WhatsApp Nudges</h3>
            <p>Automated WhatsApp alerts for SIP dues, tax season reminders, and personalized weekly portfolio summaries.</p>
          </div>

          <div className="strat-card card">
            <div className="strat-header">
              <div className="strat-icon text-purple"><Handshake size={24} /></div>
              <div className="impact-badge">+50k Users / Quarter</div>
            </div>
            <h3>B2B Partnerships</h3>
            <p>Integrations with HR payroll platforms for direct salary-account linked SIPs, co-branded FD schemes with NBFCs.</p>
          </div>
        </div>

        <div className="funnel-section card">
          <h3 className="text-center mb-4">The FinNest Growth Funnel</h3>
          <div className="funnel-container">
            <div className="funnel-level level-1">
              <span className="level-name">Awareness</span>
              <span className="level-detail">Ads, SEO, Social Media (1M+ Reach)</span>
            </div>
            <div className="funnel-level level-2">
              <span className="level-name">Consideration</span>
              <span className="level-detail">Website visits, Blog reads (250k+ Traffic)</span>
            </div>
            <div className="funnel-level level-3">
              <span className="level-name">Onboarding</span>
              <span className="level-detail">Signups, KYC initiation (50k+ Leads)</span>
            </div>
            <div className="funnel-level level-4">
              <span className="level-name">Activation</span>
              <span className="level-detail">First Trade, First SIP (35k+ Active)</span>
            </div>
            <div className="funnel-level level-5">
              <span className="level-name">Retention</span>
              <span className="level-detail">Loyalty, Up-sells, Referrals (20k+ Promoters)</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mock WhatsApp Mockup */}
      <div className="whatsapp-mockup glass-panel mt-5 mx-auto">
        <div className="wa-header">
          <div className="wa-avatar"><Verified size={18} className="text-green" /></div>
          <div>
            <h4>FinNest Support ✅</h4>
            <span>Official Business Account</span>
          </div>
        </div>
        <div className="wa-body">
          <div className="wa-message">
            Hi Rohan, 👋<br/><br/>
            Just a quick reminder that your ELSS tax-saving deadline is approaching in 15 days.<br/><br/>
            Invest ₹50,000 today to save up to ₹15,600 in taxes under section 80C. 🎯<br/>
            <span className="wa-time">10:45 AM</span>
          </div>
          <button className="btn btn-primary btn-sm mt-3 w-100">Click here to Invest Now</button>
        </div>
      </div>
    </div>
  );
};

export default MarketingStrategy;
