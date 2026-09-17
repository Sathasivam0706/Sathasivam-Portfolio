import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device is touch-based
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, select, .cursor-interactive');
      const projectCard = target.closest('[data-cursor-text]');

      if (projectCard) {
        setIsHovered(true);
        setHoverText(projectCard.getAttribute('data-cursor-text') || 'EXPLORE →');
      } else if (interactive) {
        setIsHovered(true);
        setHoverText(null);
      } else {
        setIsHovered(false);
        setHoverText(null);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div
        className={`relative -top-1/2 -left-1/2 flex items-center justify-center rounded-full transition-all duration-200 ${
          hoverText
            ? 'w-24 h-24 bg-sky-600 text-white font-mono text-[11px] font-bold tracking-wider uppercase shadow-xl shadow-sky-600/30'
            : isHovered
            ? 'w-10 h-10 bg-sky-500/15 border border-sky-500/80 backdrop-blur-xs'
            : 'w-2.5 h-2.5 bg-sky-600 shadow-[0_0_8px_rgba(2,132,199,0.5)]'
        }`}
      >
        {hoverText && (
          <span className="select-none animate-in fade-in duration-150 text-center px-1">
            {hoverText}
          </span>
        )}
      </div>
    </div>
  );
};
