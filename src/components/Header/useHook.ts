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
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

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
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo('.header-item', 
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' }
      );
    }, headerRef);

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
    navLinks
  };
};
