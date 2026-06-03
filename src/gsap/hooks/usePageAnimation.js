import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from '../setup';

/**
 * usePageAnimation — Page entry animation.
 *
 * Nguyên nhân flash cũ:
 * - useLayoutTimeline ẩn toàn bộ layout (header + page)
 * - usePageAnimation ẩn thêm page content → double hide → flash
 *
 * Fix:
 * - useLayoutTimeline không ẩn layout nữa
 * - usePageAnimation chỉ fade nhẹ (opacity 0→1, không có y offset)
 *   để tránh position jump trông như "nhấp sáng"
 */
export const usePageAnimation = (variant = 'default') => {
  const containerRef = useRef(null);

  // Set initial invisible state synchronously before browser paints
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Only opacity — no y/scale to avoid layout jumps that cause the flash
    gsap.set(el, { autoAlpha: 0 });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        if (variant === 'scale') {
          // Very subtle scale so it doesn't look like a flash
          gsap.fromTo(el,
            { autoAlpha: 0, scale: 0.985 },
            {
              autoAlpha: 1,
              scale: 1,
              duration: 0.6,
              ease: 'power2.out',
              onComplete: () => gsap.set(el, { clearProps: 'scale,willChange' }),
            }
          );
        } else {
          // Pure fade — no movement, zero chance of looking like a flash
          gsap.to(el, {
            autoAlpha: 1,
            duration: 0.5,
            ease: 'power1.out',
          });
        }
      }, el);

      return () => ctx.revert();
    });

    // Reduced-motion: instant show
    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set(el, { autoAlpha: 1, clearProps: 'all' });
      return () => {};
    });

    return () => mm.revert();
  }, [variant]);

  return containerRef;
};
