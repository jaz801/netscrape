import React, { useState } from 'react';
import WebScrapingSteps from './WebScrapingSteps';
import DataDisplay from './DataDisplay';
import ScreenshotRecording from './ScreenshotRecording';

const TabInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState('scraping');

  return (
    <div className="neon-border rounded-lg p-4">
      <div className="flex mb-4">
        <button
          className={`tab ${activeTab === 'scraping' ? 'tab-active' : 'tab-inactive'}`}
          onClick={() => setActiveTab('scraping')}
        >
          Web Scraping Steps
        </button>
        <button
          className={`tab ${activeTab === 'data' ? 'tab-active' : 'tab-inactive'}`}
          onClick={() => setActiveTab('data')}
        >
          Data Display
        </button>
        <button
          className={`tab ${activeTab === 'screenshot' ? 'tab-active' : 'tab-inactive'}`}
          onClick={() => setActiveTab('screenshot')}
        >
          Screenshot/Recording
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'scraping' && <WebScrapingSteps />}
        {activeTab === 'data' && <DataDisplay />}
        {activeTab === 'screenshot' && <ScreenshotRecording />}
      </div>
    </div>
  );
};

export default TabInterface;