import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <div>
                <p>Cùng nhau biến ý tưởng thành sản phẩm thực tế.</p>
                <p>
                    Tôi luôn sẵn sàng trao đổi, học hỏi và đồng hành trong những
                    dự án đầy tiềm năng.
                </p>
                <div className="">
                    <div className="">
                        <p>
                            <i class="fa-solid fa-envelope"></i>
                        </p>
                        <h5>Email</h5>
                        <Link href="">lehungvuong2004@gmail.com</Link>
                    </div>
                    <div className="">
                        <p>
                            <i class="fa-brands fa-github"></i>
                        </p>
                        <h5>GitHub</h5>
                        <Link href=""></Link>
                    </div>
                    <div className="">
                        <p>
                            <i class="fa-brands fa-linkedin"></i>
                        </p>
                        <h5>LinkedIn</h5>
                        <Link href=""></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
