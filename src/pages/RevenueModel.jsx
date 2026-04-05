import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Building2, Landmark, RefreshCw, Layers, Zap, HandCoins } from 'lucide-react';
import './RevenueModel.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const RevenueModel = () => {
  const chartData = {
    labels: [
      'Subscriptions (35%)',
      'Brokerage/Transaction (25%)',
      'Interest Spread (15%)',
      'Insurance Commissions (15%)',
      'Wealth Advisory AUM Fee (5%)',
      'Data & API Partnerships (5%)',
    ],
    datasets: [
      {
        data: [35, 25, 15, 15, 5, 5],
        backgroundColor: [
          '#00C853', // Primary Green
          '#009688', // Teal
          '#03A9F4', // Light Blue
          '#FFC107', // Amber
          '#FF5252', // Red
          '#9C27B0', // Purple
        ],
        borderColor: '#0A192F',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#E6F1FF',
          font: { family: 'Inter', size: 13 }
        }
      }
    },
    maintainAspectRatio: false
  };

  return (
    <div className="revenue-page container section-padding">
      <div className="text-center mb-5">
        <div className="badge">Business Model</div>
        <h1 className="section-title">How FinNest Makes Money</h1>
        <p className="section-subtitle mx-auto">
          We believe in complete transparency. Our revenue is aligned with helping you grow your wealth, ensuring a sustainable ecosystem for everyone.
        </p>
      </div>

      {/* REVENUE STREAMS CARDS */}
      <div className="revenue-grid mb-5">
        <div className="revenue-card card">
          <RefreshCw className="revenue-icon" size={32} />
          <h3>Transaction & Brokerage</h3>
          <p>Flat ₹20 or 0.05% on Intraday & F&O trades. Zero brokerages on equity delivery.</p>
        </div>
        <div className="revenue-card card">
          <Layers className="revenue-icon text-purple" size={32} />
          <h3>Subscription Plans</h3>
          <p>Premium tiers offering advanced analytics, priority RM support, and API access.</p>
          <div className="sub-tiers mt-3">
            <span className="tier">Pro: ₹499/mo</span>
            <span className="tier highlight">Wealth: ₹1999/mo</span>
          </div>
        </div>
        <div className="revenue-card card">
          <Landmark className="revenue-icon text-blue" size={32} />
          <h3>Interest Spread</h3>
          <p>Margin earned between lending rates on margin funding/loans and bank deposits.</p>
        </div>
        <div className="revenue-card card">
          <Building2 className="revenue-icon text-amber" size={32} />
          <h3>Commission Fees</h3>
          <p>Referral fees earned from partners for selling health/life insurance and FDs.</p>
        </div>
        <div className="revenue-card card">
          <HandCoins className="revenue-icon text-green" size={32} />
          <h3>Advisory AUM Fee</h3>
          <p>A transparent 0.5% p.a. fee charged on total portfolio managed directly by our RMs.</p>
        </div>
        <div className="revenue-card card">
          <Zap className="revenue-icon text-red" size={32} />
          <h3>Data & API</h3>
          <p>Selling real-time market data APIs and anonymized consumer spending insights to BFSI partners.</p>
        </div>
      </div>

      {/* SPLIT SECTION */}
      <div className="split-section glass-panel mt-5">
        <div className="split-content">
          <h2>Revenue Flow Diagram</h2>
          <p className="text-muted mb-4">A visual representation of the money flow within the FinNest ecosystem.</p>
          
          <div className="flow-diagram">
            <div className="flow-node user-node">User</div>
            <div className="flow-arrows horizontal">
              <div className="arrow-line"><span>Investments/Fees</span></div>
            </div>
            <div className="flow-node core-node">FinNest Platform</div>
            <div className="flow-arrows split">
              <div className="arrow-branch top"><span>Trades</span></div>
              <div className="arrow-branch right"><span>Premiums</span></div>
              <div className="arrow-branch bottom"><span>Data</span></div>
            </div>
            <div className="flow-partners">
              <div className="flow-node partner-node">Exchanges (NSE/BSE)</div>
              <div className="flow-node partner-node">Insurance / AMC</div>
              <div className="flow-node partner-node">B2B Consumers</div>
            </div>
          </div>
        </div>

        <div className="split-chart">
          <h3>Projected Revenue Split</h3>
          <div className="chart-container">
            <Pie data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueModel;
