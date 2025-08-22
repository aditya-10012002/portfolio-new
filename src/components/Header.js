import React, {useState, useEffect, useRef} from 'react';
import { socialLinks, socialIcons, resumeLink } from '../data/config';

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
            className="absolute right-0 mt-11 w-[420px] bg-[#181818] rounded-xl shadow-2xl z-50 border border-gray-800"
            style={{
              background: 'linear-gradient(135deg, #181818 80%, #e95420 100%)',
              color: '#fff',
              minWidth: '380px',
              padding: '0.5rem 0',
            }}
          >
            {/* Top row: Ubuntu generic icons */}
            <div className="flex items-center justify-between px-5 pt-2 pb-2">
              <div className="flex items-center space-x-2">
                {/* Ubuntu logo icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#e95420"/>
                  <circle cx="12" cy="12" r="4" fill="#fff"/>
                  <circle cx="19" cy="12" r="1.5" fill="#fff"/>
                  <circle cx="6.5" cy="7.5" r="1.5" fill="#fff"/>
                  <circle cx="6.5" cy="16.5" r="1.5" fill="#fff"/>
                </svg>
                <span className="text-xs font-bold text-gray-200">Get To Know Me</span>
              </div>
              <div className="flex items-center space-x-2">
                {/* Settings/gear icon */}
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="#232323"/>
                  <path fill="#e95420" d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7Zm7.43-2.06-1.36-.2a5.97 5.97 0 0 0-.48-1.16l.8-1.13a.5.5 0 0 0-.06-.64l-1.13-1.13a.5.5 0 0 0-.64-.06l-1.13.8c-.37-.2-.76-.36-1.16-.48l-.2-1.36A.5.5 0 0 0 13 7h-2a.5.5 0 0 0-.5.43l-.2 1.36c-.4.12-.79.28-1.16.48l-1.13-.8a.5.5 0 0 0-.64.06l-1.13 1.13a.5.5 0 0 0-.06.64l.8 1.13c-.2.37-.36.76-.48 1.16l-1.36.2A.5.5 0 0 0 5 11v2c0 .25.18.46.43.5l1.36.2c.12.4.28.79.48 1.16l-.8 1.13a.5.5 0 0 0 .06.64l1.13 1.13c.18.18.46.2.64.06l1.13-.8c.37.2.76.36 1.16.48l.2 1.36c.04.25.25.43.5.43h2c.25 0 .46-.18.5-.43l.2-1.36c.4-.12.79-.28 1.16-.48l1.13.8c.18.14.46.12.64-.06l1.13-1.13a.5.5 0 0 0 .06-.64l-.8-1.13c.2-.37.36-.76.48-1.16l1.36-.2A.5.5 0 0 0 19 13v-2a.5.5 0 0 0-.57-.56Z"/>
                </svg>
                <span className="text-xs font-bold text-gray-200">Go Ahead</span>
              </div>
            </div>
            {/* Divider */}
            <hr className="border-gray-700 my-1" />
            {/* Panel options */}
            <div className="grid grid-cols-2 gap-2 px-5 py-3">
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
                href={resumeLink}
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