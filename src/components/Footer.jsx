import React from 'react'
import { Icon } from '@iconify/react'
import { MyIcon } from '../contants/icon'
const Footer = () => {
  return (
    <div>   {/* FOOTER */}
      <footer className="border-t border-gray-800 bg-[#0D0E0F] px-6 md:px-16 py-12 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500">
        <div>
          <div className="text-xl font-bold text-white mb-2">Portfolio</div>
          <p className="text-[10px] uppercase tracking-widest">© 2026 Portfolio. Tất cả quyền được bảo lưu.</p>
        </div>

        <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-white flex items-center gap-2 transition-colors">
            <MyIcon name="mdi:linkedin" size={16} /> LinkedIn
          </a>
          <a href="#" className="hover:text-white flex items-center gap-2 transition-colors">
            <MyIcon name="mdi:github" size={16} /> GitHub
          </a>
          <a href="#" className="hover:text-white flex items-center gap-2 transition-colors">
            <MyIcon name="ri:twitter-x-fill" size={14} /> Twitter
          </a>
          <a href="#" className="text-white border-b border-white pb-1 flex items-center gap-2">
            <MyIcon name="solar:download-bold" size={16} /> Tải CV
          </a>
        </div>
      </footer></div>
  )
}

export default Footer