export const HiliLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 600 400"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      fill="none"
    >
      {/* Define gradients and patterns */}
      <defs>
        {/* Purple gradient for H */}
        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>

        {/* Pink gradient for first I */}
        <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#db2777" />
          <stop offset="100%" stopColor="#be185d" />
        </linearGradient>

        {/* Yellow gradient for L */}
        <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>

        {/* Pattern for textures */}
        <pattern id="stripes" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="8" y2="8" stroke="white" strokeWidth="1" opacity="0.1" />
        </pattern>
      </defs>

      {/* H - Purple section */}
      <g>
        {/* H left vertical bar */}
        <rect x="50" y="80" width="45" height="240" fill="url(#purpleGradient)" opacity="0.9" />
        {/* H top section pattern */}
        <rect x="50" y="80" width="45" height="40" fill="url(#purpleGradient)" opacity="1" />
        <polygon points="70,100 80,85 95,95 85,110" fill="#ec4899" opacity="0.6" />
        <polygon points="60,120 70,105 85,115 75,130" fill="#a855f7" opacity="0.7" />

        {/* H middle horizontal bar */}
        <rect x="50" y="190" width="120" height="30" fill="url(#purpleGradient)" opacity="0.85" />

        {/* H right vertical bar */}
        <rect x="125" y="80" width="45" height="240" fill="url(#purpleGradient)" opacity="0.9" />
        {/* H top right pattern */}
        <polygon points="140,95 155,75 165,90 150,110" fill="#db2777" opacity="0.6" />
      </g>

      {/* I (first) - Pink/Rose section */}
      <g>
        {/* Circle on top */}
        <circle cx="235" cy="55" r="22" fill="url(#pinkGradient)" opacity="0.95" />
        <circle cx="235" cy="55" r="16" fill="#fda4af" opacity="0.4" />

        {/* Vertical bar */}
        <rect x="210" y="95" width="50" height="225" fill="url(#pinkGradient)" opacity="0.9" />

        {/* Pattern elements */}
        <rect x="210" y="95" width="50" height="35" fill="#be185d" opacity="0.7" />
        <polygon points="225,110 235,100 250,110 240,120" fill="#fda4af" opacity="0.5" />
        <polygon points="215,140 230,125 245,135 230,150" fill="#db2777" opacity="0.6" />
      </g>

      {/* L - Yellow/Gold section */}
      <g>
        {/* Vertical bar */}
        <rect x="310" y="80" width="50" height="240" fill="url(#yellowGradient)" opacity="0.9" />

        {/* Bottom horizontal bar */}
        <rect x="310" y="295" width="120" height="25" fill="url(#yellowGradient)" opacity="0.9" />

        {/* Pattern elements top */}
        <rect x="310" y="80" width="50" height="40" fill="#fbbf24" opacity="1" />
        <polygon points="330,100 345,85 360,95 345,110" fill="#f59e0b" opacity="0.6" />
        <polygon points="320,125 335,110 350,120 335,135" fill="#fbbf24" opacity="0.7" />

        {/* Bottom pattern */}
        <polygon points="330,280 345,265 360,275 345,290" fill="#f59e0b" opacity="0.5" />
      </g>

      {/* I (second) - Rose/Pink section */}
      <g>
        {/* Circle on top */}
        <circle cx="485" cy="55" r="22" fill="url(#pinkGradient)" opacity="0.95" />
        <circle cx="485" cy="55" r="16" fill="#fbcfe8" opacity="0.4" />

        {/* Vertical bar */}
        <rect x="460" y="95" width="50" height="225" fill="url(#pinkGradient)" opacity="0.9" />

        {/* Pattern elements */}
        <rect x="460" y="95" width="50" height="35" fill="#be123c" opacity="0.7" />
        <polygon points="475,110 485,100 500,110 490,120" fill="#fda4af" opacity="0.5" />
        <polygon points="465,140 480,125 495,135 480,150" fill="#ec4899" opacity="0.6" />
      </g>

      {/* Add subtle geometric overlays for depth */}
      <g opacity="0.15">
        <line x1="75" y1="100" x2="100" y2="100" stroke="#1f2937" strokeWidth="2" />
        <line x1="235" y1="110" x2="260" y2="110" stroke="#1f2937" strokeWidth="2" />
        <line x1="335" y1="105" x2="360" y2="105" stroke="#1f2937" strokeWidth="2" />
        <line x1="485" y1="110" x2="510" y2="110" stroke="#1f2937" strokeWidth="2" />
      </g>
    </svg>
  );
};
