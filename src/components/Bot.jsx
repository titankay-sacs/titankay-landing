// Mascota del asistente: cabeza con pantalla, antena y auricular.
export default function Bot({
  size = 120,
  face = '#ffffff',
  ink = '#066271',
  accent = '#f7c948',
  className = '',
}) {
  return (
    <svg
      className={`bot ${className}`}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      aria-hidden="true"
      focusable="false"
    >
      <line x1="60" y1="16" x2="60" y2="30" stroke={ink} strokeWidth="4" strokeLinecap="round" />
      <circle className="bot__tip" cx="60" cy="11" r="6" fill={accent} stroke={ink} strokeWidth="3" />
      <rect x="14" y="52" width="12" height="24" rx="6" fill={ink} />
      <rect x="94" y="52" width="12" height="24" rx="6" fill={ink} />
      <rect x="22" y="30" width="76" height="64" rx="26" fill={face} stroke={ink} strokeWidth="4" />
      <rect x="32" y="42" width="56" height="40" rx="17" fill={ink} />
      <ellipse className="bot__eye" cx="48" cy="60" rx="5" ry="6.5" fill={face} />
      <ellipse className="bot__eye" cx="72" cy="60" rx="5" ry="6.5" fill={face} />
      <path d="M53 71q7 6 14 0" stroke={face} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M100 74c2 12-8 18-20 16" stroke={ink} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <circle cx="79" cy="90" r="4.5" fill={accent} stroke={ink} strokeWidth="2.5" />
      <rect x="36" y="98" width="48" height="16" rx="8" fill={face} stroke={ink} strokeWidth="4" />
    </svg>
  );
}

export function LogoMark({ size = 32, bg = '#ffffff', fg = '#066271' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="10" fill={bg} />
      <rect x="6" y="9" width="20" height="14" rx="6" fill={fg} />
      <circle cx="12" cy="16" r="2" fill={bg} />
      <circle cx="20" cy="16" r="2" fill={bg} />
      <circle cx="16" cy="5" r="2" fill="#f7c948" />
    </svg>
  );
}
