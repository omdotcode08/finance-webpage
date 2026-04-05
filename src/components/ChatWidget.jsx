import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import './ChatWidget.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chat-widget">
      {isOpen ? (
        <div className="chat-window">
          <div className="chat-header">
            <div>
              <h4>Talk to an Advisor</h4>
              <p>Typically replies in 5 mins</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="close-btn">
              <X size={20} />
            </button>
          </div>
          <div className="chat-body">
            <div className="message bot-message">
              Hello! I'm your dedicated wealth advisor. How can I help you today with your investment goals?
            </div>
          </div>
          <div className="chat-footer">
            <input type="text" placeholder="Type your message..." />
            <button className="send-btn"><Send size={18} /></button>
          </div>
        </div>
      ) : (
        <button className="chat-toggle" onClick={() => setIsOpen(true)}>
          <MessageSquare size={24} />
          <span>Talk to Advisor</span>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
