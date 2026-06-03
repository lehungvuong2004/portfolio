import { MyIcon } from "../../contants/icon";
import { useTranslation } from "react-i18next";
import { usePageAnimation } from "../../gsap";
import { useScrollReveal, useStaggerReveal } from "../../gsap";
import { Icon } from "@iconify/react";

const SkillsPortfolio = () => {
  const { t } = useTranslation();
  const containerRef = usePageAnimation('scale');

  const headerReveal = useScrollReveal({ y: -30 });
  const bentoReveal = useStaggerReveal('.bento-item', { y: 50, stagger: 0.15 });

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 dark:bg-[#090b0e] text-gray-900 dark:text-white overflow-hidden relative transition-colors duration-500">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[37.5rem] h-[37.5rem] bg-cyan-600/10 rounded-full blur-[9.375rem] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[31.25rem] h-[31.25rem] bg-purple-600/10 rounded-full blur-[9.375rem] -z-10 mix-blend-screen pointer-events-none"></div>

      <main className="max-w-7xl mx-auto px-6 md:px-16 py-24 lg:py-32 relative z-10 mt-16 lg:mt-0">
        {/* Hero */}
        <header ref={headerReveal} className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 text-gray-900 dark:text-white">
              {t('skill.title')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-500">.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed border-l-2 border-blue-500/50 dark:border-cyan-500/50 pl-6 text-left">
              {t('skill.desc')}
            </p>
          </div>
        </header>

        {/* Bento Grid */}
        <div ref={bentoReveal} className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

          {/* Frontend */}
          <section className="bento-item lg:col-span-2 row-span-2 bg-white/80 dark:bg-[#0e1116]/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-gray-200 dark:border-white/10 hover:border-blue-500/30 dark:hover:border-cyan-500/30 transition-all group shadow-xl dark:shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 dark:bg-cyan-500/5 blur-[5rem] rounded-full group-hover:bg-blue-500/10 dark:group-hover:bg-cyan-500/10 transition-all"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 dark:bg-cyan-500/10 flex items-center justify-center border border-blue-500/20 dark:border-cyan-500/20 group-hover:scale-110 transition-transform">
                  <MyIcon
                    name="material-symbols:terminal-rounded"
                    size={28}
                    className="text-blue-500 dark:text-cyan-400"
                  />
                </div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white">
                  {t('skill.frontend')}
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <SkillCard icon="mdi:react" label="React" topLabel="JS" color="cyan" />
                <SkillCard icon="tabler:brand-redux" label="Redux Toolkit" topLabel="State" color="purple" />
                <SkillCard icon="mdi:language-typescript" label="TypeScript" topLabel="< >" color="blue" />
                <SkillCard icon="mdi:tailwind" label="TailwindCSS" topLabel="CSS" color="cyan" />
                <SkillCard icon="mdi:bootstrap" label="Bootstrap" topLabel="CSS" color="pink" />
                <SkillCard icon="material-symbols:fact-check-outline-rounded" label="Yup" topLabel="Valid" color="emerald" />
                <SkillCard icon="material-symbols:dynamic-form-outline-rounded" label="Formik" topLabel="Form" color="pink" />
                {/* <SkillCard icon="mdi:state-machine" label="Zustand" topLabel="State" color="orange" /> */}
                <SkillCard icon="mdi:language-javascript" label="Javascript" topLabel="JS" color="orange" />
                <SkillCard icon="mdi:lighthouse" label="Lighthouse" topLabel="Perf" color="emerald" />
                <SkillCard icon="simple-icons:bem" label="BEM" topLabel="BEM" color="orange" />
                <SkillCard icon="mdi:language-html5" label="HTML/CSS" topLabel="Web" color="blue" />
              </div>
            </div>
          </section>
          {/* Backend */}
          <section className="bento-item bg-white/80 dark:bg-[#0e1116]/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-gray-200 dark:border-white/10 hover:border-emerald-500/30 transition-all group shadow-xl dark:shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 blur-[3.75rem] rounded-full group-hover:bg-emerald-500/20 transition-all"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:-translate-y-1 transition-transform">
                  <MyIcon
                    name="material-symbols:database-outline"
                    size={24}
                    className="text-emerald-500 dark:text-emerald-400"
                  />
                </div>
                <h2 className="text-2xl font-black text-gray-900 dark:text-white">{t('skill.backend')}</h2>
              </div>

              <div className="space-y-6">
                <BackendItem
                  icon="material-symbols:terminal-rounded"
                  title="Php Laravel"
                  desc={t('skill.phpLaravelDesc')}
                  color="blue"
                />

                <BackendItem
                  icon="material-symbols:list-alt-outline-rounded"
                  title="MySql/PostgreSQL"
                  desc={t('skill.dbDesc')}
                  color="purple"
                />
              </div>
            </div>
          </section>
          {/* Tools */}
          <section className="bento-item bg-white/80 dark:bg-[#0e1116]/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-gray-200 dark:border-white/10 hover:border-orange-500/30 transition-all group shadow-xl dark:shadow-2xl relative overflow-hidden flex flex-col">
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500/10 blur-[3.75rem] rounded-full group-hover:bg-orange-500/20 transition-all"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 group-hover:-translate-y-1 transition-transform">
                  <MyIcon
                    name="material-symbols:construction-rounded"
                    size={24}
                    className="text-orange-500 dark:text-orange-400"
                  />
                </div>
                <h2 className="text-2xl font-black text-gray-900 dark:text-white">{t('skill.tools')}</h2>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Git", "Docker", "VS Code", "Postman", "Vercel", "Render", "Figma", "Claude", "Copilot"].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-500/20 hover:text-orange-600 dark:hover:text-orange-300 hover:border-orange-300 dark:hover:border-orange-500/30 transition-all cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <p className="mt-auto text-sm text-gray-500 leading-relaxed font-medium">
                {t('skill.toolsDesc')}
              </p>
            </div>
          </section>



          {/* UI UX */}
          <section className="bento-item lg:col-span-3 row-span-1 bg-white/80 dark:bg-[#0e1116]/80 backdrop-blur-xl rounded-[2.5rem] border border-gray-200 dark:border-white/10 hover:border-pink-500/30 transition-all group shadow-xl dark:shadow-2xl relative overflow-hidden flex flex-col md:flex-row">
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/10 blur-[5rem] rounded-full group-hover:bg-pink-500/20 transition-all"></div>

            <div className="p-8 md:p-10 flex-1 relative z-10 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center border border-pink-500/20 group-hover:scale-110 transition-transform">

                  <Icon icon="mdi:material-design" className="text-pink-500 dark:text-pink-400"></Icon>
                </div>

                <h2 className="text-3xl font-black text-gray-900 dark:text-white">
                  UX/UI
                </h2>
              </div>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-xl text-lg">
                {t('skill.uiuxDesc')}
              </p>

              <div className="flex flex-wrap gap-4">
                <DesignCheck label="Figma Master" />
                <DesignCheck label="Design Systems" />
                <DesignCheck label="Prototyping" />
              </div>
            </div>

            <div className="md:w-5/12 h-64 md:h-auto relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-[#0e1116] via-transparent to-transparent z-10 hidden md:block"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0e1116] via-transparent to-transparent z-10 md:hidden"></div>
              <img
                alt="Design Showcase"
                className="w-full h-full object-cover mix-blend-normal opacity-90 dark:opacity-60 dark:mix-blend-luminosity group-hover:opacity-100 dark:group-hover:mix-blend-normal transition-all duration-700"
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop"
              />
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

const SkillCard = ({ icon, label, topLabel, color = "blue" }) => (
  <div className={`bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-${color}-50 dark:hover:bg-${color}-500/10 hover:border-${color}-300 dark:hover:border-${color}-500/30 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group shadow-sm dark:shadow-none`}>
    {/* Optional Glow inside card */}
    <div className={`absolute -inset-2 bg-${color}-500/10 dark:bg-${color}-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>

    <div className="relative z-10 flex flex-col items-center">
      {topLabel && (
        <span className={`text-[0.625rem] font-black text-${color}-500 dark:text-${color}-400 mb-3 tracking-widest uppercase`}>
          {topLabel}
        </span>
      )}

      <MyIcon
        name={icon}
        size={32}
        className={`text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white mb-4 transition-colors`}
      />

      <span className="text-sm font-bold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white text-center transition-colors">
        {label}
      </span>
    </div>
  </div>
);

const BackendItem = ({ icon, title, desc, color }) => (
  <div className="flex gap-4 group/item">
    <div className={`w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:border-${color}-300 dark:group-hover/item:border-${color}-500/30 group-hover/item:bg-${color}-50 dark:group-hover/item:bg-${color}-500/10 transition-colors`}>
      <MyIcon
        name={icon}
        size={24}
        className={`text-gray-500 dark:text-gray-400 group-hover/item:text-${color}-600 dark:group-hover/item:text-${color}-400 transition-colors`}
      />
    </div>

    <div>
      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1 group-hover/item:text-blue-600 dark:group-hover/item:text-cyan-300 transition-colors">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
);

const DesignCheck = ({ label }) => (
  <div className="flex items-center gap-3 px-4 py-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full hover:border-pink-300 dark:hover:border-pink-500/30 hover:bg-pink-50 dark:hover:bg-pink-500/10 transition-colors cursor-default shadow-sm dark:shadow-none">
    <div className="w-5 h-5 rounded-full bg-pink-100 dark:bg-pink-500/20 flex items-center justify-center border border-pink-200 dark:border-pink-500/30">
      <MyIcon
        name="material-symbols:check-small-rounded"
        size={16}
        className="text-pink-600 dark:text-pink-400"
      />
    </div>

    <span className="font-bold text-sm text-gray-700 dark:text-gray-300">
      {label}
    </span>
  </div>
);

export default SkillsPortfolio;