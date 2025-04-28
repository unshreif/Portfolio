'use client';

import { useEffect } from 'react';

export default function SecurityScript() {
  useEffect(() => {
    // Only add event listeners on the client side
    const preventDefault = (e: Event) => e.preventDefault();
    const preventKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', preventDefault);
    document.addEventListener('keydown', preventKeyDown);

    return () => {
      document.removeEventListener('contextmenu', preventDefault);
      document.removeEventListener('keydown', preventKeyDown);
    };
  }, []);

  // Component doesn't render anything visible
  return null;
}