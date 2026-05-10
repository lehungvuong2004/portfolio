import React from "react";
import { MyIcon } from "../../contants/icon";

const SkillsPortfolio = () => {
  return (
    <div className="min-h-screen  from-slate-50 via-white to-blue-50 text-gray-800">
      <main className="max-w-7xl mx-auto px-6 py-24">
        {/* Hero */}
        <header className="mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-5 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Kỹ năng & Chuyên môn
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Tập trung vào việc xây dựng các ứng dụng web hiệu năng cao với trải nghiệm người dùng tối ưu.
            Dưới đây là bộ kỹ năng tôi đã tích lũy và phát triển trong suốt sự nghiệp.
          </p>
        </header>

        {/* Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Frontend */}
          <section className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <MyIcon
                name="material-symbols:terminal-rounded"
                size={26}
                className="text-blue-600"
              />
              <h2 className="text-2xl font-bold">
                Frontend Development
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <SkillCard icon="logos:javascript" label="React / Next.js" topLabel="JS" />
              <SkillCard icon="logos:css-3" label="Tailwind CSS" topLabel="CSS" />
              <SkillCard icon="material-symbols:code-rounded" label="TypeScript" topLabel="< >" />
              <SkillCard icon="ph:link-bold" label="Framer Motion" />
              <SkillCard icon="material-symbols:grid-view-outline" label="Redux Toolkit" />
              <SkillCard icon="material-symbols:nest-display-max-outline" label="Responsive Design" />
            </div>
          </section>

          {/* Tools */}
          <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <MyIcon
                name="material-symbols:construction-rounded"
                size={24}
                className="text-orange-500"
              />
              <h2 className="text-2xl font-bold">Tools</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Git", "Docker", "VS Code", "Postman", "Vercel", "Sentry"].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition"
                >
                  {tool}
                </span>
              ))}
            </div>

            <p className="mt-8 text-sm italic text-gray-500 leading-relaxed">
              Luôn cập nhật những công cụ mới nhất để tối ưu quy trình làm việc.
            </p>
          </section>

          {/* Backend */}
          <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <MyIcon
                name="material-symbols:database-outline"
                size={24}
                className="text-emerald-600"
              />
              <h2 className="text-2xl font-bold">Backend</h2>
            </div>

            <div className="space-y-6">
              <BackendItem
                icon="material-symbols:terminal-rounded"
                title="Php Laravel"
                desc="Xây dựng RESTful API và Real-time services."
              />

              <BackendItem
                icon="material-symbols:list-alt-outline-rounded"
                title="MySql/PostgreSQL"
                desc="Thiết kế cấu trúc dữ liệu và tối ưu hóa truy vấn."
              />
            </div>
          </section>

          {/* UI UX */}
          <section className="lg:col-span-2 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg flex flex-col md:flex-row">
            
            <div className="p-8 flex-1">
              <div className="flex items-center gap-3 mb-8">
                <MyIcon
                  name="material-symbols:brush-outline-rounded"
                  size={24}
                  className="text-pink-500"
                />

                <h2 className="text-2xl font-bold">
                  UI/UX Design
                </h2>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                Tư duy thiết kế lấy người dùng làm trung tâm,
                tập trung vào tính khả dụng và thẩm mỹ tối giản.
              </p>

              <div className="space-y-4">
                <DesignCheck label="Figma Master" />
                <DesignCheck label="Design Systems" />
                <DesignCheck label="Prototyping" />
              </div>
            </div>

            <div className="md:w-[45%] h-72 md:h-auto">
              <img
                alt="Design Showcase"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop"
              />
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

const SkillCard = ({ icon, label, topLabel }) => (
  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-lg hover:-translate-y-1 transition">
    
    {topLabel && (
      <span className="text-xs font-bold text-blue-600 mb-2 tracking-widest">
        {topLabel}
      </span>
    )}

    <MyIcon
      name={icon}
      size={26}
      className="text-blue-600 mb-3"
    />

    <span className="text-sm font-semibold text-gray-700 text-center">
      {label}
    </span>
  </div>
);

const BackendItem = ({ icon, title, desc }) => (
  <div className="flex gap-4">
    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
      <MyIcon
        name={icon}
        size={20}
        className="text-emerald-600"
      />
    </div>

    <div>
      <h3 className="font-bold text-lg mb-1">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
);

const DesignCheck = ({ label }) => (
  <div className="flex items-center gap-3">
    <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center">
      <MyIcon
        name="material-symbols:check-small-rounded"
        size={16}
        className="text-pink-600"
      />
    </div>

    <span className="font-medium text-gray-700">
      {label}
    </span>
  </div>
);

export default SkillsPortfolio;