import React from "react";

export function CampusLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={"lcd-logo " + (compact ? "is-compact" : "")} aria-label="Liloca Campus Digital">
      <div className="lcd-wordmark" aria-hidden="true">
        <span>Liloca</span>
        <svg viewBox="0 0 86 72" role="img">
          <defs>
            <linearGradient id="lcdBook" x1="0" x2="1" y1="1" y2="0">
              <stop offset="0%" stopColor="#0A3B84" />
              <stop offset="55%" stopColor="#0C73B8" />
              <stop offset="100%" stopColor="#10B9C3" />
            </linearGradient>
          </defs>
          <path d="M5 17c15 2 26 8 35 19v27C29 52 18 47 5 46V17Z" fill="url(#lcdBook)" />
          <path d="M31 7c16 4 29 13 37 27v27C58 48 47 41 31 37V7Z" fill="url(#lcdBook)" opacity=".96" />
          <path d="M54 3c13 5 22 12 27 20v27c-8-8-17-14-27-17V3Z" fill="url(#lcdBook)" opacity=".88" />
          <path d="M41 63c7-10 18-15 40-17" fill="none" stroke="#fff" strokeWidth="4.2" strokeLinecap="round" />
          <path d="M40 63C31 52 20 47 5 46" fill="none" stroke="#fff" strokeWidth="4.2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="lcd-submark"><strong>CAMPUS</strong><span>DIGITAL</span></div>
    </div>
  );
}
