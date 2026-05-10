import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50 text-gray-800">
      {/* Main */}
      <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
            Liên hệ
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Kết nối với tôi
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            Bạn có ý tưởng dự án hoặc muốn hợp tác? Hãy để lại tin nhắn,
            tôi sẽ phản hồi sớm nhất có thể.
          </p>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT - FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-100 shadow-xl shadow-blue-100/40 rounded-3xl p-8 md:p-10">
              <form className="space-y-6">
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Họ và tên
                    </label>

                    <input
                      type="text"
                      placeholder="Nguyễn Văn A"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Địa chỉ Email
                    </label>

                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Chủ đề
                  </label>

                  <input
                    type="text"
                    placeholder="Hợp tác dự án"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Tin nhắn
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tôi muốn trao đổi về..."
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none resize-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3 text-white font-semibold shadow-lg shadow-blue-200 transition hover:scale-[1.02] hover:shadow-xl active:scale-95"
                >
                  Gửi tin nhắn
                  <span className="material-symbols-outlined text-[20px]">
                    send
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT - INFO */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Cards */}
            <div className="space-y-5">
              {/* Email */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-md hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <span className="material-symbols-outlined">
                      mail
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>

                    <p className="text-gray-600">
                      contact@portfolio.com
                    </p>

                    <p className="text-gray-600">
                      support@portfolio.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-md hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-600">
                    <span className="material-symbols-outlined">
                      call
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-1">
                      Số điện thoại
                    </h3>

                    <p className="text-gray-600">
                      +84 (0) 123 456 789
                    </p>

                    <p className="text-gray-500 text-sm mt-1">
                      Thứ 2 - Thứ 6, 9:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-md hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-1">
                      Địa chỉ
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      Tòa nhà Innovation, Công viên phần mềm
                      Quang Trung, Quận 12, TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-3xl shadow-xl border border-white">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbpO439_5FjXx5GZHTshSXjUJLnADX2at2PUbwfq2ij8_91GDAxrsgFR77JiwyNiwKAChxf8EHfQjT18vW-6fWL72fwyBnfjqQN4pwyfRm3a5c4Edb1poNubFgwL_wfGP8z-yDyiAmAA9RwMZLuTih_bm9zvzAfisUHCzsNCM0hRgKwO8jjpxbg8VDpfAMUa1kwgm8C5h22FFBpCHWEQQK6zU8n1SCAroVHaYeHTLlfzSoEsk6qvhzLbAD8IsfcLRtTo0JRobuCUM"
                alt="Map"
                className="w-full h-72 object-cover hover:scale-105 transition duration-700"
              />
            </div>

            {/* Social */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-md">
              <h3 className="font-bold mb-4 text-gray-800">
                Mạng xã hội
              </h3>

              <div className="flex gap-4">
                {[
                  "public",
                  "code",
                  "share",
                  "chat",
                ].map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="material-symbols-outlined">
                      {icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;