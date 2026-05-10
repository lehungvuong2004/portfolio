import React, { useState } from "react";
import { MyIcon } from "../../contants/icon";

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
      { label: "Xem Demo", icon: "material-symbols:link-rounded" },
      { label: "Github", icon: "material-symbols:code-rounded" },
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
  },
  {
    id: 3,
    category: "web-app",
    tags: ["SECURITY"],
    title: "ShieldAI Core",
    desc: "Nền tảng bảo mật mạng phát hiện và ngăn chặn DDoS.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "mobile-app",
    tags: ["MOBILE"],
    title: "Watch Companion",
    desc: "Ứng dụng điều khiển đồng hồ thông minh tối giản.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
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
      {
        label: "Chi tiết",
        icon: "material-symbols:visibility-outline-rounded",
      },
    ],
  },
];

const filters = [
  { label: "Tất cả", value: "all" },
  { label: "Web App", value: "web-app" },
  { label: "Mobile App", value: "mobile-app" },
  { label: "UI/UX Design", value: "ui-ux" },
];
const ProjectsPage = () => {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  const [featured, ...rest] = filtered;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <main className="max-w-7xl mx-auto px-6 py-24">
        
        {/* Hero */}
        <header className="mb-14">
          <h1 className="text-5xl font-bold tracking-tight mb-5">
            Dự án tiêu biểu
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Khám phá những sản phẩm kỹ thuật số được xây dựng với sự tập trung
            vào hiệu năng và trải nghiệm người dùng.
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
                active === f.value
                  ? "bg-amber-700 text-white border-b-blue-950"
                  : "bg-white text-gray-600 border-gray-300 hover:border-gray-500"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="flex flex-col gap-6">

            {/* Top Row */}
            <div className="grid lg:grid-cols-5 gap-6">
              
              {/* Featured */}
              <div className="lg:col-span-3 bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
                
                <div className="h-80 overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-8 flex flex-col">
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {featured.tags.map((tag) => (
                      <TagBadge key={tag} label={tag} />
                    ))}
                  </div>

                  <h2 className="text-3xl font-bold mb-4 leading-snug">
                    {featured.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {featured.desc}
                  </p>

                  {featured.links && (
                    <div className="flex gap-6">
                      {featured.links.map((link) => (
                        <button
                          key={link.label}
                          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
                        >
                          <MyIcon name={link.icon} size={18} />
                          <span>{link.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Card */}
              {rest[0] && (
                <div className="lg:col-span-2">
                  <MediumCard project={rest[0]} tall />
                </div>
              )}
            </div>

            {/* Bottom */}
            {rest.length > 1 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.slice(1).map((p) => (
                  <MediumCard key={p.id} project={p} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-20">
            Không có dự án nào.
          </p>
        )}
      </main>
    </div>
  );
};

/* COMPONENTS */

const TagBadge = ({ label }) => (
  <span className="px-3 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-semibold tracking-wide">
    {label}
  </span>
);

const MediumCard = ({ project, tall = false }) => (
  <div
    className={`bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition ${
      tall ? "h-full" : ""
    }`}
  >
    <div className={`${tall ? "h-[420px]" : "h-[220px]"} overflow-hidden`}>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover hover:scale-105 transition duration-500"
      />
    </div>

    <div className="p-6">
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <TagBadge key={tag} label={tag} />
        ))}
      </div>

      <h3 className="text-xl font-bold mb-3 leading-snug">
        {project.title}
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
        {project.desc}
      </p>

      {project.links && (
        <div className="flex gap-5 mt-5">
          {project.links.map((link) => (
            <button
              key={link.label}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition"
            >
              <MyIcon name={link.icon} size={16} />
              <span>{link.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default ProjectsPage;