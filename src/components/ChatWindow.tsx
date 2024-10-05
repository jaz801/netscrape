import React, { useState } from 'react';
import { Paperclip, Settings, Send } from 'lucide-react';

interface ChatWindowProps {
  messages: string[];
  onSendMessage: (message: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-full neon-border rounded-lg p-4">
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            {message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center">
        <button type="button" className="neon-button p-2 rounded-full mr-2">
          <Paperclip size={20} />
        </button>
        <button type="button" className="neon-button p-2 rounded-full mr-2">
          <Settings size={20} />
        </button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="neon-input flex-grow p-2 rounded-lg mr-2"
          placeholder="Type your message..."
        />
        <button type="submit" className="neon-button p-2 rounded-full">
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;