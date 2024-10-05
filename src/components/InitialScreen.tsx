import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface InitialScreenProps {
  onSubmit: (input: string) => void;
}

const InitialScreen: React.FC<InitialScreenProps> = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What do you want to web scrape/automate?"
            className="neon-input w-full p-4 pr-12 rounded-lg text-lg"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 neon-button p-2 rounded-full"
          >
            <Play size={24} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InitialScreen;