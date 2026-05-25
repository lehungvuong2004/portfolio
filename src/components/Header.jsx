
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { MyIcon } from '../contants/icon'

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const headerRef = useRef(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);
  
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
      localStorage.setItem('them', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    gsap.fromTo(headerRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
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

  return (
    <div ref={headerRef} className="fixed w-full top-0 z-50">
      <div className="absolute inset-0 bg-white/80 dark:bg-[#090b0e]/70 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 shadow-xl dark:shadow-2xl transition-colors duration-500"></div>
      <nav className="relative flex items-center justify-between px-6 md:px-16 py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
          HÙNG VƯƠNG.
        </div>
        
        {/* Navigation */}
        <div className="hidden lg:flex space-x-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-2 py-1 transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-blue-600 dark:text-cyan-400'
                  : 'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white'
              }`}
            >
              {t(link.label)}
              {location.pathname === link.path && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 dark:bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.8)] dark:shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-[#11161d] border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-500/30 dark:hover:border-cyan-500/30 transition-all shadow-inner active:scale-95"
            aria-label="Toggle Dark Mode"
          >
            <MyIcon name={isDarkMode ? "entypo:light-up" : "ix:light-dark"} size={20} />
          </button>

          <div ref={langRef} className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="relative flex items-center gap-2 bg-gray-100 dark:bg-[#11161d] border border-gray-200 dark:border-white/10 rounded-xl px-3 py-2 transition-all hover:border-blue-500/30 dark:hover:border-cyan-500/30 shadow-inner"
            >
              <MyIcon 
                name={i18n.language === 'en' ? 'twemoji:flag-us-outlying-islands' : 'twemoji:flag-vietnam'} 
                size={20} 
              />
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase w-7 text-left">
                {i18n.language === 'en' ? 'ENG' : 'VIE'}
              </span>
              <MyIcon 
                name="material-symbols:keyboard-arrow-down-rounded" 
                size={20} 
                className={`text-gray-500 dark:text-gray-400 transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown Menu */}
            {isLangOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-[#11161d] border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col py-1 z-50">
                <button 
                  onClick={() => changeLanguage('vi')}
                  className={`px-3 py-2 text-left text-sm font-bold uppercase transition-colors hover:bg-gray-100 dark:hover:bg-white/5 flex items-center gap-2 ${i18n.language === 'vi' ? 'text-blue-600 dark:text-cyan-400' : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'}`}
                >
                  <MyIcon name="twemoji:flag-vietnam" size={16} />
                  VIE
                </button>
                <button 
                  onClick={() => changeLanguage('en')}
                  className={`px-3 py-2 text-left text-sm font-bold uppercase transition-colors hover:bg-gray-100 dark:hover:bg-white/5 flex items-center gap-2 ${i18n.language === 'en' ? 'text-blue-600 dark:text-cyan-400' : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'}`}
                >
                  <MyIcon name="twemoji:flag-us-outlying-islands" size={16} />
                  ENG
                </button>
              </div>
            )}
          </div>
          <Link 
            to="/contacts" 
            className='hidden sm:flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all active:scale-95'
          >
            {t('header.contactNow')}
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
