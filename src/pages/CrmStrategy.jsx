import React, { useState } from 'react';
import { Users, LayoutDashboard, Target, MessageSquare, Settings, Plus, Search, Filter, MoreVertical, X } from 'lucide-react';
import './CrmStrategy.css';

const MOCK_CUSTOMERS = [
  { id: 1, name: 'Rohan Sharma', contact: '+91 9876543210', segment: 'HNI Client', products: 'Mutual Funds, Eq, FD', kyc: 'Verified', aum: '₹1.2Cr', rm: 'Priya D.' },
  { id: 2, name: 'Anjali Desai', contact: 'anjali@email.com', segment: 'New Investor', products: 'SIP (Eq)', kyc: 'Pending', aum: '₹50,000', rm: 'Rahul N.' },
  { id: 3, name: 'Vikram Singh', contact: '+91 9988776655', segment: 'Active Trader', products: 'F&O, Eq Delivery', kyc: 'Verified', aum: '₹15L', rm: 'Priya D.' },
  { id: 4, name: 'Neha Gupta', contact: 'neha.g@email.com', segment: 'Loan Seeker', products: 'Term Insurance', kyc: 'Rejected', aum: '₹0', rm: 'Rahul N.' },
];

const CrmStrategy = () => {
  const [activeTab, setActiveTab] = useState('table'); // 'table' or 'kanban'
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="crm-page section-padding">
      <div className="container mb-5">
        <div className="text-center mb-5">
          <div className="badge">Partner/Internal Tool</div>
          <h1 className="section-title">FinNest CRM Engine</h1>
          <p className="section-subtitle mx-auto">
            Our proprietary CRM strategy ensures personalized lead nurturing, automated compliance tracking, and highly effective relationship management.
          </p>
        </div>

        <div className="crm-strategy-info card">
          <div className="strat-row">
            <div className="strat-col">
              <h3>Lifecycle Pipeline</h3>
              <p>Lead Capture → KYC Onboarding → Product Activation → Upsell / Cross-sell → Retention.</p>
              <p>We automate the journey based on precise user interaction milestones.</p>
            </div>
            <div className="strat-col border-left">
              <h3>Automated Triggers</h3>
              <ul className="styled-list">
                <li>Welcome email sequence on sign-up</li>
                <li>Nudge SMS if first SIP is not started in 7 days</li>
                <li>Tax season alerts for ELSS and 80C products</li>
              </ul>
            </div>
            <div className="strat-col border-left">
              <h3>Customer Segmentation</h3>
              <p>RMs use AI-generated segments like <em>New Investors, Active Traders, Dormant Users,</em> and <em>HNI Clients</em> to personalize their communication.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="crm-dashboard-wrapper">
        <div className="crm-header-bar">
          <div className="crm-logo">CRM <span>Dashboard</span></div>
          <div className="crm-stats-bar">
            <div className="stat-item"><span>Total Users</span><strong>2,45,091</strong></div>
            <div className="stat-item"><span>AUM This Mth</span><strong className="text-green">+₹45Cr</strong></div>
            <div className="stat-item"><span>Active SIPs</span><strong>1,20,500</strong></div>
            <div className="stat-item"><span>Open Tickets</span><strong className="text-red">142</strong></div>
          </div>
        </div>

        <div className="crm-body">
          <div className="crm-sidebar">
            <div className="nav-item active"><LayoutDashboard size={18} /> Dashboard</div>
            <div className="nav-item"><Users size={18} /> Customers & Leads</div>
            <div className="nav-item"><Target size={18} /> Active Campaigns</div>
            <div className="nav-item"><MessageSquare size={18} /> Support Tickets</div>
            <div className="nav-item"><Settings size={18} /> RM Settings</div>
          </div>

          <div className="crm-main-content">
            <div className="content-header">
              <div className="tabs">
                <button className={`tab ${activeTab === 'table' ? 'active' : ''}`} onClick={() => setActiveTab('table')}>List View</button>
                <button className={`tab ${activeTab === 'kanban' ? 'active' : ''}`} onClick={() => setActiveTab('kanban')}>Pipeline Board</button>
              </div>
              <div className="actions">
                <div className="search-bar">
                  <Search size={16} className="text-muted"/>
                  <input type="text" placeholder="Search clients..." />
                </div>
                <button className="btn btn-outline btn-sm"><Filter size={16}/> Filter</button>
                <button className="btn btn-primary btn-sm" onClick={() => setShowModal(true)}><Plus size={16}/> Add Lead</button>
              </div>
            </div>

            {activeTab === 'table' && (
              <div className="table-container">
                <table className="crm-table">
                  <thead>
                    <tr>
                      <th>Customer Name</th>
                      <th>Contact</th>
                      <th>Segment</th>
                      <th>Holdings</th>
                      <th>KYC Status</th>
                      <th>Portfolio Val.</th>
                      <th>RM Assigned</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_CUSTOMERS.map(c => (
                      <tr key={c.id}>
                        <td><strong>{c.name}</strong></td>
                        <td className="text-muted">{c.contact}</td>
                        <td><span className="segment-badge">{c.segment}</span></td>
                        <td className="text-muted text-sm">{c.products}</td>
                        <td>
                          <span className={`status-badge ${c.kyc.toLowerCase()}`}>{c.kyc}</span>
                        </td>
                        <td><strong>{c.aum}</strong></td>
                        <td>{c.rm}</td>
                        <td><MoreVertical size={16} className="cursor-pointer text-muted"/></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'kanban' && (
              <div className="kanban-board">
                <div className="kanban-col">
                  <h4>New Lead (14)</h4>
                  <div className="kanban-card">
                    <strong>Sumit Verma</strong>
                    <div className="text-sm text-muted">Source: Google Ads</div>
                    <div className="segment-badge mt-2">Interested in FD</div>
                  </div>
                </div>
                <div className="kanban-col">
                  <h4>KYC Initiated (5)</h4>
                  <div className="kanban-card">
                    <strong>Anjali Desai</strong>
                    <div className="text-sm text-muted">Aadhaar verified. Pending PAN.</div>
                    <div className="status-badge pending mt-2">Pending</div>
                  </div>
                </div>
                <div className="kanban-col">
                  <h4>First Invest Done (42)</h4>
                  <div className="kanban-card">
                    <strong>Ravi Kumar</strong>
                    <div className="text-sm text-muted">Started ₹5k SIP.</div>
                    <div className="status-badge verified mt-2">Verified</div>
                  </div>
                </div>
                <div className="kanban-col highlight">
                  <h4>HNI Upgraded (2)</h4>
                  <div className="kanban-card">
                    <strong>Rohan Sharma</strong>
                    <div className="text-sm text-muted">AUM crossed 1Cr.</div>
                    <div className="segment-badge mt-2">HNI Priority</div>
                  </div>
                </div>
              </div>
            )}

            <div className="campaigns-panel mt-4">
              <h4>Active Campaigns</h4>
              <div className="camp-grid">
                <div className="camp-card">
                  <div className="camp-header">
                    <strong>Tax Saving Push</strong>
                    <span className="live-badge">Live</span>
                  </div>
                  <div className="progress-bg"><div className="progress-fill" style={{width: '65%'}}></div></div>
                  <div className="camp-stats"><span>Reach: 45k</span> <span>Conv: 4.2%</span></div>
                </div>
                <div className="camp-card">
                  <div className="camp-header">
                    <strong>SIP Starter (GenZ)</strong>
                    <span className="live-badge">Live</span>
                  </div>
                  <div className="progress-bg"><div className="progress-fill" style={{width: '30%'}}></div></div>
                  <div className="camp-stats"><span>Reach: 12k</span> <span>Conv: 2.1%</span></div>
                </div>
                <div className="camp-card opacity-50">
                  <div className="camp-header">
                    <strong>HNI Portfolio Review</strong>
                    <span className="live-badge draft">Draft</span>
                  </div>
                  <div className="progress-bg"><div className="progress-fill" style={{width: '0%'}}></div></div>
                  <div className="camp-stats"><span>Target: 2k</span> <span>Pending RM</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Add New Lead</h3>
              <button className="close-btn" onClick={() => setShowModal(false)}><X size={20}/></button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" placeholder="Enter name" />
              </div>
              <div className="form-row">
                <div className="form-group w-50">
                  <label className="form-label">Phone</label>
                  <input type="text" className="form-input" placeholder="+91" />
                </div>
                <div className="form-group w-50">
                  <label className="form-label">Segment</label>
                  <select className="form-input">
                    <option>Retail Investor</option>
                    <option>HNI Client</option>
                    <option>Corporate</option>
                  </select>
                </div>
              </div>
              <button className="btn btn-primary w-100 mt-3" onClick={() => setShowModal(false)}>Save Lead</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CrmStrategy;
