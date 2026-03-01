import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bootstrap from "../../languges/bootstrap-stack.png";
import java from "../../languges/java.jpg";
import scong from "../../languges/c++.png";
import csap from "../../languges/csap.png";
import docker from "../../languges/docker.png";
import figma from "../../languges/figma.jpg";
import git from "../../languges/github.jpg";
import jsap from "../../languges/gsap.jpg";
import mysql from "../../languges/mysql.png";
import php from "../../languges/php.png";
import postman from "../../languges/postman.png";
import react from "../../languges/reactjs.jpg";
import tailwind from "../../languges/tailwindcss.png";

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
    const skillFe = Array(react, tailwind, bootstrap);
    const skillBe = Array(java, csap, mysql, php);
    const skillTool = Array(git, figma, postman, jsap, scong, docker);
    return (
        <>
            <div className="md:px-20 py-20 bg-gray-900">
                <h1 className="text-3xl font-bold uppercase text-white text-center">
                    Kỹ Năng
                </h1>
                <div className="md:grid-cols-2 grid gap-2 mt-8">
                    <div className="bg-gray-600 rounded-xl min-h-44 py-2.5">
                        <h2 className="text-center text-xl text-white">
                            Front End
                        </h2>
                        <div className=" flex justify-center items-center gap-2 mt-2">
                            {/* skillFe */}
                            {skillFe.map((item, index) => {
                                return (
                                    <div className="" key={index}>
                                        <img
                                            src={item}
                                            alt=""
                                            width={100}
                                            height={100}
                                            className="rounded-full "
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <div className="img-langugue">
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="bg-gray-600 rounded-xl min-h-44 py-2.5">
                        <h2 className="text-center text-xl text-white  ">
                            Back End
                        </h2>
                        {/* skill */}
                        <div className=" flex justify-center items-center gap-2 mt-2">
                            {skillBe.map((item, index) => (
                                <div className="" key={index}>
                                    <img
                                        src={item}
                                        alt=""
                                        width={100}
                                        height={100}
                                        className="rounded-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* <div className=""></div> */}
                </div>
                <div className="mx-auto mt-6">
                    <div className="bg-gray-600 rounded-xl min-h-44 py-2.5">
                        <h1 className="text-center text-xl text-white">
                            Tool & Other
                        </h1>
                        {/* tool and other */}
                        <div className=" flex justify-center items-center gap-2 mt-2">
                            {skillTool.map((item, index) => (
                                <div className="" key={index}>
                                    <img
                                        src={item}
                                        alt=""
                                        className="rounded-full"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skill;
