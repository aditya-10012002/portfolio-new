import React, { useState } from 'react';
import { creativePlatforms } from '../data/config';

function CreativeLayout() {
  // Default active tab is the first platform
  const [activeTab, setActiveTab] = useState(creativePlatforms[0].name);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      {/* Profile section */}
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="rounded-full mb-2"
        />
        <h2 className="text-xl font-bold">Your Name</h2>
        <p className="text-gray-400 text-center max-w-xs">
          A short bio about creative projects and interests.
        </p>
        {/* Social links */}
        <div className="flex space-x-4 mt-2">
          {creativePlatforms.map(platform => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400"
            >
              {platform.name}
            </a>
          ))}
        </div>
      </div>

      {/* Tab navigation */}
      <div className="flex justify-center mt-6 border-b border-gray-700">
        {creativePlatforms.map(platform => (
          <button
            key={platform.name}
            onClick={() => setActiveTab(platform.name)}
            className={`py-2 px-4 ${
              activeTab === platform.name
                ? 'border-b-2 border-blue-500 text-white'
                : 'text-gray-400'
            }`}
          >
            {platform.name}
          </button>
        ))}
      </div>

      {/* Tab content grid */}
      <div className="grid grid-cols-3 gap-2 mt-4">
        {/* Placeholder thumbnails */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-700 h-24 rounded animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default CreativeLayout;
