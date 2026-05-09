import React from 'react';
import { Icon } from '@iconify/react';
import { MyIcon } from '../../contants/icon';
const PortfolioHome = () => {
  const heroSection = () => (
    <section className="max-w-7xl mx-auto px-6 md:px-16 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-gray-300 text-[11px] px-3 py-1.5 rounded-full border border-gray-800 mb-8">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
          Sẵn sàng cho các thử thách mới
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-4">
          Xin chào, mình là <br />
          <span className="text-[#88afff]">Lê Hùng Vương</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-400 mb-6">Intern Frontend Developer</h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
          Kiến tạo trải nghiệm người dùng hiện đại thông qua sự tối giản, hiệu suất và những dòng mã tinh tế.
          Chuyên gia trong việc chuyển đổi ý tưởng thành các ứng dụng web đẳng cấp thế giới.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <button className="bg-[#b9d1ff] text-black px-8 py-3.5 rounded-xl hover:bg-black hover:text-white font-bold hover:shadow-[0_0_25px_rgba(185,209,255,0.2)] transition-all">
            Xem dự án
          </button>
          <button className="border border-gray-700 px-8 py-3.5 rounded-xl font-bold hover:bg-white hover:text-black cursor-pointer transition-all">
            Tải CV
          </button>
        </div>

        <div className="flex gap-16 border-t border-gray-800 pt-10">
          <div>
            <div className="text-4xl font-bold">3+</div>
            <div className="text-gray-500 text-[11px] uppercase tracking-widest mt-2 font-medium">Tháng kinh nghiệm</div>
          </div>
          <div>
            <div className="text-4xl font-bold">10+</div>
            <div className="text-gray-500 text-[11px] uppercase tracking-widest mt-2 font-medium">Dự án hoàn thành</div>
          </div>
        </div>
      </div>

      {/* IMAGE AREA - Dựa trên image_280218.jpg */}
      <div className="relative flex justify-center">
        <div className="relative w-full max-w-[480px]">
          <div className="rounded-[2.5rem] overflow-hidden border border-gray-800 bg-[#111] aspect-[4/5] relative shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
              alt="Avatar"
              className="w-full h-full object-cover grayscale-[20%]"
            />
          </div>

          {/* Badge nổi - Dùng Iconify */}
          <div className="absolute -bottom-6 -left-6 md:-left-10 bg-[#1a1a1a]/95 backdrop-blur-xl p-5 rounded-2xl border border-gray-700 flex items-center gap-4 shadow-2xl shadow-blue-900/20">
            <div className="bg-blue-600/20 p-3 rounded-xl border border-blue-500/30">
              <MyIcon name="solar:code-bold" className="text-blue-400" size={24} />
            </div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase font-extrabold tracking-[0.15em]">Kỹ năng chính</div>
              <div className="text-sm font-bold text-gray-200">React, Tailwind, PhpLaravel</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
  const Skill = () => {
    const tags = ["React","TypeScript", "TailwindCSS", "Yup", "Formik", "Redux", "Zutand","Lighthouse"];

    return (
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 text-white">
        <h3 className="text-3xl font-bold mb-12">Kỹ năng & Chuyên môn</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card lớn: Frontend Architecture */}
          <div className="md:row-span-2 bg-[#151515] p-10 rounded-[2.5rem] border border-gray-800 flex flex-col justify-between min-h-[500px]">
            <div>
              <MyIcon name="fluent:layout-24-filled" className="text-blue-400 mb-8" size={36} />
              <h4 className="text-2xl font-bold mb-4">Frontend Architecture</h4>
              <p className="text-gray-400 leading-relaxed mb-8">
                Xây dựng các ứng dụng quy mô lớn với React, Vue và các framework hiện đại.
              </p>
            </div>

            {/* Phần Tags công nghệ */}
            <div className="mt-auto">
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-5 py-2 bg-[#1a1a1a] border border-gray-800 rounded-full text-sm text-gray-300 shadow-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-center text-gray-500 text-sm">Và nhiều công nghệ khác...</p>
            </div>
          </div>
          <div className="bg-[#151515] p-8 rounded-[2.5rem] border border-gray-800 flex flex-col justify-end min-h-[240px] relative overflow-hidden group hover:border-blue-400/50 transition-all">
            <MyIcon name="bolt:zap-fill" className="text-blue-400 mb-6" size={32} />
            <h4 className="text-xl font-bold">Back-End: <span>Php, Php Laravel, Java, Mysql, PostgreSql</span></h4>
          </div>
             <div className="bg-[#151515] p-8 rounded-[2.5rem] border border-gray-800 flex flex-col justify-end min-h-[240px] relative overflow-hidden group hover:border-blue-400/50 transition-all">
            <MyIcon name="bolt:zap-fill" className="text-blue-400 mb-6" size={32} />
            <h4 className="text-xl font-bold">Tool:<span> Git, Docker, CiCd</span></h4>
          </div>
          <div className="bg-[#151515] p-8 rounded-[2.5rem] border border-gray-800 flex flex-col justify-end min-h-[240px] relative overflow-hidden group hover:border-orange-500/50 transition-all">
            <MyIcon name="ic:round-palette" className="text-orange-400 mb-6" size={32} />
            <h4 className="text-xl font-bold">UI/UX Design</h4>
          </div>
          <div className="bg-[#151515] p-8 rounded-[2.5rem] border border-gray-800 flex flex-col justify-end min-h-[240px] relative overflow-hidden group hover:border-blue-400/50 transition-all">
            <MyIcon name="bolt:zap-fill" className="text-blue-400 mb-6" size={32} />
            <h4 className="text-xl font-bold">Performance</h4>
          </div>
        </div>
      </section>
    );
  };
  return (
    <>
      {heroSection()}
      {Skill()}
    </>
  )
}
export default PortfolioHome;