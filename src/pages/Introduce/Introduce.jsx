import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import { usePageAnimation, useScrollReveal, useStaggerReveal, useParallax } from "../../gsap";
import avatar from '../../assets/avatar2.webp'

const Hero = ({ t }) => {
  const leftReveal = useScrollReveal({ x: -50 });
  const rightReveal = useScrollReveal({ x: 50, delay: 0.2 });
  const journeyReveal = useStaggerReveal('.journey-item', { x: -30, stagger: 0.2 });

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-16 items-start py-20 lg:py-32 relative">
      <div className="absolute top-0 right-0 w-[31.25rem] h-[31.25rem] bg-purple-600/10 rounded-full blur-[7.5rem] -z-10 mix-blend-screen pointer-events-none"></div>

      <div ref={leftReveal} className="md:col-span-5 md:sticky md:top-32 relative">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 dark:from-cyan-500/30 dark:to-purple-500/30 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative overflow-hidden rounded-4xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0e1116] shadow-xl dark:shadow-2xl transition-colors duration-500">
            <img
              className="w-full aspect-[4/5] object-cover opacity-95 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
              src={avatar}
              alt="Professional Portrait"
            />
            {/* Overlay Tag giống trong ảnh */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-[#090b0e]/80 backdrop-blur-xl p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
              <p className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-400">{t('introduce.creativeDev')}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 font-medium">{t('introduce.location')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Detailed Content */}
      <div ref={rightReveal} className="md:col-span-7 space-y-20">
        <div className="space-y-8 relative">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight relative z-10">{t('introduce.aboutMe')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl relative z-10 border-l-2 border-blue-500/50 dark:border-cyan-500/50 pl-6">
            {t('introduce.aboutDesc')}
          </p>
        </div>

        {/* Hành trình nghề nghiệp */}
        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-blue-500 dark:from-cyan-500 to-transparent"></span>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 dark:text-cyan-400">{t('introduce.careerJourney')}</h2>
          </div>
          
          <div ref={journeyReveal} className="space-y-12 pl-2 border-l border-gray-300 dark:border-white/10 ml-2 relative">
            {/* Background Glow line */}
            <div className="absolute left-[-1px] top-0 w-px h-full bg-gradient-to-b from-blue-500/50 dark:from-cyan-500/50 via-purple-500/20 to-transparent"></div>

            {/* Item 1 - Active */}
            <div className="journey-item relative pl-10 group">
              <div className="absolute -left-[1.5625rem] top-1 w-12 h-12 rounded-full bg-white dark:bg-[#090b0e] border border-gray-300 dark:border-white/10 flex items-center justify-center group-hover:border-blue-500/50 dark:group-hover:border-cyan-500/50 transition-colors shadow-lg">
                <div className="w-4 h-4 bg-blue-500 dark:bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)] dark:shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">{t('introduce.internRole')}</h3>
              <p className="text-blue-600 dark:text-cyan-400 font-bold mt-2 text-sm tracking-widest uppercase">{t('introduce.internTime')}</p>
              <div className="mt-5 p-6 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl group-hover:bg-gray-200 dark:group-hover:bg-white/10 transition-colors">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t('introduce.internDesc')}</p>
              </div>
            </div>

            {/* Item 2 - Inactive */}
            <div className="journey-item relative pl-10 group">
              <div className="absolute -left-[1.5625rem] top-1 w-12 h-12 rounded-full bg-white dark:bg-[#090b0e] border border-gray-300 dark:border-white/10 flex items-center justify-center group-hover:border-purple-500/50 transition-colors shadow-lg">
                <div className="w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{t('introduce.studentRole')}</h3>
              <p className="text-gray-500 font-bold mt-2 text-sm tracking-widest uppercase">{t('introduce.studentTime')}</p>
              <p className="text-gray-600 dark:text-gray-500 mt-5 leading-relaxed">{t('introduce.studentDesc')}</p>
            </div>
          </div>
        </div>

        {/* Học tập & Đam mê */}
        <div className="space-y-8 bg-gradient-to-br from-white to-gray-50 dark:from-[#0e1116] dark:to-[#090b0e] p-8 md:p-10 rounded-[2.5rem] border border-gray-200 dark:border-white/5 relative overflow-hidden group hover:border-blue-500/20 dark:hover:border-cyan-500/20 transition-all shadow-xl dark:shadow-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 dark:bg-cyan-500/5 blur-[5rem] rounded-full group-hover:bg-blue-500/10 dark:group-hover:bg-cyan-500/10 transition-all"></div>
          
          <div className="flex items-center gap-4 relative z-10">
            <span className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></span>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400">{t('introduce.learningPassion')}</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg relative z-10">
            {t('introduce.learningDesc')}
          </p>
          <div className="flex flex-wrap gap-3 pt-4 relative z-10">
            {["Open Source Contributor", "Photography", "Tech Blogging"].map(tag => (
              <span key={tag} className="px-5 py-2.5 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold border border-gray-200 dark:border-white/10 hover:bg-blue-50 dark:hover:bg-cyan-500/20 hover:text-blue-600 dark:hover:text-cyan-300 hover:border-blue-300 dark:hover:border-cyan-500/30 transition-all cursor-default shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Values = ({ t }) => {
  const valuesReveal = useStaggerReveal('.value-card', { y: 50, stagger: 0.15 });

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 py-10 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-blue-600/5 rounded-full blur-[9.375rem] -z-10 pointer-events-none"></div>

      <div className="bg-white/80 dark:bg-[#0e1116]/80 backdrop-blur-2xl rounded-[3rem] p-10 md:p-16 border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-colors duration-500">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">{t('introduce.coreValues')}</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{t('introduce.coreValuesDesc')}</p>
        </div>

        <div ref={valuesReveal} className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {[
            { icon: "lucide:lightbulb", title: t('introduce.creativity'), desc: t('introduce.creativityDesc'), color: "cyan" },
            { icon: "lucide:shield-check", title: t('introduce.quality'), desc: t('introduce.qualityDesc'), color: "purple" },
            { icon: "lucide:users", title: t('introduce.collaboration'), desc: t('introduce.collabDesc'), color: "blue" }
          ].map((item, index) => (
            <div key={index} className="value-card p-10 bg-gray-50 dark:bg-[#090b0e] rounded-3xl border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-all group hover:-translate-y-2 relative overflow-hidden shadow-xl dark:shadow-lg">
              {/* Card Hover Glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}-500/10 blur-[3.125rem] rounded-full group-hover:bg-${item.color}-500/20 transition-all`}></div>
              
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-gray-200 dark:border-white/10 relative z-10 shadow-sm dark:shadow-none">
                <Icon icon={item.icon} className="text-gray-700 dark:text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Introduce = () => {
  const { t } = useTranslation();
  const containerRef = usePageAnimation('scale');

  return (
    <div ref={containerRef} className="bg-slate-50 dark:bg-[#090b0e] min-h-screen font-sans selection:bg-blue-500/30 dark:selection:bg-cyan-500/30 pb-20 overflow-hidden text-gray-900 dark:text-white transition-colors duration-500">
      <Hero t={t} />
      <Values t={t} />
    </div>
  );
};

export default Introduce;
