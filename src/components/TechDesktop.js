import React, { useState } from 'react';
import Dock from './Dock';
import Window from './Window';
import StartMenu from './StartMenu';
import { projects } from '../data/config';

function TechDesktop() {
  // Manage open windows and start menu state
  const [openWindows, setOpenWindows] = useState({});
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  // Toggle a window (open/close) by name
  const toggleWindow = (name) => {
    setOpenWindows(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div
      className="relative h-full min-h-screen"
      style={{
        backgroundImage: "url('/back.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Bottom dock */}
      <Dock onClick={toggleWindow} />

      {/* Start button */}
      <button
        onClick={() => setStartMenuOpen(prev => !prev)}
        className="fixed bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded"
      >
        Start
      </button>

      {/* Start menu panel */}
      <StartMenu isOpen={startMenuOpen} />

      {/* Open windows */}
      {projects.map(proj =>
        openWindows[proj.name] && (
          <Window key={proj.name} title={proj.name}>
            {/* Placeholder content for each window */}
            <p className="text-gray-300">This is the {proj.name} window content.</p>
          </Window>
        )
      )}
    </div>
  );
}

export default TechDesktop;
