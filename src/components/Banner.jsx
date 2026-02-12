import React from "react";

const Banner = () => {
    return (
        <>
            <div className="">
                <div className="md:px-20 py-5 flex ">
                    {/* 8 */}
                    <div className="md:w-1/2">
                        <h6>Lập trình viên phần mềm</h6>
                        <h1>Lê Hùng Vương</h1>
                        <p>
                            Là sinh viên Công nghệ Thông tin đam mê lập trình
                            web và phát triển phần mềm, tôi chú trọng tư duy
                            logic, cấu trúc hệ thống và xây dựng các ứng dụng có
                            khả năng giải quyết vấn đề thực tế và mở rộng.
                        </p>

                        <div className="flex">
                            <a href="">Tải CV</a>
                            <button>Liên Hệ</button>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="md:w-1/2">
                        {/* img */}

                        <img src="" alt="ảnh của tôi" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
