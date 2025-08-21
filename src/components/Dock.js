import React from 'react';

function Dock({ onClick }) {
  const items = [
    { name: 'Profile', icon: '👤' },
    { name: 'Projects', icon: '📁' },
    { name: 'Experience', icon: '💼' },
    // Add more dock items as needed
  ];

  return (
    // Fixed bottom-center dock with transparency
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-6 
                    bg-gray-900 bg-opacity-70 p-2 rounded-lg">
      {items.map(item => (
        <button
          key={item.name}
          onClick={() => onClick(item.name)}
          className="flex flex-col items-center text-white"
        >
          <span className="text-xl">{item.icon}</span>
          <span className="text-xs">{item.name}</span>
        </button>
      ))}
    </div>
  );
}

export default Dock;
