

import { useTranslation } from "react-i18next";
import { usePageAnimation } from "../../gsap";
import { useScrollReveal, useStaggerReveal } from "../../gsap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import address from "../../assets/unnamed1.webp";
const Contact = () => {
  const { t } = useTranslation();
  const containerRef = usePageAnimation('scale');

  const headerReveal = useScrollReveal({ y: -30 });
  const formReveal = useScrollReveal({ x: -50, delay: 0.2 });
  const infoReveal = useStaggerReveal('.info-card', { x: 50, stagger: 0.15 });
  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 dark:bg-[#090b0e] text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 right-0 w-[31.25rem] h-[31.25rem] bg-blue-600/10 rounded-full blur-[7.5rem] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[37.5rem] h-[37.5rem] bg-cyan-600/10 rounded-full blur-[9.375rem] -z-10 mix-blend-screen pointer-events-none"></div>
      <main className="pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto relative z-10">
        <header ref={headerReveal} className="mb-20 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-black tracking-widest uppercase mb-6 border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
            {t('contact.contact')}
          </span>

          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
            {t('contact.connect')}
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
            {t('contact.desc')}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div ref={formReveal} className="lg:col-span-7">
            <div className="bg-white/80 dark:bg-[#0e1116]/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-2xl rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group transition-colors duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[5rem] rounded-full group-hover:bg-cyan-500/10 transition-all pointer-events-none"></div>

              <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-3 text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      {t('contact.fullname')}
                    </label>

                    <input
                      type="text"
                      placeholder={t('contact.placeholderName')}
                      className="w-full rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#090b0e] px-5 py-4 text-gray-900 dark:text-white outline-none transition-all focus:border-cyan-500 focus:bg-white dark:focus:bg-[#11161d] focus:ring-4 focus:ring-cyan-500/10 placeholder-gray-400 dark:placeholder-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block mb-3 text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      placeholder={t('contact.placeholderEmail')}
                      className="w-full rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#090b0e] px-5 py-4 text-gray-900 dark:text-white outline-none transition-all focus:border-cyan-500 focus:bg-white dark:focus:bg-[#11161d] focus:ring-4 focus:ring-cyan-500/10 placeholder-gray-400 dark:placeholder-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-3 text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    {t('contact.subject')}
                  </label>

                  <input
                    type="text"
                    placeholder={t('contact.placeholderSubject')}
                    className="w-full rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#090b0e] px-5 py-4 text-gray-900 dark:text-white outline-none transition-all focus:border-cyan-500 focus:bg-white dark:focus:bg-[#11161d] focus:ring-4 focus:ring-cyan-500/10 placeholder-gray-400 dark:placeholder-gray-600"
                  />
                </div>

                <div>
                  <label className="block mb-3 text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    {t('contact.message')}
                  </label>

                  <textarea
                    rows={6}
                    placeholder={t('contact.placeholderMessage')}
                    className="w-full rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#090b0e] px-5 py-4 text-gray-900 dark:text-white outline-none resize-none transition-all focus:border-cyan-500 focus:bg-white dark:focus:bg-[#11161d] focus:ring-4 focus:ring-cyan-500/10 placeholder-gray-400 dark:placeholder-gray-600"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-gray-900 dark:bg-white dark:text-gray-900 px-10 py-4 text-white font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95"
                >
                  {t('contact.sendMessage')}
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT - INFO */}
          <div ref={infoReveal} className="lg:col-span-5 space-y-6">
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Email */}
              <div className="info-card bg-white dark:bg-[#0e1116] rounded-4xl p-6 md:p-8 border border-gray-200 dark:border-white/5 hover:border-cyan-500/30 transition-all group shadow-xl dark:shadow-lg relative overflow-hidden hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[3.125rem] rounded-full group-hover:bg-cyan-500/20 transition-all"></div>

                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Icon icon="ic:outline-email" className="text-cyan-500 dark:text-cyan-400 text-3xl"></Icon>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{t('contact.email')}</h3>

                    <p className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">
                      hungvuong04.dev@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="info-card bg-white dark:bg-[#0e1116] rounded-4xl p-6 md:p-8 border border-gray-200 dark:border-white/5 hover:border-purple-500/30 transition-all group shadow-xl dark:shadow-lg relative overflow-hidden hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[3.125rem] rounded-full group-hover:bg-purple-500/20 transition-all"></div>

                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:scale-110 transition-transform flex-shrink-0">
                    {/* call */}
                    <Icon icon="ic:outline-phone" className="text-purple-500 dark:text-purple-400 text-3xl"></Icon>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
                      {t('contact.phone')}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">
                      +84 973 244 354
                    </p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="info-card bg-white dark:bg-[#0e1116] rounded-4xl p-6 md:p-8 border border-gray-200 dark:border-white/5 hover:border-pink-500/30 transition-all group shadow-xl dark:shadow-lg relative overflow-hidden hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-[3.125rem] rounded-full group-hover:bg-pink-500/20 transition-all"></div>

                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center border border-pink-500/20 group-hover:scale-110 transition-transform shrink-0">
                    <Icon icon="boxicons:location" className="material-symbols-outlined text-pink-500 dark:text-pink-400 text-3xl"></Icon>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
                      {t('contact.address')}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {t('contact.addressDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="info-card overflow-hidden rounded-[2.5rem] shadow-xl dark:shadow-2xl border border-gray-200 dark:border-white/10 group">
              <img
                loading="lazy"
                src={address}
                alt="Map"
                className="w-full h-80 object-cover mix-blend-luminosity opacity-70 group-hover:mix-blend-normal group-hover:opacity-100 transition duration-700 group-hover:scale-105"
              />
            </div>

            {/* Social */}
            <div className="info-card bg-white dark:bg-[#0e1116] rounded-[2.5rem] p-8 md:p-10 border border-gray-200 dark:border-white/5 shadow-xl dark:shadow-lg flex flex-col items-center transition-colors duration-500">
              <h3 className="font-bold mb-6 text-gray-700 dark:text-gray-300 uppercase tracking-widest text-sm">
                {t('contact.social')}
              </h3>

              <div className="flex gap-4">
                {[
                  { icon: "ic:baseline-facebook", color: "blue", label: "Facebook" },
                  { icon: "mdi:git", color: "cyan", label: "GitHub" },
                  { icon: "material-symbols:link", color: "purple", label: "Portfolio" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    target="_blank"
                    to="https://www.facebook.com/lehungvuong2004/"
                    aria-label={item.label}
                    className={`w-14 h-14 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:bg-${item.color}-50 dark:hover:bg-${item.color}-500/20 hover:border-${item.color}-300 dark:hover:border-${item.color}-500/40 hover:text-${item.color}-600 dark:hover:text-${item.color}-400 transition-all duration-300 hover:-translate-y-2 shadow-sm`}
                  >
                    <Icon icon={item.icon} className="text-2xl" target="_blank" />
                  </Link>
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