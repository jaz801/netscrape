import React, { useState } from 'react';
import { Play, Paperclip, Settings, Send, Folder, History, GitCompare, Download } from 'lucide-react';
import InitialScreen from './components/InitialScreen';
import ChatWindow from './components/ChatWindow';
import TabInterface from './components/TabInterface';

const App: React.FC = () => {
  const [inputSubmitted, setInputSubmitted] = useState(false);
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  const handleInputSubmit = (input: string) => {
    setInputSubmitted(true);
    setChatMessages([...chatMessages, `User: ${input}`]);
  };

  const handleChatMessage = (message: string) => {
    setChatMessages([...chatMessages, `User: ${message}`]);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      {!inputSubmitted ? (
        <InitialScreen onSubmit={handleInputSubmit} />
      ) : (
        <div className="flex h-screen">
          <div className="w-1/3 pr-4">
            <ChatWindow messages={chatMessages} onSendMessage={handleChatMessage} />
          </div>
          <div className="w-2/3">
            <div className="flex justify-end mb-4 space-x-2">
              <button className="neon-button p-2 rounded-full">
                <Folder size={20} />
              </button>
              <button className="neon-button p-2 rounded-full">
                <History size={20} />
              </button>
              <button className="neon-button p-2 rounded-full">
                <GitCompare size={20} />
              </button>
            </div>
            <TabInterface />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;