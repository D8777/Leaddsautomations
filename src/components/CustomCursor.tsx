import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Check if it's a touch device, if so we don't render the cursor
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'input' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Don't render on mobile/touch devices where mousePosition is 0,0 initially
  if (mousePosition.x === 0 && mousePosition.y === 0) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-accent rounded-full pointer-events-none z-[9999]"
      animate={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
        scale: isHovering ? 3 : 1,
        backgroundColor: isHovering ? 'rgba(212,175,55,0.1)' : 'rgba(212,175,55,1)',
        border: isHovering ? '1px solid rgba(212,175,55,0.5)' : 'none',
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 28,
        mass: 0.5,
      }}
    />
  );
}
