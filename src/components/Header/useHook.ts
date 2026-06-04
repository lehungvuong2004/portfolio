import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

export const useHeaderHook = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const headerRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    // Set initial state before any paint
    const items = gsap.utils.toArray<HTMLElement>('.header-item', el);
    gsap.set(items, { autoAlpha: 0, y: -20 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1, defaults: { ease: 'expo.out' } });
      
      // Only use transform + opacity — no layout-triggering props
      tl.to(items, {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        onComplete: () => {
          // Free GPU memory after animation
          gsap.set(items, { clearProps: 'willChange' });
        },
      });
    }, el);

    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      ctx.revert();
    };
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', lng);
    setIsLangOpen(false);
  };

  const navLinks = [
    { path: '/', label: 'header.home' },
    { path: '/introduce', label: 'header.about' },
    { path: '/skill', label: 'header.skills' },
    { path: '/products', label: 'header.products' },
    { path: '/certificates', label: 'header.certificates' },
    { path: '/contacts', label: 'header.contact' }
  ];

  return {
    t,
    i18n,
    location,
    headerRef,
    langRef,
    isLangOpen,
    setIsLangOpen,
    isDarkMode,
    setIsDarkMode,
    changeLanguage,
    navLinks,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isScrolled
  };
};
