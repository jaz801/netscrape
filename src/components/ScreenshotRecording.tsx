import React from 'react';
import { Play, Pause } from 'lucide-react';

const ScreenshotRecording: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl neon-text mb-4">Screenshot/Recording</h2>
      <div className="relative">
        <img
          src="https://source.unsplash.com/random/800x600?website"
          alt="Website Screenshot"
          className="w-full h-auto rounded-lg neon-border"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button className="neon-button p-2 rounded-full">
            <Play size={20} />
          </button>
          <button className="neon-button p-2 rounded-full">
            <Pause size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotRecording;