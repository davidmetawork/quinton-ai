export function QuintonMark({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="qm-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF8A3D" />
          <stop offset="55%" stopColor="#FF5E8A" />
          <stop offset="100%" stopColor="#E54D8A" />
        </linearGradient>
      </defs>
      <path
        d="M12 1.5l1.9 6.5 6.6 2-6.6 2-1.9 6.5-1.9-6.5-6.6-2 6.6-2L12 1.5z"
        fill="url(#qm-grad)"
      />
      <path
        d="M19 15.5l.8 2.7 2.7.8-2.7.8-.8 2.7-.8-2.7-2.7-.8 2.7-.8.8-2.7z"
        fill="url(#qm-grad)"
      />
    </svg>
  )
}
