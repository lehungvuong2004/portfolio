import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
export const Header = () => {
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".header", {
            y: -30,
            opacity: 0,
            duration: 0.5,
        }).from(
            ".sub-header a",
            {
                y: -40,
                opacity: 0,
                stagger: 0.06,
                duration: 0.4,
            },
            "-=0.2",
        );
    }, []);
    const inFomation = [
        "Trang chủ",
        "Giới thiệu",
        "Kỹ năng",
        "Sản phẩm",
        "Liên hệ",
    ];
    return (
        <>
            <div className="bg-[var(--bg-color)] ">
                <div className=" flex justify-between items-center  md:px-20 py-5  ">
                    {/* name */}
                    <div className="text-3xl uppercase font-medium  text-white tracking-widest header">
                        vương
                    </div>
                    {/* menu */}
                    <nav className="flex gap-x-5 sub-header">
                        {inFomation.map((item) => (
                            <Link
                                key={item}
                                to="#"
                                className="text-xl capitalize text-white no-underline hover:text-blue-400 "
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    {/* darkmode */}
                </div>

            

            
            </div>
        </>
    );
};
