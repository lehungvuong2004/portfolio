import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <div className="md:px-20 py-20 bg-gray-900">
                <h1 className="text-3xl font-bold uppercase  text-white text-center">
                    Liên Hệ
                </h1>
                <div className="py-10 ">
                    <p className="text-center text-xl text-white">
                        Cùng nhau biến ý tưởng thành sản phẩm thực tế.
                    </p>
                    <p className="text-center text-gray-300 mt-2 text-xl">
                        Tôi luôn sẵn sàng trao đổi, học hỏi và đồng hành trong
                        những dự án đầy tiềm năng.
                    </p>
                    <div className="md:flex justify-between space-x-4 mt-8">
                        <div className="md:w-1/3 border-2 rounded-xl text-center py-7">
                            <p>
                                <i class="fa-solid fa-envelope text-white"></i>
                            </p>
                            <h5 className="my-2 text-xl  text-white">Email</h5>
                            <a
                                href="mailto:lehungvuong2004@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-white font-medium"
                            >
                                lehungvuong2004@gmail.com
                            </a>
                        </div>
                        <div className="md:w-1/3 border-2 rounded-xl text-center py-7">
                            <p>
                                <i class="fa-brands fa-github text-white"></i>
                            </p>
                            <h5 className="my-2 text-xl text-white ">GitHub</h5>
                            <Link
                                to="https://github.com/lehungvuong2004"
                                target="_blank"
                                className="text-2xl text-white font-medium"
                            >
                                lehungvuong2004
                            </Link>
                        </div>
                        <div className="md:w-1/3 border-2 rounded-xl text-center py-7 ">
                            <p>
                                <i class="fa-brands fa-linkedin w-12 text-white"></i>
                            </p>
                            <h5 className="my-2 text-xl text-white">
                                LinkedIn
                            </h5>
                            <Link
                                to="https://www.linkedin.com/in/l%C3%AA-h%C3%B9ng-v%C6%B0%C6%A1ng-84334839b/"
                                target="_blank"
                                className="text-2xl text-white font-medium"
                            >
                                lehungvuong_linkedIn
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-[#778899] h-30 flex justify-center items-center text-xl text-white">
                @ 2026 Lê Hùng Vương. All rights reserved.
            </footer>
        </>
    );
};

export default Footer;
