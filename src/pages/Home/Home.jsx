import { Link } from 'react-router-dom';
import { MyIcon } from '../../contants/icon';
import { useTranslation } from 'react-i18next';
import { usePageAnimation } from '../../hooks/usePageAnimation';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
// import { Icon } from '@iconify/react';
import avatar from '../../assets/avatar.jpg';
const PortfolioHome = () => {
  const { t } = useTranslation();
  const containerRef = usePageAnimation();

  const heroReveal = useScrollReveal({ y: 50, duration: 1.2 });
  const statsReveal = useStaggerReveal('.stat-item', { y: 30, stagger: 0.2 });
  const imageReveal = useScrollReveal({ scale: 0.9, duration: 1.2, delay: 0.2 });

  // const skillTitleReveal = useScrollReveal();
  // const skillCardsReveal = useStaggerReveal('.skill-card', { y: 50, stagger: 0.15 });

  const heroSection = () => (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] -z-10 mix-blend-screen"></div>

      <>
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <div ref={heroReveal} className="order-1 flex flex-col">
            <div className="inline-flex items-center gap-3 bg-gray-100 dark:bg-white/5 backdrop-blur-md text-blue-500 dark:text-cyan-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 mb-8 shadow-[0_0_15px_rgba(37,99,235,0.15)] dark:shadow-[0_0_15px_rgba(34,211,238,0.15)] w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 dark:bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500 dark:bg-cyan-500"></span>
              </span>
              {t('home.ready')}
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 text-gray-900 dark:text-white">
              {t('home.hello')} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:via-cyan-300 dark:to-purple-400">
                Lê Hùng Vương
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-600 dark:text-gray-400 mb-8">{t('home.role')}</h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl mb-12 border-l-2 border-blue-500/50 dark:border-cyan-500/50 pl-6">
              {t('home.desc')}
            </p>

            <div className="flex flex-wrap gap-5 mb-16">
              <Link to="/contacts" className='group relative inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-black overflow-hidden transition-all hover:scale-105 active:scale-95'>
                <span className="absolute inset-0 w-full h-full bg-linear-to-r from-blue-500 to-cyan-500 dark:from-cyan-400 dark:to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative group-hover:text-white transition-colors duration-300">{t('home.viewProject')}</span>
                <MyIcon name="material-symbols:arrow-forward-rounded" className="relative group-hover:text-white transition-colors duration-300 group-hover:translate-x-1" size={20} />
              </Link>

              <button className="flex cursor-not-allowed items-center gap-2 border border-gray-200 dark:border-white/20 bg-gray-100 dark:bg-white/5 backdrop-blur-sm px-8 py-4 rounded-xl font-bold text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/40 transition-all active:scale-95">
                <MyIcon name="solar:download-bold" size={20} />
                {t('home.downloadCV')}
              </button>
            </div>
          </div>

          {/* IMAGE AREA */}
          <div ref={imageReveal} className="relative flex justify-center lg:justify-end order-2 lg:row-span-2">
            <div className="relative w-full max-w-md">
              {/* Decorative background for image */}
              <div className="absolute inset-0 bg-linear-to-tr from-cyan-500 to-purple-600 rounded-[2.5rem] blur-2xl opacity-20 transform rotate-3 scale-105"></div>

              <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0c0e12] aspect-[4/5] shadow-xl dark:shadow-2xl group">
                <img
                  src={avatar}
                  alt="Avatar"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 dark:opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-50 dark:from-[#090b0e] via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 md:-left-12 bg-white/90 dark:bg-[#11161d]/90 backdrop-blur-xl p-5 rounded-2xl border border-gray-200 dark:border-white/10 flex items-center gap-5 shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] animate-bounce-slow">
                <div className="bg-linear-to-br from-blue-500 to-cyan-400 p-3.5 rounded-xl shadow-lg">
                  <MyIcon name="solar:code-bold" className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-black tracking-[0.2em] mb-1">{t('home.coreSkills')}</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white tracking-wide">React, Tailwind, Laravel</div>
                </div>
              </div>
            </div>
          </div>

          {/* STATS AREA */}
          <div ref={statsReveal} className="order-3 flex gap-12 lg:gap-16 border-t lg:border-t-0 border-gray-200 dark:border-white/10 pt-10 lg:pt-0">
            <div className="stat-item">
              <div className="text-5xl font-black text-gray-900 dark:text-white flex items-center">
                3<span className="text-blue-500 dark:text-cyan-400">+</span>
              </div>
              <div className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-3 font-bold">{t('home.monthsExp')}</div>
            </div>
            <div className="stat-item">
              <div className="text-5xl font-black text-gray-900 dark:text-white flex items-center">
                10<span className="text-purple-500 dark:text-purple-400">+</span>
              </div>
              <div className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-3 font-bold">{t('home.projectsCompleted')}</div>
            </div>
          </div>

        </div>
      </>
    </section>
  )


  return (
    <div ref={containerRef} className="bg-slate-50 dark:bg-[#090b0e] min-h-screen text-gray-900 dark:text-white font-sans selection:bg-blue-500/30 dark:selection:bg-cyan-500/30 overflow-hidden transition-colors duration-500">
      {heroSection()}

    </div>
  )
}
export default PortfolioHome;