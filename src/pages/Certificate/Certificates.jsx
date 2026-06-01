import { MyIcon } from '../../contants/icon';
import { useTranslation } from 'react-i18next';
import { usePageAnimation } from '../../hooks/usePageAnimation';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';

import vnptImg from '../../assets/chungchi_2.jpg';
import htmlcssImg from '../../assets/htmlcss.png';
import javascriptImg from '../../assets/javascript.png';
// import heroImg from '../../assets/hero.png';
import uxuiImg from '../../assets/ux.jpg';

const Certificates = () => {
  const { t } = useTranslation();
  const containerRef = usePageAnimation();
  const headerReveal = useScrollReveal({ y: -30 });
  const listReveal = useStaggerReveal('.cert-item', { x: 50, stagger: 0.1 });

  const scroll = (direction) => {
    if (listReveal.current) {
      const { current } = listReveal;
      const scrollAmount = 400; 
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const certificateList = [
     {
      id: 1,
      title: t('certificate.cert1Title'),
      org: 'Tổng công ty Dịch vụ Viễn thông (VNPT)',
      year: '2026',
      category: 'DEVELOPMENT',
      image: vnptImg,
    },
    {
      id: 2,
      title: t('certificate.cert2Title'),
      org: 'HTML & CSS BASIC',
      year: '2025',
      category: 'Website',
      image: htmlcssImg,
    },
        {
      id: 4,
      title: t('certificate.cert3Title'),
      org: 'UI/UX DESIGN BASIC',
      year: '2025',
      category: 'Website',
      image: uxuiImg,
    },
    {
      id: 3,
      title: t('certificate.cert4Title'),
      org: 'JavaScript BASIC',
      year: '2026',
      category: 'Website',
      image: javascriptImg,
    },
   

  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-slate-50 dark:bg-[#090b0e] relative overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] -z-10 mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-20 relative z-10">
        {/* Header */}
        <header ref={headerReveal} className="mb-14 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
              {t('certificate.title')}
              <span className="text-purple-600 dark:text-purple-400">.</span>
            </h1>

            <p className="max-w-2xl text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed border-l-2 border-purple-500/50 pl-6 text-left">
              {t('certificate.desc')}
            </p>
          </div>

          <div className="flex gap-4 items-center justify-center">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-500/20 hover:border-purple-300 dark:hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400 transition-all text-gray-600 dark:text-gray-400 active:scale-95 shadow-lg"
            >
              <MyIcon name="material-symbols:arrow-back-rounded" size={28} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-500/20 hover:border-purple-300 dark:hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400 transition-all text-gray-600 dark:text-gray-400 active:scale-95 shadow-lg"
            >
              <MyIcon name="material-symbols:arrow-forward-rounded" size={28} />
            </button>
          </div>
        </header>

        {/* Slider */}
        <div 
          ref={listReveal}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 pt-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {certificateList.map((cert) => (
            <div
              key={cert.id}
              className="cert-item flex flex-col group overflow-hidden rounded-[2.5rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0e1116] transition-all duration-500 hover:border-purple-400 dark:hover:border-purple-500/50 hover:-translate-y-2 shadow-xl dark:shadow-none hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] dark:hover:shadow-[0_20px_40px_rgba(168,85,247,0.2)] flex-shrink-0 w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.33px)] snap-start relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-[#0e1116] z-10 pointer-events-none"></div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 dark:opacity-70 group-hover:opacity-100"
                />
              </div>

              {/* Content */}
              <div className="p-8 relative z-20 -mt-10 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-1.5 rounded-lg border border-purple-200 dark:border-white/10 bg-purple-50 dark:bg-[#090b0e] text-[10px] tracking-widest font-black text-purple-600 dark:text-purple-400 uppercase shadow-md">
                    {cert.category}
                  </span>

                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full border border-gray-200 dark:border-white/5">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2 mb-6">
                  <MyIcon name="material-symbols:business-center" size={18} />
                  {cert.org}
                </p>

                <div className="mt-auto">
                  <button 
                    onClick={() => window.open(cert.image, '_blank')}
                    className="cursor-pointer flex items-center justify-center gap-2 w-full py-2.5 bg-purple-50 dark:bg-purple-500/10 hover:bg-purple-600 dark:hover:bg-purple-600 text-purple-700 dark:text-purple-300 hover:text-white dark:hover:text-white text-sm font-bold rounded-xl transition-all duration-300 border border-purple-100 dark:border-purple-500/20"
                  >
                    <MyIcon name="material-symbols:visibility-rounded" size={18} />
                    {t('certificate.showBtn')}
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Empty Card */}
          <div className="cert-item min-h-96 rounded-[2.5rem] border-2 border-dashed border-gray-300 dark:border-white/10 bg-gray-50 dark:bg-[#0e1116]/50 flex flex-col items-center justify-center p-10 opacity-70 hover:opacity-100 hover:border-gray-400 dark:hover:border-white/30 transition-all flex-shrink-0 w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.33px)] snap-start cursor-pointer group shadow-inner dark:shadow-none">
            <div className="w-20 h-20 rounded-full border border-gray-300 dark:border-white/20 bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 group-hover:border-purple-300 dark:group-hover:border-purple-500/30 transition-all duration-500 shadow-xl">
              <MyIcon
                name="material-symbols:add-rounded"
                size={40}
                className="text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
              {t('certificate.updating')}
            </h3>

            <p className="text-base text-center text-gray-500 dark:text-gray-500 font-medium">
              {t('certificate.updatingDesc')}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Certificates;