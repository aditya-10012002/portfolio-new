import React, {useState, useEffect, useRef} from 'react';
import { socialLinks, socialIcons } from '../data/config';

function Header({ mode, setMode }) {
  // Toggle between 'Techie' and 'Creative' modes
  const toggleMode = () => setMode(mode === 'Techie' ? 'Creative' : 'Techie');

  // Date and time state
  const [dateTime, setDateTime] = useState(new Date());

  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef();

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    function handleClick(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setPanelOpen(false);
      }
    }
    if (panelOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [panelOpen]);

  // Format date and time like Ubuntu (e.g., "Wed Aug 21 20:45")
const formatDateTime = (dt) => {
    // e.g., "Wed Aug 21 20:45"
    const weekday = dt.toLocaleString('en-US', { weekday: 'short' });
    const month = dt.toLocaleString('en-US', { month: 'short' });
    const day = dt.getDate();
    const hour = dt.getHours().toString().padStart(2, '0');
    const minute = dt.getMinutes().toString().padStart(2, '0');
    return `${weekday} ${month} ${day} ${hour}:${minute}`;
};

  return (
    <header className="text-white flex items-center justify-between px-4 py-2 border-b"
        style={{ backgroundColor: '#181818', borderBottom: '2px solid #2c2c2cff' }}
    >
      {/* Left side: Techie/Creative toggle */}
      <div className="flex items-center min-w-[180px]">
        <button
          onClick={toggleMode}
          className={`
            flex items-center w-32 h-9 rounded-full px-1 transition-colors duration-200
            ${'bg-gray-700 border border-gray-600'}
            shadow-inner relative
          `}
          style={{
            boxShadow: '0 1px 4px 0 #111 inset'
          }}
        >
          <span
            className={`
              flex-1 text-center text-xs font-semibold z-10 transition-colors duration-200
              ${'text-white'}
            `}
          >
            Techie
          </span>
          <span
            className={`
              flex-1 text-center text-xs font-semibold z-10 transition-colors duration-200
              ${'text-gray-300'}
            `}
          >
            Creative
          </span>
          {/* Sliding indicator */}
          <span
            className={`
              absolute top-1 left-0.5 w-16 h-7 rounded-full transition-transform duration-200
              ${mode === 'Techie'
                ? 'bg-gray-900/80 translate-x-0'
                : 'bg-gray-900/80 translate-x-14'}
              shadow
            `}
            style={{ zIndex: 1 }}
          ></span>
        </button>
      </div>

      {/* Center: Date and Time */}
      <div className="flex-1 flex justify-center">
        <span className="text-sm font-mono select-none">{formatDateTime(dateTime)}</span>
      </div>

      {/* Right side: Ubuntu-style system icons and dropdown */}
      <div className="relative min-w-[180px] flex justify-end">
        <button
          className="flex items-center space-x-2 focus:outline-none"
          onClick={() => setPanelOpen((v) => !v)}
          aria-label="Open system panel"
        >
            {/* Ubuntu-style icons (SVGs) */}
            <span className="flex items-center space-x-2">
              {/* Wifi Icon */}
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="mb-1">
                <path fill="#fff" d="M12 18.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-2.5a4 4 0 0 1 2.83 1.17l-1.42 1.42a2 2 0 0 0-2.82 0l-1.42-1.42A4 4 0 0 1 12 16Zm0-4a8 8 0 0 1 5.66 2.34l-1.42 1.42A6 6 0 0 0 12 14a6 6 0 0 0-4.24 1.76l-1.42-1.42A8 8 0 0 1 12 12Zm0-4a12 12 0 0 1 8.49 3.51l-1.42 1.42A10 10 0 0 0 12 10a10 10 0 0 0-7.07 2.93l-1.42-1.42A12 12 0 0 1 12 8Z"/>
              </svg>
              {/* Sound Icon */}
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path fill="#fff" d="M5 9v6h4l5 5V4l-5 5H5zm13.5 3a6.5 6.5 0 0 0-2-4.62v9.24A6.5 6.5 0 0 0 18.5 12z"/>
              </svg>
              {/* Battery Icon */}
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <rect x="2" y="7" width="18" height="10" rx="2" fill="#fff" stroke="#fff" strokeWidth="1"/>
                <rect x="20" y="10" width="2" height="4" rx="1" fill="#fff"/>
                <rect x="4" y="9" width="14" height="6" rx="1" fill="#232323"/>
              </svg>
              {/* Battery percentage */}
            <span className="ml-1 text-xs font-semibold text-gray-200">95%</span>
            </span>
          </button>
          {/* Ubuntu-style panel */}
        {panelOpen && (
          <div
            ref={panelRef}
            className="absolute right-0 mt-3 w-[420px] bg-[#181818] rounded-xl shadow-2xl z-50 border border-gray-800"
            style={{
              background: 'linear-gradient(135deg, #181818 80%, #e95420 100%)',
              color: '#fff',
              minWidth: '380px',
              padding: '0.5rem 0',
            }}
          >
            {/* Top row: battery and github */}
            <div className="flex items-center justify-between px-5 pt-4 pb-2">
              <div className="flex items-center space-x-2">
                {/* GitHub Icon */}
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path fill="#fff" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.75 1.03A9.36 9.36 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.92-1.3 2.75-1.03 2.75-1.03.54 1.4.2 2.44.1 2.7.64.72 1.02 1.63 1.02 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.57.69.47A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/>
                </svg>
                <span className="text-xs font-bold text-gray-200">GitHub</span>
              </div>
              <div className="flex items-center space-x-2">
                {/* LinkedIn Icon */}
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <rect width="22" height="22" rx="4" fill="#e95420"/>
                  <path fill="#fff" d="M7.5 9.5h2v7h-2v-7zm1-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 2h1.9v1h.03c.26-.5.9-1.03 1.85-1.03 2 0 2.37 1.32 2.37 3.04v4h-2v-3.54c0-.84-.02-1.92-1.17-1.92-1.17 0-1.35.91-1.35 1.85v3.61h-2v-7z"/>
                </svg>
                <span className="text-xs font-bold text-gray-200">LinkedIn</span>
              </div>
            </div>
            {/* Divider */}
            <hr className="border-gray-700 my-1" />
            {/* Panel options */}
            <div className="grid grid-cols-2 gap-2 px-5 pb-3">
            {socialLinks.slice(0, 4).map((soc, idx) => (
                <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center w-full rounded-lg py-2 px-3 font-semibold shadow transition
                    ${idx === 0 ? 'bg-[#e95420] text-white hover:bg-[#ff6f3c]' : 'bg-[#232323] text-gray-200 hover:bg-[#333]'}
                `}
                >
                {socialIcons[soc.name] || null}
                {soc.name}
                </a>
            ))}
            <a
                href="https://drive.google.com/file/d/1dDzxWzBXICV7jSd7_e8QK0Rmyy_KQyDC/view?usp=sharing"
                target='_blank'
                rel='noopener noreferrer'
                download
                className="col-span-2 flex items-center w-full bg-[#232323] text-gray-200 rounded-lg py-2 px-3 font-semibold shadow hover:bg-[#e95420] hover:text-white transition"
            >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="mr-2">
                <path fill="#e95420" d="M12 16.5l4-4h-3V4h-2v8.5H8l4 4z"/>
                <rect x="6" y="18" width="12" height="2" rx="1" fill="#fff"/>
                </svg>
                Download Resume
            </a>
            <button className="col-span-2 flex items-center w-full bg-[#232323] text-gray-200 rounded-lg py-2 px-3 font-semibold shadow hover:bg-[#e95420] hover:text-white transition">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="mr-2">
                <circle cx="12" cy="12" r="10" fill="#e95420"/>
                <path d="M9 10a3 3 0 1 1 6 0v2a3 3 0 1 1-6 0v-2z" fill="#fff"/>
                <rect x="11" y="15" width="2" height="2" rx="1" fill="#fff"/>
                </svg>
                Talk to my AI Avatar
            </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;