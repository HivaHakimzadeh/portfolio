interface ShapeLayerProps {
  variant?: 'prism' | 'asterisk' | 'circle';
}

export function ShapeLayer({ variant = 'prism' }: ShapeLayerProps) {
  if (variant === 'asterisk') {
    return (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <g fill="currentColor">
          <rect x="46" y="6" width="8" height="88" rx="4" />
          <rect x="46" y="6" width="8" height="88" rx="4" transform="rotate(60 50 50)" />
          <rect x="46" y="6" width="8" height="88" rx="4" transform="rotate(120 50 50)" />
        </g>
      </svg>
    );
  }

  if (variant === 'circle') {
    return (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="50" cy="50" r="44" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="prismFace" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7d92ff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#2a4bff" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="prismShadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1e36c4" />
          <stop offset="1" stopColor="#0d1a66" />
        </linearGradient>
        <linearGradient id="prismHighlight" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points="110,20 200,180 20,180" fill="url(#prismFace)" />
      <polygon points="110,20 110,180 20,180" fill="url(#prismShadow)" opacity="0.7" />
      <polygon points="110,20 200,180 110,180" fill="url(#prismHighlight)" opacity="0.55" />
      <polyline
        points="110,20 110,180"
        stroke="#f2efe6"
        strokeOpacity="0.6"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
