import React from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useEffect } from "react";
const Banner = () => {
    const banner = gsap.timeline();

    useEffect(() => {
        banner.from(".information", {
            x: -50,
            opacity: 0,
            duration: 0.5,
            delay: 0.2,
        });
        // .from(".avatar-img", {
        //     rotate: 360,
        //     duration: 0.8,
        //     delay: 1,
        // });
    }, []);
    return (
        <>
            <div className="bg-[#778899] h-dvh ">
                <div className="md:px-20 py-5 md:flex h-dvh sm:py-30">
                    {/* 8 */}
                    <div className="md:w-1/2 flex items-center justify-center flex-col information md:mr-10">
                        <h6 className="text-xl text-amber-200 text-white">
                            Lập trình viên phần mềm
                        </h6>
                        <h1 className="uppercase font-medium text-4xl my-1.5 my-4 text-white">
                            Lê Hùng Vương
                        </h1>
                        <p className="text-xl  text-gray-50 text-justify leading-8">
                            Là sinh viên Công nghệ Thông tin đam mê lập trình
                            web và phát triển phần mềm, tôi chú trọng tư duy
                            logic, cấu trúc hệ thống và xây dựng các ứng dụng có
                            khả năng giải quyết vấn đề thực tế và mở rộng.
                        </p>

                        <div className="flex gap-x-4 mt-4">
                            <Link
                                to=""
                                className="border rounded-full text-center py-4 w-28 shadow-xl text-white hover:bg-amber-300 inline-block bg-black "
                            >
                                Tải CV
                                <i class="fa-solid fa-download  "></i>
                            </Link>
                            <button className="border rounded-full py-4 inline-block w-28 outline-0 text-white hover:cursor-not-allowed bg-black">
                                <i class="fa-solid fa-phone"></i> Liên Hệ
                            </button>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="md:w-1/2 flex items-center justify-center avatar-img ">
                        {/* img */}

                        <img
                            src="../../public/avtxinviec.jpg"
                            width={300}
                            height={200}
                            className="rounded-[50%] border-2 border order-1"
                            alt="ảnh của tôi"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
