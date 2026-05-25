import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: options.y || 50,
          x: options.x || 0,
          scale: options.scale || 1,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: options.duration || 1,
          ease: options.ease || 'power3.out',
          delay: options.delay || 0,
          scrollTrigger: {
            trigger: el,
            start: options.start || 'top 85%',
            toggleActions: options.toggleActions || 'play none none reverse',
          },
        }
      );
    }, el); // Scope to the element if needed

    return () => ctx.revert();
  }, [options.y, options.x, options.scale, options.duration, options.ease, options.delay, options.start, options.toggleActions]);

  return ref;
};

export const useStaggerReveal = (selector, options = {}) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        gsap.utils.toArray(selector),
        {
          opacity: 0,
          y: options.y || 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: options.duration || 0.8,
          stagger: options.stagger || 0.1,
          ease: options.ease || 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: options.start || 'top 85%',
            toggleActions: options.toggleActions || 'play none none reverse',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [selector, options.y, options.duration, options.stagger, options.ease, options.start, options.toggleActions]);

  return containerRef;
};
