import React, { useState } from 'react';
import '../styles/ChatService.css'; // Add styles for the chat service
import chatIcon from '../assets/live-chat.png'; // Add chat icon image

const ChatService = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="chat-service">
      {/* Chat Icon */}
      {!isChatOpen && (
        <div className="chat-icon" onClick={toggleChat}>
           <img src={chatIcon} alt="Chat Icon" className="chat-icon-img" />
        </div>
      )}

      {/* Chat Box */}
      {isChatOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <span>Messenger</span>
            <button className="close-chat" onClick={toggleChat}>
              ✖
            </button>
          </div>
          <div className="chat-body">
            {/* Add dynamic chat messages */}
            <div className="chat-message received">
              Hello! How can I assist you today?
            </div>
            <div className="chat-message sent">Hi, I need help with my profile!</div>
          </div>
          <div className="chat-footer">
            <input
              type="text"
              className="chat-input"
              placeholder="Type a message..."
            />
            <button className="send-button">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatService;
