import React from "react";
import { Link } from "react-router-dom";

export const Product = () => {
    return (
        <>
            <div className="md:px-20 py-20 bg-[#778899]">
                <h1 className="text-3xl font-bold uppercase text-center text-white">
                    Sản Phẩm
                </h1>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mt-8 ">
                    <div className="bg-gray-900 max-h-[860px] border  border-2 w-full overflow-hidden">
                        <img
                            src="../../public/foodjpg.jpg"
                            alt="ảnh đồ ăn"
                            width="100%"
                            height="200px"
                            className="object-cover inline-block h-6/12 hover:scale-95 transition-all duration-100"
                        />
                        {/* nội dung */}
                        <div className="content mt-4 md:p-4">
                            <h2 className="capitalize text-white text-center text-3xl">
                                Đồ Ăn
                            </h2>
                            <p className="text-wrap text-clip text-white mt-4 text-xl line-clamp-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatibus adipisci
                                voluptates eligendi, maiores amet saepe at.
                                Sapiente quia iure tempora! Lorem ipsum dolor
                                sit amet consectetur adipisicing elit.
                                Voluptatibus adipisci voluptates eligendi,
                                maiores amet saepe at. Sapiente quia iure
                                tempora!
                            </p>
                            <p className="text-white mt-4 text-xl">
                                <span className="underline">Ngôn Ngữ</span>:
                                Reactjs , Php , Git , Bootstrap
                            </p>
                            <p className="text-white mt-2 text-xl">
                                <span className="">Xem Dự Án</span>:
                                <Link
                                    to="https://github.com/lehungvuong2004/doAnWeb1"
                                    target="_blank"
                                    className="text-xl"
                                >
                                    Web Thức Ăn
                                </Link>
                            </p>
                        </div>

                        {/* btn liên hệ */}

                        <div className="text-center mx-auto  p-4  mt-2  ">
                            <Link
                                to="https://www.facebook.com/lehungvuong2004/"
                                className="text-white text-xl hover:cursor-pointer rounded-full border px-8 py-6 hover:bg-amber-400"
                                target="_blank"
                            >
                                {" "}
                                Liên Hệ
                            </Link>
                        </div>
                    </div>
                    <div className="bg-gray-900 border max-h-[860px] border-2  w-full overflow-hidden">
                        <img
                            src="../../public/sach.jpg"
                            alt="ảnh đọc truyện"
                            width="100%"
                            height="200px"
                            className="object-cover inline-block h-6/12 hover:scale-95 transition-all duration-100 "
                        />
                        <div className="content mt-4 md:p-4">
                            <h2 className="capitalize text-white text-center text-3xl">
                                Bán Sách
                            </h2>
                            <p className="text-wrap text-clip text-white mt-4 text-xl line-clamp-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatibus adipisci
                                voluptates eligendi, maiores amet saepe at.
                                Sapiente quia iure tempora! Lorem ipsum dolor
                                sit amet consectetur adipisicing elit.
                                Voluptatibus adipisci voluptates eligendi,
                                maiores amet saepe at. Sapiente quia iure
                                tempora!
                            </p>
                            <p className="text-white mt-4 text-xl ">
                                <span className="underline">Ngôn Ngữ</span>:
                                Trang web tạo thuần Php với mysql
                            </p>
                            <p className="text-white mt-2 text-xl">
                                <span className="">Xem Dự Án</span>:
                                <Link
                                    to="https://github.com/lehungvuong2004/webbansach"
                                    target="_blank"
                                    className=" text-xl"
                                >
                                    Web Bán Sách
                                </Link>
                            </p>
                        </div>
                        <div className="text-center mx-auto  p-4  mt-2  ">
                            <Link
                                to="https://www.facebook.com/lehungvuong2004/"
                                className="text-white text-xl hover:cursor-pointer rounded-full border px-8 py-6 hover:bg-amber-400"
                                target="_blank"
                            >
                                {" "}
                                Liên Hệ
                            </Link>
                        </div>
                    </div>
                    <div className="bg-gray-900 border border-2  max-h-[860px] w-full overflow-hidden">
                        <img
                            src="../../public/tailwindcss.jpg"
                            alt="ôn tập taiwindcss"
                            width="100%"
                            height="200px"
                            className="object-cover inline-block h-6/12 hover:scale-95 transition-all duration-100"
                        />
                        {/* nội dung content */}
                        <div className="content mt-4 p-4 ">
                            <h2 className="capitalize text-white text-center text-3xl">
                                TailWindcss
                            </h2>
                            <p className="text-wrap text-clip text-white mt-4 text-xl line-clamp-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatibus adipisci
                                voluptates eligendi, maiores amet saepe at.
                                Sapiente quia iure tempora! Lorem ipsum dolor
                                sit amet consectetur adipisicing elit.
                                Voluptatibus adipisci voluptates eligendi,
                                maiores amet saepe at. Sapiente quia iure
                                tempora!
                            </p>
                            <p className="text-white mt-4 text-xl">
                                <span className="underline">Ngôn Ngữ</span>:
                                Reactjs , Tailwindcss , Git
                            </p>
                            <p className="text-white mt-2 text-xl">
                                <span className="">Xem Dự Án</span>:
                                <Link
                                    to="https://github.com/lehungvuong2004/doAnWeb1"
                                    target="_blank"
                                    className="text-xl"
                                >
                                    Học Tập Tailwindcss
                                </Link>
                            </p>
                        </div>
                        <div className="text-center mx-auto  p-4  mt-2 lg:pb-14 ">
                            <Link
                                to="https://www.facebook.com/lehungvuong2004/"
                                className="text-white text-xl hover:cursor-pointer rounded-full border px-8 py-6 hover:bg-amber-400"
                                target="_blank"
                            >
                                Liên Hệ
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
