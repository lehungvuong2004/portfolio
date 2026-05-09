import React from 'react'
import { MyIcon } from '../contants/icon'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Header = () => {
  const [active, setActive] = useState("Trang chủ");

  return (
    <div>
      <nav className="flex items-center justify-between px-6 md:px-16 py-6 border-b border-gray-800 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <div className="text-2xl font-bold tracking-tighter text-white">Hùng Vương</div>
        <div className="hidden lg:flex space-x-8 text-gray-400 text-sm font-medium">

          <Link
            to="/"
            onClick={() => setActive("Trang chủ")}
            className={
              active === "Trang chủ"
                ? "text-white border-b-2 border-blue-500 pb-1 transition-all"
                : "hover:text-white transition-colors"
            }
          >
            Trang chủ
          </Link>

          <Link
            to="/introduce"
            onClick={() => setActive("Giới thiệu")}
            className={
              active === "Giới thiệu"
                ? "text-white border-b-2 border-blue-500 pb-1 transition-all"
                : "hover:text-white transition-colors"
            }
          >
            Giới thiệu
          </Link>

          <Link
            to="/skill"
            onClick={() => setActive("Kỹ năng")}
            className={
              active === "Kỹ năng"
                ? "text-white border-b-2 border-blue-500 pb-1 transition-all"
                : "hover:text-white transition-colors"
            }
          >
            Kỹ năng
          </Link>

          <Link
            to="/products"
            onClick={() => setActive("Dự án")}
            className={
              active === "Dự án"
                ? "text-white border-b-2 border-blue-500 pb-1 transition-all"
                : "hover:text-white transition-colors"
            }
          >
            Dự án
          </Link>

          <Link
            to="/certiface"
            onClick={() => setActive("Chứng chỉ")}
            className={
              active === "Chứng chỉ"
                ? "text-white border-b-2 border-blue-500 pb-1 transition-all"
                : "hover:text-white transition-colors"
            }
          >
            Chứng chỉ
          </Link>
          <Link
            to="/contact"
            onClick={() => setActive("Liên hệ")}
            className={
              active === "Liên hệ"
                ? "text-white border-b-2 border-blue-500 pb-1 transition-all"
                : "hover:text-white transition-colors"
            }
          >
            Liên hệ
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex items-center bg-gray-900 border border-gray-700 rounded-lg px-2 py-1">
            <MyIcon name="lucide:globe" size={14} className="text-gray-400 mr-1" />
            <select className="bg-transparent text-[11px] text-gray-300 focus:outline-none cursor-pointer pr-1 uppercase">
              <option value="vi" className="bg-gray-900">VIE</option>
              <option value="en" className="bg-gray-900">ENG</option>
            </select>
          </div>

          <button className="hidden sm:block bg-[#b9d1ff] text-black px-5 py-2 rounded-lg text-sm font-bold hover:bg-white transition-all active:scale-95">
            Liên hệ ngay
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header