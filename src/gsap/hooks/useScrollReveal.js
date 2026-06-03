import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../setup';

/**
 * useScrollReveal — Single element scroll-triggered reveal.
 * Uses useLayoutEffect to set initial hidden state BEFORE paint → eliminates CLS.
 * Animates transform/autoAlpha only (compositor-only, no forced reflow).
 */
export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  // Set initial hidden state synchronously before first paint → prevents flash
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.set(el, { 
      autoAlpha: 0, 
      y: options.y !== undefined ? options.y : 50,
      x: options.x !== undefined ? options.x : 0,
      scale: options.scale !== undefined ? options.scale : 1,
      willChange: 'transform, opacity',
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tween = gsap.to(el, {
        autoAlpha: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: options.duration || 1,
        ease: options.ease || 'expo.out',
        delay: options.delay || 0,
        scrollTrigger: {
          trigger: el,
          start: options.start || 'top 88%',
          toggleActions: options.toggleActions || 'play none none reverse',
          fastScrollEnd: true,
          preventOverlaps: true,
        },
        onComplete: () => {
          // Remove will-change after animation to free GPU memory
          gsap.set(el, { willChange: 'auto', clearProps: 'willChange' });
        },
      });
      return tween;
    }, el);

    return () => ctx.revert();
  }, [options.y, options.x, options.scale, options.duration, options.ease, options.delay, options.start, options.toggleActions]);

  return ref;
};

/**
 * useStaggerReveal — Multiple children elements with stagger.
 * Uses ScrollTrigger.batch() for optimal performance — batches DOM reads.
 */
export const useStaggerReveal = (selector, options = {}) => {
  const containerRef = useRef(null);

  // Set initial hidden state before paint
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = gsap.utils.toArray(selector, el);
    if (items.length === 0) return;
    gsap.set(items, { 
      autoAlpha: 0, 
      y: options.y !== undefined ? options.y : 30,
      x: options.x !== undefined ? options.x : 0,
      willChange: 'transform, opacity',
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(selector, el);
      if (items.length === 0) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: options.start || 'top 88%',
          toggleActions: options.toggleActions || 'play none none reverse',
          fastScrollEnd: true,
          preventOverlaps: true,
        },
        onComplete: () => {
          gsap.set(items, { willChange: 'auto', clearProps: 'willChange' });
        },
      });

      tl.to(items, {
        autoAlpha: 1,
        y: 0,
        x: 0,
        duration: options.duration || 0.8,
        stagger: {
          amount: (options.stagger || 0.1) * items.length,
          ease: 'power2.inOut',
        },
        ease: options.ease || 'expo.out',
      });
    }, el);

    return () => ctx.revert();
  }, [selector, options.y, options.x, options.duration, options.stagger, options.ease, options.start, options.toggleActions]);

  return containerRef;
};

/**
 * useParallax — Smooth depth parallax for decorative elements.
 * Pure transform-based, zero layout impact.
 */
export const useParallax = (speed = 0.3) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: -100 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [speed]);

  return ref;
};

/**
 * useMagneticEffect — Magnetic cursor attraction for buttons/icons.
 * Requestsanimationframe via GSAP ticker — no forced reflow.
 */
export const useMagneticEffect = (strength = 0.4) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(el, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: 'power3.out',
        overwrite: true,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out',
        overwrite: true,
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      gsap.killTweensOf(el);
    };
  }, [strength]);

  return ref;
};

/**
 * useCountUp — Animated number counter triggered on scroll.
 */
export const useCountUp = (targetValue, options = {}) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.textContent = '0';
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: targetValue,
        duration: options.duration || 2,
        ease: options.ease || 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: options.start || 'top 85%',
          toggleActions: 'play none none reset',
          once: true,
        },
        onUpdate: () => {
          el.textContent = Math.round(obj.val).toString();
        },
      });
    }, el);

    return () => ctx.revert();
  }, [targetValue, options.duration, options.ease, options.start]);

  return ref;
};
