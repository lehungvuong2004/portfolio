import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export const usePageAnimation = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  return containerRef;
};
