import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../setup';
import { useLocation } from 'react-router-dom';

/**
 * useLayoutTimeline
 * 
 * Chỉ xử lý ScrollTrigger.refresh() khi route thay đổi.
 * KHÔNG còn ẩn/hiện layout — việc đó gây ra flash.
 * Animation page được xử lý bởi usePageAnimation trên từng page.
 */
export const useLayoutTimeline = () => {
  const layoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Refresh scroll triggers after route change so positions are recalculated
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(raf);
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
          delay: 0.15,
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
