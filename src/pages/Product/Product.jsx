import  { useState } from "react";
import { Link } from "react-router-dom";
import { MyIcon } from "../../contants/icon";
import { useTranslation } from "react-i18next";
import { usePageAnimation } from "../../gsap";
import { useScrollReveal, useStaggerReveal } from "../../gsap";
import dashboard from "../../assets/Dashboard/phuongBinhHungHoa.webp";
import cauOngLanh from "../../assets/Dashboard/phuongCauOngLanh.webp"
const projects = [
  {
    id: 1,
    category: "web-app",
    status: "completed",
    tags: ["Reactjs","Echartjs", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Yup", "Formik", "Git" ,"Docker"],
    title: "Dashboard quản lý doanh nghiệp",
    desc: "Dashboard quản lý doanh nghiệp toàn diện với khả năng xử lý dữ liệu lớn .",
    image: dashboard,
    links: [
      { label: "product.viewDemo", icon: "material-symbols:link-rounded", url: "https://dashboard.hcmict.com.vn/", primary: true },
      { label: "product.github", icon: "material-symbols:code-rounded", url: ""},
    ],
  },
  {
    id: 2,
    category: "web-app",
    status: "completed",
    tags: ["Dashboard"],
    title: "Phường cầu ông lãnh",
    desc: "Dashboard phường cầu ông lãnh.",
    image: cauOngLanh,
    links: [
      { label: "product.viewDemo", icon: "material-symbols:link-rounded", url: "https://phuongcauonglanh-dashboard.hcmict.com.vn/", primary: true},
      { label: "product.github", icon: "material-symbols:code-rounded", url: "", },
    ],
  },
  {
    id: 3,
    category: "web-app",
    status: "in-progress",
    tags: ["Php Laravel", "Reactjs","Microservice", "Taiwindcss", "Yup" , "Formik","Docker","Mysql", "Git"],
    title: "Job and Booking Board",
    desc: "Nền tảng tìm kiếm và đặt lịch các dịch vụ 2 chiều",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    links: [
      { label: "product.viewDemo", icon: "material-symbols:link-rounded", url: "", primary: true},
      { label: "product.github", icon: "material-symbols:code-rounded", url: "", },
    ],
  },
];

const ProjectsPage = () => {
  const [active, setActive] = useState("all");
  const { t } = useTranslation();
  const containerRef = usePageAnimation('scale');
  
  const headerReveal = useScrollReveal({ y: -30 });
  const filterReveal = useScrollReveal({ y: 20, delay: 0.2 });
  const gridReveal = useStaggerReveal('.project-card', { y: 50, stagger: 0.1 });

  const filters = [
    { label: t('product.all'), value: "all" }
  ];

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  const [featured, ...rest] = filtered;

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 dark:bg-[#090b0e] text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-1/4 -right-64 w-[50rem] h-[50rem] bg-blue-600/10 rounded-full blur-[9.375rem] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute -bottom-64 -left-64 w-[37.5rem] h-[37.5rem] bg-cyan-600/10 rounded-full blur-[9.375rem] -z-10 mix-blend-screen pointer-events-none"></div>

      <main className="max-w-7xl mx-auto px-6 md:px-16 py-24 lg:py-32 relative z-10 mt-16 lg:mt-0">
        
        {/* Hero */}
        <header ref={headerReveal} className="mb-14">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 text-gray-900 dark:text-white">
            {t('product.title')}
            <span className="text-blue-500 dark:text-cyan-400">.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed border-l-2 border-blue-500/50 dark:border-cyan-500/50 pl-6">
            {t('product.desc')}
          </p>
        </header>

        {/* Filters */}
        <div ref={filterReveal} className="flex flex-wrap gap-3 mb-16">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full border text-sm font-bold tracking-wide uppercase transition-all ${
                active === f.value
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-500 dark:to-blue-500 text-white border-transparent shadow-[0_0_20px_rgba(37,99,235,0.3)] dark:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-cyan-500/50 hover:text-blue-600 dark:hover:text-white"
              }`}
            >
              <span>{f.label}</span>
              <span className={`px-2 py-0.5 rounded-md text-[0.65rem] ${
                active === f.value 
                  ? 'bg-white/20 text-white' 
                  : 'bg-gray-200 dark:bg-white/10 text-gray-500 dark:text-gray-400'
              }`}>
                {f.value === 'all' ? projects.length : projects.filter(p => p.category === f.value).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div ref={gridReveal} className="flex flex-col gap-8">

            {/* Top Row */}
            <div className="grid lg:grid-cols-5 gap-8">
              
              {/* Featured */}
              {featured && (
                <div className="project-card lg:col-span-3 bg-gray-900 rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-white/10 hover:border-cyan-500/50 transition-all duration-500 group relative shadow-xl dark:shadow-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none"></div>                 
                  
                  {/* Status Badge */}
                  {featured.status && <StatusBadge status={featured.status} t={t} large />}
                  
                  {/* Counter Badge */}
                  <div className="absolute top-6 right-6 z-30 bg-black/50 dark:bg-black/60 backdrop-blur-md text-white/90 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-white/10 tracking-widest pointer-events-none">
                    1 / {filtered.length}
                  </div>

                  <div className="h-[28rem] overflow-hidden relative">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-50 group-hover:opacity-70"
                    />
                  </div>

                  <div className="p-10 flex flex-col absolute bottom-0 w-full z-20">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {featured.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-cyan-300 text-[0.625rem] font-black tracking-widest uppercase shadow-sm backdrop-blur-md">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-3xl font-black mb-4 leading-snug text-white group-hover:text-cyan-400 transition-colors">
                      {featured.title}
                    </h2>

                    <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl">
                      {featured.desc}
                    </p>

                    {featured.links && (
                      <div className="flex flex-wrap gap-4 mt-2">
                        {featured.links.map((link) => (
                          <Link
                            key={link.label}
                            to={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 transition font-bold text-sm px-5 py-2.5 rounded-xl ${
                              link.primary 
                                ? 'bg-cyan-500 hover:bg-cyan-400 text-gray-900 shadow-[0_4px_14px_0_rgba(34,211,238,0.39)]' 
                                : 'bg-white/10 text-white hover:text-cyan-300 hover:bg-white/20 backdrop-blur-md'
                            }`}
                          >
                            <MyIcon name={link.icon} size={20} />
                            <span>{t(link.label)}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Right Card */}
              {rest[0] && (
                <div className="lg:col-span-2">
                  <MediumCard project={rest[0]} tall t={t} displayIndex={2} total={filtered.length} />
                </div>
              )}
            </div>

            {/* Bottom */}
            {rest.length > 1 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rest.slice(1).map((p, i) => (
                  <MediumCard key={p.id} project={p} t={t} displayIndex={i + 3} total={filtered.length} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-32 text-xl font-bold">
            {t('product.noProjects')}
          </p>
        )}
      </main>
    </div>
  );
};

