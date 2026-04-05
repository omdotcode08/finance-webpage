import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import './MarketTicker.css';

const MOCK_DATA = [
  { symbol: 'NIFTY 50', price: '22,456.90', change: '+120.50', isUp: true },
  { symbol: 'SENSEX', price: '73,890.15', change: '-45.20', isUp: false },
  { symbol: 'RELIANCE', price: '2,980.45', change: '+12.30', isUp: true },
  { symbol: 'HDFCBANK', price: '1,540.20', change: '+8.75', isUp: true },
  { symbol: 'INFY', price: '1,420.90', change: '-15.40', isUp: false },
  { symbol: 'TCS', price: '3,850.10', change: '+22.15', isUp: true },
];

const MarketTicker = () => {
  return (
    <div className="ticker-wrapper">
      <div className="ticker-container">
        {MOCK_DATA.map((item, index) => (
          <div key={index} className="ticker-item">
            <span className="ticker-symbol">{item.symbol}</span>
            <span className="ticker-price">₹{item.price}</span>
            <span className={`ticker-change ${item.isUp ? 'up' : 'down'}`}>
              {item.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              {item.change}
            </span>
          </div>
        ))}
        {/* Duplicate for seamless marquee effect */}
        {MOCK_DATA.map((item, index) => (
          <div key={`dup-${index}`} className="ticker-item">
            <span className="ticker-symbol">{item.symbol}</span>
            <span className="ticker-price">₹{item.price}</span>
            <span className={`ticker-change ${item.isUp ? 'up' : 'down'}`}>
              {item.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketTicker;
