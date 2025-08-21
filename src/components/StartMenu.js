import React from 'react';
import { projects, socialLinks } from '../data/config';

function StartMenu({ isOpen }) {
  if (!isOpen) return null;
  return (
    // Translucent panel above the start button
    <div className="absolute bottom-16 left-4 bg-gray-700 bg-opacity-80 backdrop-blur-md 
                    p-4 rounded-lg w-48 text-white">
      <div className="space-y-2">
        <h4 className="font-semibold">Projects</h4>
        {projects.map(proj => (
          <a key={proj.name} href="#" className="block hover:underline">
            {proj.name}
          </a>
        ))}
        <hr className="border-gray-600" />
        <h4 className="font-semibold">Socials</h4>
        {socialLinks.map(soc => (
          <a
            key={soc.name}
            href={soc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:underline"
          >
            {soc.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default StartMenu;
