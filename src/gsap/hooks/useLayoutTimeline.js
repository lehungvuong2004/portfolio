import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../setup';
import { useLocation } from 'react-router-dom';

/**
 * useLayoutTimeline — Cross-component layout entry animation.
 * 
 * Key optimizations:
 * - useLayoutEffect for instant initial state (no flash of unstyled content)
 * - Uses gsap.matchMedia() for responsive animation
 * - Properly cleans up old ScrollTriggers on route change
 * - Batches DOM reads/writes to prevent forced reflow
 */
export const useLayoutTimeline = () => {
  const layoutRef = useRef(null);
  const location = useLocation();

  // Set initial hidden state before paint
  useLayoutEffect(() => {
    const el = layoutRef.current;
    if (!el) return;
    gsap.set(el, { autoAlpha: 0 });
  }, []);

  useEffect(() => {
    const el = layoutRef.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

        // Fade in the layout container
        tl.to(el, { 
          autoAlpha: 1, 
          duration: 0.5,
        });

        // Refresh scroll triggers AFTER layout is visible (deferred)
        tl.call(() => {
          // Use requestAnimationFrame to avoid forced reflow during animation
          requestAnimationFrame(() => {
            ScrollTrigger.refresh();
          });
        }, null, '+=0.1');

      }, el);

      return () => ctx.revert();
    });

    // For reduced-motion users: just show content immediately
    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set(el, { autoAlpha: 1 });
      return () => {};
    });

    return () => {
      mm.revert();
    };
  }, [location.pathname]);

  return layoutRef;
};

/**
 * useHeroTimeline — Orchestrated hero section reveal.
 * Premium staggered timeline with multiple elements.
 */
export const useHeroTimeline = (refs = {}) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const elements = Object.values(refs).map(r => r?.current).filter(Boolean);
    if (elements.length) {
      gsap.set(elements, { autoAlpha: 0 });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ 
          delay: 0.2,
          defaults: { ease: 'expo.out' },
        });

        const { badge, title, subtitle, desc, cta, image, stats } = refs;

        if (badge?.current) {
          tl.fromTo(badge.current,
            { autoAlpha: 0, y: 20, scale: 0.9 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.6 }
          );
        }

        if (title?.current) {
          tl.fromTo(title.current,
            { autoAlpha: 0, y: 40 },
            { autoAlpha: 1, y: 0, duration: 0.8 },
            '-=0.3'
          );
        }

        if (subtitle?.current) {
          tl.fromTo(subtitle.current,
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.6 },
            '-=0.5'
          );
        }

        if (desc?.current) {
          tl.fromTo(desc.current,
            { autoAlpha: 0, x: -20 },
            { autoAlpha: 1, x: 0, duration: 0.6 },
            '-=0.4'
          );
        }

        if (cta?.current) {
          tl.fromTo(cta.current,
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.6 },
            '-=0.3'
          );
        }

        if (image?.current) {
          tl.fromTo(image.current,
            { autoAlpha: 0, scale: 0.92, rotate: 2 },
            { autoAlpha: 1, scale: 1, rotate: 0, duration: 1, ease: 'power3.out' },
            '-=0.8'
          );
        }

        if (stats?.current) {
          const statItems = gsap.utils.toArray('.stat-item', stats.current);
          if (statItems.length) {
            tl.fromTo(statItems,
              { autoAlpha: 0, y: 20 },
              { autoAlpha: 1, y: 0, stagger: 0.15, duration: 0.6 },
              '-=0.5'
            );
          }
        }
      }, containerRef.current || document.body);

      return () => ctx.revert();
    });

    mm.add('(prefers-reduced-motion: reduce)', () => {
      const elements = Object.values(refs).map(r => r?.current).filter(Boolean);
      gsap.set(elements, { autoAlpha: 1, clearProps: 'all' });
      return () => {};
    });

    return () => mm.revert();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return containerRef;
};
