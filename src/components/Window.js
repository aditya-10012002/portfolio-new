import React from 'react';

function Window({ title, children }) {
  return (
    <div className="fixed top-20 left-1/4 bg-gray-800 text-white shadow-lg rounded-lg w-2/4">
      {/* Title bar with Mac-like control buttons */}
      <div className="flex items-center space-x-2 bg-gray-900 p-2 rounded-t-lg">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        <h3 className="ml-2 font-semibold">{title}</h3>
      </div>
      {/* Window content */}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}

export default Window;
