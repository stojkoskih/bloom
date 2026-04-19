import { useState } from 'react';

export default function DiceButton({ onRoll, title = 'Roll a message' }) {
  const [isRolling, setIsRolling] = useState(false);

  function handleClick() {
    onRoll();
    setIsRolling(true);
    window.setTimeout(() => setIsRolling(false), 420);
  }

  return (
    <button
      type="button"
      className={`dice-button${isRolling ? ' is-rolling' : ''}`}
      onClick={handleClick}
      title={title}
      aria-label={title}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4" ry="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="8" cy="8" r="1.6" fill="currentColor" />
        <circle cx="16" cy="8" r="1.6" fill="currentColor" />
        <circle cx="12" cy="12" r="1.6" fill="currentColor" />
        <circle cx="8" cy="16" r="1.6" fill="currentColor" />
        <circle cx="16" cy="16" r="1.6" fill="currentColor" />
      </svg>
    </button>
  );
}
