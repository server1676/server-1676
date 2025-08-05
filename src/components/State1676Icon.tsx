import React from 'react';

interface State1676IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const State1676Icon: React.FC<State1676IconProps> = ({ 
  size = 32, 
  className = "", 
  style = {} 
}) => {
  return (
    <div 
      className={`inline-block ${className}`}
      style={{ width: size, height: size, ...style }}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 64 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle with neon glow */}
        <circle cx="32" cy="32" r="30" fill="url(#bgGradient)" stroke="url(#borderGradient)" strokeWidth="2"/>
        
        {/* Inner glow circle */}
        <circle cx="32" cy="32" r="26" fill="none" stroke="url(#innerGlow)" strokeWidth="1" opacity="0.6"/>
        
        {/* 1676 Text */}
        <text x="32" y="38" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle" fill="url(#textGradient)">1676</text>
        
        {/* Corner accents */}
        <rect x="8" y="8" width="6" height="1.5" fill="#00f0ff"/>
        <rect x="8" y="8" width="1.5" height="6" fill="#00f0ff"/>
        <rect x="50" y="8" width="6" height="1.5" fill="#00f0ff"/>
        <rect x="54.5" y="8" width="1.5" height="6" fill="#00f0ff"/>
        <rect x="8" y="54.5" width="6" height="1.5" fill="#00f0ff"/>
        <rect x="8" y="50" width="1.5" height="6" fill="#00f0ff"/>
        <rect x="50" y="54.5" width="6" height="1.5" fill="#00f0ff"/>
        <rect x="54.5" y="50" width="1.5" height="6" fill="#00f0ff"/>
        
        {/* Gradients */}
        <defs>
          <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0f172a"/>
            <stop offset="100%" stopColor="#050d1c"/>
          </radialGradient>
          
          <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff"/>
            <stop offset="50%" stopColor="#8efff9"/>
            <stop offset="100%" stopColor="#00f0ff"/>
          </linearGradient>
          
          <linearGradient id="innerGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#8efff9" stopOpacity="0.3"/>
          </linearGradient>
          
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff"/>
            <stop offset="50%" stopColor="#8efff9"/>
            <stop offset="100%" stopColor="#fbbf24"/>
          </linearGradient>
          
          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <style>
          {`
            text {
              filter: url(#glow);
            }
          `}
        </style>
      </svg>
    </div>
  );
};

export default State1676Icon;