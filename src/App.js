import React, { useState } from 'react';
import Header from './components/Header';
import TechDesktop from './components/TechDesktop';
import CreativeLayout from './components/CreativeLayout';

function App() {
  const [mode, setMode] = useState('Techie'); // default mode is Techie

  return (
    // Wrap in a dark background
    <div className="min-h-screen bg-gray-900">
      {/* Always show header with toggle */}
      <Header mode={mode} setMode={setMode} />
      {/* Switch between Tech and Creative layouts */}
      {mode === 'Techie' ? <TechDesktop /> : <CreativeLayout />}
    </div>
  );
}

export default App;
