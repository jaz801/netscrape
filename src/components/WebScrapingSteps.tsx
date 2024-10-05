import React, { useState } from 'react';
import { Lightbulb, Repeat } from 'lucide-react';

interface Step {
  id: number;
  description: string;
  status: 'success' | 'failed';
}

const WebScrapingSteps: React.FC = () => {
  const [steps, setSteps] = useState<Step[]>([
    { id: 1, description: 'Navigate to website', status: 'success' },
    { id: 2, description: 'Login with credentials', status: 'success' },
    { id: 3, description: 'Search for target data', status: 'failed' },
    { id: 4, description: 'Extract data', status: 'failed' },
  ]);

  const [loopedSteps, setLoopedSteps] = useState<number[]>([]);
  const [loopParams, setLoopParams] = useState('');

  const handleStepClick = (id: number) => {
    // Implement step modification logic here
    console.log(`Modify step ${id}`);
  };

  const handleDragStart = (e: React.DragEvent, id: number) => {
    e.dataTransfer.setData('text/plain', id.toString());
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetId: number) => {
    e.preventDefault();
    const draggedId = parseInt(e.dataTransfer.getData('text/plain'), 10);
    const newSteps = [...steps];
    const draggedStep = newSteps.find(step => step.id === draggedId);
    const targetIndex = newSteps.findIndex(step => step.id === targetId);
    
    if (draggedStep) {
      newSteps.splice(newSteps.indexOf(draggedStep), 1);
      newSteps.splice(targetIndex, 0, draggedStep);
      setSteps(newSteps);
    }
  };

  const handleLoop = () => {
    // Implement loop creation logic here
    setLoopedSteps([2, 3]); // Example: loop steps 2 and 3
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl neon-text">Web Scraping Steps</h2>
        <button onClick={handleLoop} className="neon-button p-2 rounded-full">
          <Repeat size={20} />
        </button>
      </div>
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`flex items-center p-2 mb-2 neon-border rounded ${
            loopedSteps.includes(step.id) ? 'border-[#00FF00]' : ''
          }`}
          onClick={() => handleStepClick(step.id)}
          draggable
          onDragStart={(e) => handleDragStart(e, step.id)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, step.id)}
        >
          <Lightbulb
            size={20}
            className={step.status === 'success' ? 'text-green-500' : 'text-red-500'}
          />
          <span className="ml-2">{step.description}</span>
          {loopedSteps.includes(step.id) && (
            <Repeat size={20} className="ml-auto text-[#00FF00]" />
          )}
        </div>
      ))}
      {loopedSteps.length > 0 && (
        <input
          type="text"
          value={loopParams}
          onChange={(e) => setLoopParams(e.target.value)}
          placeholder="Loop Parameters"
          className="neon-input w-full p-2 mt-2 rounded"
        />
      )}
    </div>
  );
};

export default WebScrapingSteps;