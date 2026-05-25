import  { useState } from "react";
import { MyIcon } from "../../contants/icon";
import { useTranslation } from "react-i18next";
import { usePageAnimation } from "../../hooks/usePageAnimation";
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';

const projects = [
  {
    id: 1,
    category: "web-app",
    tags: ["WEB APP", "NEXT.JS", "TAILWIND CSS"],
    title: "Nova Dashboard: Phân tích dữ liệu thời gian thực",
    desc: "Hệ thống quản trị doanh nghiệp toàn diện với khả năng xử lý hàng triệu điểm dữ liệu mỗi giây.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    links: [
      { label: "product.viewDemo", icon: "material-symbols:link-rounded" },
      { label: "product.github", icon: "material-symbols:code-rounded", primary: true },
    ],
  },
  {
    id: 2,
    category: "mobile-app",
    tags: ["MOBILE"],
    title: "FitFlow Mobile",
    desc: "Ứng dụng theo dõi sức khỏe và luyện tập cá nhân hóa.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    links: [
      { label: "product.viewDemo", icon: "material-symbols:link-rounded" },
      { label: "product.github", icon: "material-symbols:code-rounded", primary: true },
    ],
  },
  {
    id: 3,
    category: "web-app",
    tags: ["SECURITY"],
    title: "ShieldAI Core",
    desc: "Nền tảng bảo mật mạng phát hiện và ngăn chặn DDoS.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    links: [
      { label: "product.viewDemo", icon: "material-symbols:link-rounded" },
      { label: "product.github", icon: "material-symbols:code-rounded", primary: true },
    ],
  },
  {
    id: 4,
    category: "mobile-app",
    tags: ["MOBILE"],
    title: "Watch Companion",
    desc: "Ứng dụng điều khiển đồng hồ thông minh tối giản.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    links: [
      { label: "product.viewDemo", icon: "material-symbols:link-rounded" },
      { label: "product.github", icon: "material-symbols:code-rounded", primary: true },
    ],
  },
  {
    id: 5,
    category: "ui-ux",
    tags: ["E-COMMERCE"],
    title: "Luxe Watch Shop",
    desc: "Website thương mại điện tử đồng hồ cao cấp.",
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=800&auto=format&fit=crop",
    links: [
      { label: "product.viewDemo", icon: "material-symbols:link-rounded" },
      { label: "product.github", icon: "material-symbols:code-rounded", primary: true },
    ],
  },
];

const ProjectsPage = () => {
  const [active, setActive] = useState("all");
  const { t } = useTranslation();
  const containerRef = usePageAnimation();
  
  const headerReveal = useScrollReveal({ y: -30 });
  const filterReveal = useScrollReveal({ y: 20, delay: 0.2 });
  const gridReveal = useStaggerReveal('.project-card', { y: 50, stagger: 0.1 });

  const filters = [
    { label: t('product.all'), value: "all" },
    { label: t('product.webApp'), value: "web-app" },
    { label: t('product.mobileApp'), value: "mobile-app" },
    { label: t('product.uiux'), value: "ui-ux" },
  ];

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  const [featured, ...rest] = filtered;

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 dark:bg-[#090b0e] text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-1/4 -right-64 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute -bottom-64 -left-64 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] -z-10 mix-blend-screen pointer-events-none"></div>

      <main className="max-w-7xl mx-auto px-6 md:px-16 py-24 lg:py-32 relative z-10">
        
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
              className={`px-6 py-2.5 rounded-full border text-sm font-bold tracking-wide uppercase transition-all ${
                active === f.value
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-500 dark:to-blue-500 text-white border-transparent shadow-[0_0_20px_rgba(37,99,235,0.3)] dark:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-cyan-500/50 hover:text-blue-600 dark:hover:text-white"
              }`}
            >
              {f.label}
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
                <div className="project-card lg:col-span-3 bg-white dark:bg-[#0e1116] rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-cyan-500/50 transition-all duration-500 group relative shadow-xl dark:shadow-none">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-[#0e1116] z-10"></div>
                  
                  <div className="h-96 overflow-hidden relative">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-90 dark:opacity-80 group-hover:opacity-100"
                    />
                  </div>

                  <div className="p-10 flex flex-col absolute bottom-0 w-full z-20">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {featured.tags.map((tag) => (
                        <TagBadge key={tag} label={tag} />
                      ))}
                    </div>

                    <h2 className="text-3xl font-black mb-4 leading-snug text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                      {featured.title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-2xl">
                      {featured.desc}
                    </p>

                    {featured.links && (
                      <div className="flex flex-wrap gap-4 mt-2">
                        {featured.links.map((link) => (
                          <button
                            key={link.label}
                            className={`flex items-center gap-2 transition font-bold text-sm px-5 py-2.5 rounded-xl ${
                              link.primary 
                                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] cursor-pointer' 
                                : 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-white/80 hover:text-blue-600 cursor-pointer  dark:hover:text-cyan-400 hover:bg-gray-200 dark:hover:bg-white/10'
                            }`}
                          >
                            <MyIcon name={link.icon} size={20} />
                            <span>{t(link.label)}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Right Card */}
              {rest[0] && (
                <div className="lg:col-span-2">
                  <MediumCard project={rest[0]} tall t={t} />
                </div>
              )}
            </div>

            {/* Bottom */}
            {rest.length > 1 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rest.slice(1).map((p) => (
                  <MediumCard key={p.id} project={p} t={t} />
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
  <span className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-white/5 border border-blue-200 dark:border-white/10 text-blue-600 dark:text-cyan-300 text-[10px] font-black tracking-widest uppercase shadow-sm">
    {label}
  </span>
);

const MediumCard = ({ project, tall = false, t }) => (
  <div
    className={`project-card bg-white dark:bg-[#0e1116] rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-white/10 hover:border-blue-500/50 hover:-translate-y-2 shadow-xl dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 group flex flex-col ${
      tall ? "h-full" : ""
    }`}
  >
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
            <button
              key={link.label}
              className={`flex items-center gap-2 text-xs transition font-bold uppercase tracking-wider px-4 py-2 rounded-lg ${
                link.primary 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md cursor-pointer' 
                  : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-white/10 cursor-pointer'
              }`}
            > 
              <MyIcon name={link.icon} size={16} />
              <span>{t(link.label)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default ProjectsPage;