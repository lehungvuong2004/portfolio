import { Icon } from '@iconify/react';
import React from 'react';

const Hero = () => (
  <section className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-16 items-start py-20">
    {/* Left: Portrait Image */}
    <div className="md:col-span-5 md:sticky md:top-32">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/5">
          <img
            className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0bc5oDyiEmvofGnK_0vfSeLVZR-BdCRhBwvYf218DU4Rbg99KXHUs7LAWQM_EA5rB8X8F2n4V51C2RuY0H9KRc9QwYcGoZya1_jLsq7yjh8lmf1H4LvTlQkqlRIDTZ26Ns6ENhdrfK0n1XnqedfJs_tTfzOh3_7FGSOY2rd0t71riNN6RvevOWs3PCb722ycNijvrB7iucqS53MaDm8ItP5Bgqclokvc33tPKMKSvgbbPFw3F9U81Iobf18ULRlA-4cDYIM_Po-Y"
            alt="Professional Portrait"
          />
          {/* Overlay Tag giống trong ảnh */}
          <div className="absolute bottom-6 left-6 right-6 bg-[#1a1c1e]/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl">
            <p className="text-xl font-bold text-blue-200">Creative Developer</p>
            <p className="text-gray-400 text-sm mt-1">Tp. Hồ Chí Minh, Việt Nam</p>
          </div>
        </div>
      </div>
    </div>

    {/* Right: Detailed Content */}
    <div className="md:col-span-7 space-y-16">
      <div className="space-y-6">
        <h1 className="text-6xl font-bold text-white tracking-tight">Về tôi</h1>
        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
          Tôi là một kỹ sư phần mềm có kinh nghiệm thực chiến trong việc xây dựng các sản phẩm kỹ thuật số tập trung vào trải nghiệm người dùng và hiệu suất tối ưu.
        </p>
      </div>

      {/* Hành trình nghề nghiệp */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <span className="w-12 h-[2px] bg-blue-400/50"></span>
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-300">Hành trình nghề nghiệp</h2>
        </div>
        
        <div className="space-y-12 pl-2 border-l border-gray-800 ml-2">
          {/* Item 1 - Active */}
          <div className="relative pl-8">
            <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-[#121414] border-4 border-blue-400 flex items-center justify-center">
               <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold text-white">Thực Tập Sinh - VNPT Hồ Chí Minh</h3>
            <p className="text-blue-400 font-medium mt-1">2026 — Hiện tại</p>
            <p className="text-gray-400 mt-4 leading-relaxed">Học hỏi và phát triển frontend cho các dự án thương mại điện tử quy mô lớn, tối ưu hóa tốc độ tải trang lên đến 40%.</p>
          </div>

          {/* Item 2 - Inactive */}
          <div className="relative pl-8">
            <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-[#121414] border-4 border-gray-700"></div>
            <h3 className="text-2xl font-bold text-gray-300">Sinh viên tại trường Đại Học Công Nghệ Sài Gòn</h3>
            <p className="text-gray-500 font-medium mt-1">2022 — 2026</p>
            <p className="text-gray-500 mt-4 leading-relaxed">Phát triển các giao diện người dùng phức tạp sử dụng React và Tailwind CSS, phối hợp chặt chẽ với team UI/UX Design.</p>
          </div>
        </div>
      </div>

      {/* Học tập & Đam mê */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <span className="w-12 h-[2px] bg-blue-400/50"></span>
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-300">Học tập & Đam mê</h2>
        </div>
        <p className="text-gray-400 leading-relaxed text-lg">
          Hiện tại đang đang sinh viên năm 4 đang làm khóa luận. Tôi không chỉ viết code, tôi xây dựng giải pháp. Đam mê của tôi nằm ở việc kết hợp giữa tính logic của lập trình và tính thẩm mỹ của thiết kế để tạo ra những sản phẩm không chỉ chạy tốt mà còn phải đẹp.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          {["Open Source Contributor", "Photography", "Tech Blogging"].map(tag => (
            <span key={tag} className="px-5 py-2 bg-[#1a1c1e] text-gray-400 rounded-full text-sm border border-white/5 hover:border-blue-400/30 transition-colors cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Values = () => (
  <section className="max-w-7xl mx-auto px-6 md:px-16">
    <div className="bg-[#111214] rounded-[3rem] p-16 border border-white/5 shadow-inner">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-bold text-white">Giá trị cốt lõi</h2>
        <p className="text-gray-500">Những nguyên tắc định hình cách tôi làm việc và cống hiến</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: "lucide:lightbulb", title: "Sáng tạo không ngừng", desc: "Luôn tìm kiếm những giải pháp mới mẻ và độc đáo cho các vấn đề kỹ thuật phức tạp." },
          { icon: "lucide:shield-check", title: "Chất lượng là ưu tiên", desc: "Cam kết viết code sạch, dễ bảo trì và luôn tuân thủ các tiêu chuẩn bảo mật cao nhất." },
          { icon: "lucide:users-2", title: "Hợp tác & Chia sẻ", desc: "Tin rằng những sản phẩm vĩ đại nhất luôn được tạo ra từ sức mạnh của sự kết nối và đồng lòng." }
        ].map((item, index) => (
          <div key={index} className="p-10 bg-[#1a1c1e] rounded-3xl border border-white/5 hover:border-blue-500/20 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-[#22242a] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <Icon icon={item.icon} className="text-blue-300 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Introduce = () => {
  return (
    <div className="bg-[#121414] min-h-screen font-sans selection:bg-blue-500/30">
      <Hero />
      <Values />
    </div>
  );
};

export default Introduce;