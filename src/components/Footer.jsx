import { useRef, useLayoutEffect, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MyIcon } from '../contants/icon'
import { useTranslation } from 'react-i18next'
import { gsap, ScrollTrigger } from '../gsap/setup';

const Footer = () => {
  const { t } = useTranslation();
  const footerRef = useRef(null);

  // Set hidden before paint
  useLayoutEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    gsap.set(el, { autoAlpha: 0, y: 40 });
  }, []);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Reveal footer only when it enters the viewport
      gsap.to(el, {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 95%',   // fire when top of footer is 95% down the viewport
          toggleActions: 'play none none none',
          once: true,          // only animate in once
        },
      });

      // Stagger the inner child elements
      const children = gsap.utils.toArray([
        '.footer-logo',
        '.footer-social',
        '.footer-cta',
      ], el);

      gsap.fromTo(
        children,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            toggleActions: 'play none none none',
            once: true,
          },
          delay: 0.2,
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#090b0e] overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Logo + copyright */}
        <div className="footer-logo flex flex-col items-center md:items-start">
          <div className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 mb-3">
            HÙNG VƯƠNG.
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-[0.2em] font-semibold">{t('footer.rights')}</p>
        </div>

        {/* Social links */}
        <div className="footer-social flex flex-wrap justify-center items-center gap-6 md:gap-10">
          <Link to="https://www.linkedin.com/in/l%C3%AA-h%C3%B9ng-v%C6%B0%C6%A1ng-84334839b/" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 flex items-center gap-2 transition-all hover:-translate-y-1">
            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center border border-gray-200 dark:border-white/5">
              <MyIcon name="mdi:linkedin" size={20} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest hidden sm:block">LinkedIn</span>
          </Link>

          <Link to="https://github.com/lehungvuong2004" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white flex items-center gap-2 transition-all hover:-translate-y-1">
            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center border border-gray-200 dark:border-white/5">
              <MyIcon name="mdi:github" size={20} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest hidden sm:block">GitHub</span>
          </Link>

          <Link to="#" className="text-gray-600 cursor-not-allowed dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 flex items-center gap-2 transition-all hover:-translate-y-1">
            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center border border-gray-200 dark:border-white/5">
              <MyIcon name="ri:twitter-x-fill" size={18} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest hidden sm:block">Twitter</span>
          </Link>
        </div>

        {/* CV download CTA */}
        <Link to="#" className="footer-cta ml-0 md:ml-4 flex cursor-not-allowed items-center gap-3 px-6 py-2.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
          <MyIcon name="solar:download-bold" size={18} />
          <span className="text-xs font-bold uppercase tracking-widest">{t('footer.downloadCV')}</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;