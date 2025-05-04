import React from "react";
import { Link } from "react-router-dom";

import Course01 from "../assets/Course01.png";
import Course02 from "../assets/Course02.png";
import Container from "./layer/Container";
import Flex from "./layer/Flex";

const Course = () => {
  return (
    <>
      <Container>
        <div>
          <Flex className="mb-12 items-center sm:items-end justify-between">
            <div className="w-60 sm:w-125 md:w-xl lg:w-3xl xl:w-5xl">
              <h2 className="font-Manrope font-semibold text-3xl sm:text-4xl xl:text-5xl leading-13 lg:leading-18 text-[#262626]">
                Our Courses
              </h2>
              <p className="hidden sm:block font-Manrope font-normal text-base xl:text-lg leading-6.75 text-[#59595A]">
                Lorem ipsum dolor sit amat consectetur. Tempus tincidunt team egest edit id impedient et. Cars eu sit dignissim lorem nibs et. Ac cum eger habitats in veldt fringier fuegian selectus in.
              </p>
            </div>
            <div>
              <button className="py-4.5 px-6 rounded-lg cursor-pointer bg-[#002868] font-Manrope font-medium text-base xl:text-lg leading-6.75 text-white">
                View All
              </button>
            </div>
          </Flex>
          <div className="sm:flex justify-between">
            <div className="w-full mb-6 sm:mb-0 sm:w-[49%] p-6 lg:p-12.5 rounded-2xl border border-[#F1F1F3] bg-[#F0F0F0]">
             <div>
                <Link>
                 <img className="rounded-lg" src={Course01} alt="Course01.png" />
                </Link>
             </div>
             <div className="my-7.5">
                <Flex className="items-center justify-between">
                    <div className="w-37 md:w-46 lg:w-55">
                      <Flex className="justify-between">
                        <Link className="py-2.5 px-2 md:px-4 rounded-lg bg-white">
                          <p className="font-Manrope font-medium text-sm lg:text-lg leading-3.5 lg:leading-4.5 text-[#4C4C4D]">4 Weeks</p>
                        </Link>
                        <Link className="py-2.5 px-2 md:px-4 rounded-lg bg-white">
                          <p className="font-Manrope font-medium text-sm lg:text-lg leading-3.5 lg:leading-4.5 text-[#4C4C4D]">Beginner</p>
                        </Link>
                      </Flex>
                    </div>
                    <h4 className="font-Manrope font-medium text-base lg:text-xl leading-5 text-[#262626]">By John Smith</h4>
                </Flex>
                <div className="mt-7.5">
                    <h3 className="mb-3.5 font-Manrope font-semibold text-xl md:text-2xl leading-7.5 md:leading-9 text-[#262626]">Web Design Fundamentals</h3>
                    <p className="font-Manrope font-normal text-base sm:text-lg leading-6 sm:leading-6.75 text-[#4C4C4D]">Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                </div>
             </div>
             <div className="">
                <button className="w-full py-4.5 px-6 rounded-lg border border-[#F1F1F3] cursor-pointer bg-[#002868] font-Poppins font-medium text-lg leading-6.75 text-white">Get it Now</button>
             </div>
            </div>
            <div className="w-full sm:w-[49%] p-6 lg:p-12.5 rounded-2xl border border-[#F1F1F3] bg-[#F0F0F0]">
             <div>
                <Link>
                 <img className="rounded-lg" src={Course02} alt="Course02.png" />
                </Link>
             </div>
             <div className="my-7.5">
                <Flex className="items-center justify-between">
                    <div className="w-37 md:w-46 lg:w-55">
                      <Flex className="justify-between">
                        <Link className="py-2.5 px-2 md:px-4 rounded-lg bg-white">
                          <p className="font-Manrope font-medium text-sm lg:text-lg leading-3.5 lg:leading-4.5 text-[#4C4C4D]">4 Weeks</p>
                        </Link>
                        <Link className="py-2.5 px-2 md:px-4 rounded-lg bg-white">
                          <p className="font-Manrope font-medium text-sm lg:text-lg leading-3.5 lg:leading-4.5 text-[#4C4C4D]">Beginner</p>
                        </Link>
                      </Flex>
                    </div>
                    <h4 className="font-Manrope font-medium text-base lg:text-xl leading-5 text-[#262626]">By John Smith</h4>
                </Flex>
                <div className="mt-7.5">
                    <h3 className="mb-3.5 font-Manrope font-semibold text-xl md:text-2xl leading-7.5 md:leading-9 text-[#262626]">Web Design Fundamentals</h3>
                    <p className="font-Manrope font-normal text-base sm:text-lg leading-6 sm:leading-6.75 text-[#4C4C4D]">Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                </div>
             </div>
             <div className="">
                <button className="w-full py-4.5 px-6 rounded-lg border border-[#F1F1F3] cursor-pointer bg-[#002868] font-Poppins font-medium text-lg leading-6.75 text-white">Get it Now</button>
             </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Course;