/* COMPONENTS */

const TagBadge = ({ label }) => (
  <span className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-white/5 border border-blue-200 dark:border-white/10 text-blue-600 dark:text-cyan-300 text-[0.625rem] font-black tracking-widest uppercase shadow-sm">
    {label}
  </span>
);

const MediumCard = ({ project, tall = false, t, displayIndex, total }) => (
  <div
    className={`project-card bg-white dark:bg-[#0e1116] rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-white/10 hover:border-blue-500/50 hover:-translate-y-2 shadow-xl dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 group flex flex-col relative ${
      tall ? "h-full" : ""
    }`}
  >
    {/* Counter Badge */}
    {(displayIndex && total) && (
      <div className="absolute top-4 right-4 z-30 bg-black/50 dark:bg-black/60 backdrop-blur-md text-white/90 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-white/10 tracking-widest pointer-events-none">
        {displayIndex} / {total}
      </div>
    )}

    {/* Status Badge */}
    {project.status && <StatusBadge status={project.status} t={t} />}

    <div className={`${tall ? "h-64 lg:h-1/2" : "h-56"} overflow-hidden relative`}>
      <div className="absolute inset-0 bg-slate-50/20 dark:bg-[#090b0e]/20 z-10 group-hover:bg-transparent transition-all"></div>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-90 dark:opacity-80 group-hover:opacity-100"
      />
    </div>

    <div className="p-8 flex flex-col flex-1 relative z-20">
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <TagBadge key={tag} label={tag} />
        ))}
      </div>

      <h3 className="text-2xl font-bold mb-4 leading-snug text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-1">
        {project.desc}
      </p>

      {project.links && (
        <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-gray-200 dark:border-white/10">
          {project.links.map((link) => (
            <Link
              key={link.label}
              to={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-xs transition font-bold uppercase tracking-wider px-4 py-2 rounded-lg ${
                link.primary 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md cursor-pointer' 
                  : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-white/10 cursor-pointer'
              }`}
            > 
              <MyIcon name={link.icon} size={16} />
              <span>{t(link.label)}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  </div>
);

const StatusBadge = ({ status, t, large = false }) => {
  const isCompleted = status === 'completed';
  const isInProgress = status === 'in-progress';
  
  return (
    <div className={`absolute ${large ? 'top-6 left-6' : 'top-4 left-4'} z-30 text-[0.65rem] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg border pointer-events-none bg-white dark:bg-[#11161d] ${
      isCompleted ? 'text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30' :
      isInProgress ? 'text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/30' :
      'text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-500/30'
    }`}>
      <span className="flex items-center gap-1.5">
        <span className={`w-1.5 h-1.5 rounded-full ${isCompleted ? 'bg-emerald-500 dark:bg-emerald-400' : isInProgress ? 'bg-amber-500 dark:bg-amber-400' : 'bg-rose-500 dark:bg-rose-400'}`}></span>
        {isCompleted ? t('product.statusCompleted') :
         isInProgress ? t('product.statusInProgress') :
         t('product.statusPending')}
      </span>
    </div>
  );
};

export default ProjectsPage;