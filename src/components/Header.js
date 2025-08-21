import React from 'react';
import { socialLinks } from '../data/config';

function Header({ mode, setMode }) {
  // Toggle between 'Tech' and 'Creative' modes
  const toggleMode = () => setMode(mode === 'Tech' ? 'Creative' : 'Tech');

  return (
    <header className="bg-gray-800 text-white flex items-center justify-between px-4 py-2">
      {/* Left side: Tech/Creative toggle */}
      <div className="flex items-center space-x-4">
        <span className="text-sm">Tech</span>
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            checked={mode === 'Creative'}
            onChange={toggleMode}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-700 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></div>
        </label>
        <span className="text-sm">Creative</span>
      </div>

      {/* Right side: Dropdown menu */}
      <div className="relative">
        <details className="dropdown text-sm">
          <summary className="cursor-pointer flex items-center space-x-1">
            <span className="material-icons">menu</span>
            <span>Menu</span>
          </summary>
          <ul className="absolute right-0 mt-2 w-40 bg-gray-700 rounded-md shadow-lg text-white">
            {socialLinks.map(soc => (
              <li key={soc.name}>
                <a
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 hover:bg-gray-600"
                >
                  {soc.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                className="block px-3 py-2 hover:bg-gray-600"
              >
                Download Resume
              </a>
            </li>
            <li>
              <button className="w-full text-left px-3 py-2 hover:bg-gray-600">
                Talk to my AI Avatar
              </button>
            </li>
          </ul>
        </details>
      </div>
    </header>
  );
}

export default Header;
