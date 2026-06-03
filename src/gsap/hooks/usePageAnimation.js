import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from '../setup';

/**
 * usePageAnimation — Page entry animation.
 * Sets initial state in useLayoutEffect (before paint) to prevent CLS.
 * Uses clip-path + transform for premium reveal effect.
 */
export const usePageAnimation = (variant = 'default') => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    gsap.set(el, { autoAlpha: 0, y: 20, willChange: 'transform, opacity' });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (variant === 'slide') {
        // Slide from right — for page transitions
        gsap.fromTo(el,
          { autoAlpha: 0, xPercent: 5 },
          { 
            autoAlpha: 1, 
            xPercent: 0, 
            duration: 0.7, 
            ease: 'expo.out',
            onComplete: () => gsap.set(el, { willChange: 'auto', clearProps: 'willChange' }),
          }
        );
      } else if (variant === 'scale') {
        // Scale from 97% — subtle zoom
        gsap.fromTo(el,
          { autoAlpha: 0, scale: 0.97 },
          { 
            autoAlpha: 1, 
            scale: 1, 
            duration: 0.8, 
            ease: 'power3.out',
            onComplete: () => gsap.set(el, { willChange: 'auto', clearProps: 'willChange' }),
          }
        );
      } else {
        // Default: fade + lift
        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'expo.out',
          onComplete: () => gsap.set(el, { willChange: 'auto', clearProps: 'willChange' }),
        });
      }
    }, el);

    return () => ctx.revert();
  }, [variant]);

  return containerRef;
};
