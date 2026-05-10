import React from 'react';
import { MyIcon } from '../../contants/icon';

const Certificates = () => {
  const certificateList = [
    {
      id: 1,
      title: 'Html/css',
      org: 'Amazon Web Services (AWS)',
      year: '2024',
      category: 'Website',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Google Professional UX Design',
      org: 'Coursera | Google',
      year: '2023',
      category: 'DESIGN',
      image:
        'https://images.unsplash.com/photo-1586717791821-3f44a563de4c?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Meta Front-End Developer',
      org: 'Meta Open Source',
      year: '2023',
      category: 'DEVELOPMENT',
      image:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Microsoft Azure Fundamentals',
      org: 'Microsoft',
      year: '2022',
      category: 'CLOUD',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 5,
      title: 'Project Management Professional (PMP)',
      org: 'PMI Institute',
      year: '2022',
      category: 'MANAGEMENT',
      image:
        'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1000&auto=format&fit=crop',
    },
  ];

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      {/* Header */}
      <header className="mb-14 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
          Chứng chỉ chuyên môn
        </h1>

        <p className="max-w-2xl text-gray-400 text-base md:text-lg leading-relaxed">
          Tổng hợp các bằng cấp và chứng chỉ từ các tổ chức công nghệ hàng đầu
          thế giới, minh chứng cho sự nỗ lực và quá trình học tập không ngừng
          nghỉ.
        </p>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificateList.map((cert) => (
          <div
            key={cert.id}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/10 text-[10px] tracking-widest font-semibold text-gray-300">
                  {cert.category}
                </span>

                <span className="text-sm font-bold text-cyan-400">
                  {cert.year}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-cyan-400">
                {cert.title}
              </h3>

              <p className="text-sm italic text-gray-400">
                {cert.org}
              </p>
            </div>
          </div>
        ))}

        {/* Empty Card */}
        <div className="min-h-[350px] rounded-2xl border-2 border-dashed border-white/10 bg-white/[0.03] flex flex-col items-center justify-center p-6 opacity-70">
          <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mb-4">
            <MyIcon
              name="material-symbols:add-rounded"
              size={32}
              className="text-gray-400"
            />
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">
            Đang cập nhật
          </h3>

          <p className="text-sm text-center text-gray-400">
            Chứng chỉ tiếp theo đang trong quá trình hoàn thiện
          </p>
        </div>
      </div>
    </main>
  );
};

export default Certificates;